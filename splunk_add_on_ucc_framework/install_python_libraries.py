#
# Copyright 2021 Splunk Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import logging
import os
import shutil
import stat
from pathlib import Path
from typing import Sequence

logger = logging.getLogger("ucc_gen")


class SplunktaucclibNotFound(Exception):
    pass


def _check_ucc_library_in_requirements_file(path_to_requirements: str) -> bool:
    with open(path_to_requirements) as f_reqs:
        content = f_reqs.readlines()
    for line in content:
        if "splunktaucclib" in line:
            return True
    return False


def install_python_libraries(
    path: str, ucc_lib_target: str, python_binary_name: str, includes_ui: bool = False
):
    if os.path.exists(os.path.join(path, "lib", "requirements.txt")):
        path_to_reqs_file = os.path.join(path, "lib", "requirements.txt")
    elif os.path.exists(
        os.path.join(os.path.abspath(os.path.join(path, os.pardir)), "requirements.txt")
    ):
        path_to_reqs_file = os.path.join(
            os.path.abspath(os.path.join(path, os.pardir)), "requirements.txt"
        )
    else:
        path_to_reqs_file = None
    if path_to_reqs_file is not None:
        logger.info(f"Installing requirements from {path_to_reqs_file}")
        if includes_ui:
            ucc_library_present = _check_ucc_library_in_requirements_file(
                path_to_reqs_file
            )
            if not ucc_library_present:
                raise SplunktaucclibNotFound(
                    f"splunktaucclib is not found in {path_to_reqs_file}. "
                    f"Please add it there because this add-on has UI."
                )
        install_libraries(
            path_to_reqs_file,
            ucc_lib_target,
            python_binary_name,
        )
    else:
        logger.info("Could not find requirements file, nothing to install")

    packages_to_remove = (
        "setuptools",
        "bin",
        "pip",
        "distribute",
        "wheel",
    )
    remove_package_from_installed_path(
        ucc_lib_target,
        packages_to_remove,
    )

    remove_execute_bit(ucc_lib_target)


def install_libraries(
    requirements_file_path: str,
    installation_path: str,
    installer: str,
):
    if not os.path.exists(requirements_file_path):
        logger.warning(f"Unable to find requirements file: {requirements_file_path}")
    else:
        if not os.path.exists(installation_path):
            os.makedirs(installation_path)
        install_cmd = (
            installer
            + ' -m pip install -r "'
            + requirements_file_path
            + '" --no-compile --prefer-binary --ignore-installed --use-deprecated=legacy-resolver --target "'
            + installation_path
            + '"'
        )
        os.system(installer + " -m pip install pip --upgrade")
        os.system(install_cmd)


def remove_package_from_installed_path(
    installation_path: str, package_names: Sequence[str]
):
    p = Path(installation_path)
    try:
        for package_name in package_names:
            for o in p.glob(f"{package_name}*"):
                if o.is_dir():
                    logger.info(f"  removing directory {o} from {installation_path}")
                    shutil.rmtree(o)
    except FileNotFoundError:
        pass


def remove_execute_bit(installation_path: str):
    p = Path(installation_path)
    no_user_exec = ~stat.S_IEXEC
    no_group_exec = ~stat.S_IXGRP
    no_other_exec = ~stat.S_IXOTH
    no_exec = no_user_exec & no_group_exec & no_other_exec

    for o in p.rglob("*"):
        if not o.is_dir() and os.access(o, os.X_OK):
            logger.info(f"  fixing {o} execute bit")
            current_permissions = stat.S_IMODE(os.lstat(o).st_mode)
            os.chmod(o, current_permissions & no_exec)
