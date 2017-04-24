define([], function() {
    class CustomMenu {
        /**
         * Custom Menu
         * @constructor
         * @param {element} target - Target element to hover.
         * @param {object} navigator - Navigator to navigate page.
                    navigator.navigate(params)
         * @param {object} services - Object contains name - title key - value.
         */
        constructor(target, navigator, services) {
            this.target = target;
            this.navigator = navigator;
            this.services = services;
        }
        render () {
            this.el = document.createElement('div');
            // 1. Make the el hover on the target element
            // 2. Navigate to the input create/edit/clone page
            /**
            this.navigator.navigate({
                'service': 'input_01',
                'action': 'create'
            });
            */
            return this;
        }
    }
    return CustomMenu;
});
