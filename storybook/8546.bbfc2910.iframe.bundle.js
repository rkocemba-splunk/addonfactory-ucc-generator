(self.webpackChunk_splunk_ucc_ui_lib=self.webpackChunk_splunk_ucc_ui_lib||[]).push([[8546],{"./node_modules/@splunk/react-ui/Tooltip.js":(module,__unused_webpack_exports,__webpack_require__)=>{(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>X});const n=__webpack_require__("./node_modules/react/index.js");var o=e.n(n);const r=__webpack_require__("./node_modules/prop-types/index.js");var a=e.n(r);const i=__webpack_require__("./node_modules/lodash/has.js");var l=e.n(i);const s=__webpack_require__("./node_modules/lodash/throttle.js");var u=e.n(s);const c=__webpack_require__("./node_modules/@splunk/react-ui/Popover.js");var p=e.n(c);const d=__webpack_require__("./node_modules/@splunk/react-ui/ScreenReaderContent.js");var f=e.n(d);const v=__webpack_require__("./node_modules/@splunk/themes/index.js"),h=__webpack_require__("./node_modules/@splunk/ui-utils/id.js"),m=__webpack_require__("./node_modules/@splunk/ui-utils/i18n.js"),y=__webpack_require__("./node_modules/@splunk/react-icons/SVGEnterprise.js");var b=e.n(y);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}const E=function C(e){var t=(0,v.useSplunkTheme)(),n=t.family,r=t.density;if("enterprise"===n)return o().createElement(b(),g({screenReaderText:(0,m._)("Info Circle"),viewBox:"0 0 24 24"},e),o().createElement("path",{fill:"currentColor",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.2001 8.1999C13.2001 7.53716 12.6628 6.9999 12.0001 6.9999C11.3373 6.9999 10.8001 7.53716 10.8001 8.1999C10.8001 8.86264 11.3373 9.3999 12.0001 9.3999C12.6628 9.3999 13.2001 8.86264 13.2001 8.1999ZM11.0001 16.0094V11.9999C11.0001 11.4476 11.4478 10.9999 12.0001 10.9999C12.5524 10.9999 13.0001 11.4476 13.0001 11.9999V16.0094C13.0001 16.5617 12.5524 17.0094 12.0001 17.0094C11.4478 17.0094 11.0001 16.5617 11.0001 16.0094Z"}));var a="compact"===r?"20":"24";return o().createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"}},o().createElement("path",{d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.2003 8.1999C13.2003 7.53716 12.663 6.9999 12.0003 6.9999C11.3376 6.9999 10.8003 7.53716 10.8003 8.1999C10.8003 8.86264 11.3376 9.3999 12.0003 9.3999C12.663 9.3999 13.2003 8.86264 13.2003 8.1999ZM11.0005 16.0094V11.9999C11.0005 11.4476 11.4482 10.9999 12.0005 10.9999C12.5528 10.9999 13.0005 11.4476 13.0005 11.9999V16.0094C13.0005 16.5617 12.5528 17.0094 12.0005 17.0094C11.4482 17.0094 11.0005 16.5617 11.0005 16.0094Z",fill:"currentColor",fillRule:"evenodd"}))},O=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var M=e.n(O);const S=__webpack_require__("./node_modules/@splunk/react-ui/Clickable.js");var k=e.n(S),R="16px",P=M().span.withConfig({displayName:"TooltipStyles__Styled",componentId:"sc-67fvgm-0"})(["",";position:relative;"],v.mixins.reset("block")),T=M().span.withConfig({displayName:"TooltipStyles__StyledInline",componentId:"sc-67fvgm-1"})(["",";position:relative;"],v.mixins.reset("inline-block")),w=M().span.withConfig({displayName:"TooltipStyles__StyledToggle",componentId:"sc-67fvgm-2"})(["display:block;"]),q=M().span.withConfig({displayName:"TooltipStyles__StyledToggleInline",componentId:"sc-67fvgm-3"})(["display:inline-block;"]),x=M().div.withConfig({displayName:"TooltipStyles__StyledContent",componentId:"sc-67fvgm-4"})(["padding:",";font-size:",";line-height:",";user-select:none;"],(0,v.pick)({enterprise:v.variables.spacingSmall,prisma:(0,v.pickVariant)("$isLabel",{false:"12px 16px",true:"4px 8px"})}),(0,v.pick)({enterprise:v.variables.fontSizeSmall,prisma:"inherit"}),(0,v.pick)({enterprise:"18px",prisma:(0,v.pickVariant)("$isLabel",{false:"inherit",true:"18px"})})),L=M()(k()).withConfig({displayName:"TooltipStyles__StyledButton",componentId:"sc-67fvgm-5"})(["cursor:default;"," "," &:focus{box-shadow:",";}"],(0,v.pick)({enterprise:(0,O.css)(["display:inline-block;width:",";height:",";border:2px solid ",";border-radius:",";font-size:",";font-weight:",";line-height:calc("," - 2px);text-align:center;color:",";vertical-align:baseline;&:not([disabled]){&:hover{text-decoration:none;}}"],R,R,v.variables.linkColor,R,v.variables.fontSizeSmall,v.variables.fontWeightSemiBold,R,v.variables.linkColor),prisma:(0,O.css)(["color:",";border-radius:50%;display:inline-block;vertical-align:middle;&:hover,&:focus{color:",";background:",";}"],v.variables.contentColorMuted,v.variables.contentColorActive,v.variables.interactiveColorOverlayHover)}),(0,v.pick)({prisma:{comfortable:(0,O.css)(["padding:8px;"]),compact:(0,O.css)(["padding:6px;"])}}),v.variables.focusShadow);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I.apply(this,arguments)}function A(e,t){if(null==e)return{};var o,r,n=function j(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return Z=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t},Z(e,t)}function N(e){var t=function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function n(){var r,o=$(e);if(t){var a=$(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function W(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;return z(e)}(this,r)}}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)},$(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G={appearance:a().string,children:a().node,closeDelay:a().number,closeWhen:a().oneOf(["default","notOnClick"]),content:a().node,contentRelationship:a().oneOf(["label","description"]),defaultPlacement:a().oneOf(["above","below","left","right","theme"]),elementRef:a().oneOfType([a().func,a().object]),inline:a().bool,onRequestClose:a().func,onRequestOpen:a().func,open:a().bool,openDelay:a().oneOfType([a().oneOf(["primary","secondary"]),a().number]),splunkTheme:a().object},J=function(e){!function V(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(r,e);var t=N(r);function r(e){var n;return function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),U(z(n=t.call(this,e)),"ariaId",void 0),U(z(n),"controlledExternally",void 0),U(z(n),"popoverId",void 0),U(z(n),"timeout",void 0),U(z(n),"handleMount",(function(e){e?(e.addEventListener("mouseenter",n.handleMouseEnter),e.addEventListener("mouseleave",n.handleMouseLeave)):n.state.anchorEl&&(n.state.anchorEl.removeEventListener("mouseenter",n.handleMouseEnter),n.state.anchorEl.removeEventListener("mouseleave",n.handleMouseLeave)),n.setState({anchorEl:e})})),U(z(n),"handlePopoverMount",(function(e){e?(e.addEventListener("mouseenter",n.handleMouseEnterPopover),e.addEventListener("mouseleave",n.handleMouseLeavePopover)):n.state.popoverEl&&(n.state.popoverEl.removeEventListener("mouseenter",n.handleMouseEnterPopover),n.state.popoverEl.removeEventListener("mouseleave",n.handleMouseLeavePopover)),n.setState({popoverEl:e})})),U(z(n),"handlePopoverOuterMount",(function(e){n.setState({popoverOuterEl:e})})),U(z(n),"handleHitAreaMount",(function(e){e?(e.addEventListener("mouseenter",n.handleMouseEnterHitArea),e.addEventListener("mousemove",n.handleMouseMoveHitArea),e.addEventListener("mouseleave",n.handleMouseLeaveHitArea)):n.state.hitAreaEl&&(n.state.hitAreaEl.removeEventListener("mouseenter",n.handleMouseEnterHitArea),n.state.hitAreaEl.removeEventListener("mousemove",n.handleMouseMoveHitArea),n.state.hitAreaEl.removeEventListener("mouseleave",n.handleMouseLeaveHitArea)),n.setState({hitAreaEl:e})})),U(z(n),"handleMouseEnter",(function(e){n.handleRequestOpen(e,{reason:"mouseEnterToggle"})})),U(z(n),"handleMouseEnterPopover",(function(e){n.handleRequestOpen(e,{reason:"mouseEnterPopover"})})),U(z(n),"handleMouseEnterHitArea",(function(e){n.handleRequestOpen(e,{reason:"mouseEnterHitArea"})})),U(z(n),"handleMouseLeave",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mouseLeaveToggle";(null==e.relatedTarget||e.relatedTarget!==n.state.popoverEl&&e.relatedTarget!==n.state.popoverOuterEl)&&n.handleRequestClose(e,{reason:t})})),U(z(n),"handleMouseLeavePopover",(function(e){n.handleMouseLeave(e,"mouseLeavePopover")})),U(z(n),"handleMouseLeaveHitArea",(function(e){n.handleMouseLeave(e,"mouseLeaveHitArea")})),U(z(n),"handleMouseMoveHitAreaImpl",(function(e){n.handleRequestClose(e,{reason:"mouseStopHitArea"})})),U(z(n),"handleMouseMoveHitArea",u()(n.handleMouseMoveHitAreaImpl,10)),U(z(n),"handleClick",(function(e){"notOnClick"!==n.props.closeWhen&&n.handleRequestClose(e,{reason:"toggleClick"})})),U(z(n),"handleFocus",(function(e){n.handleRequestOpen(e,{reason:"focusToggle"})})),U(z(n),"handleBlur",(function(e){n.handleRequestClose(e,{reason:"blurToggle"})})),U(z(n),"handlePopoverOnRequestClose",(function(e){n.handleRequestClose(null,e)})),U(z(n),"handleRequestClose",(function(e,t){var o=n.props.closeDelay;void 0!==n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){var o,r;n.isControlled()||n.setState({open:!1}),null===(o=(r=n.props).onRequestClose)||void 0===o||o.call(r,e,t)}),o)})),U(z(n),"handleRequestOpen",(function(e,t){var o=n.props.openDelay,a="number"==typeof o?o:"primary"===o?300:750;void 0!==n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){var r,a,o=n.isOpen();(n.isControlled()||n.setState({open:!0}),o)||(null===(r=(a=n.props).onRequestOpen)||void 0===r||r.call(a,e,t))}),a)})),n.controlledExternally=l()(e,"open"),n.popoverId=(0,h.createDOMID)("popover"),n.ariaId=(0,h.createDOMID)("aria-id"),n.state={anchorEl:null,open:!1,popoverEl:null,popoverOuterEl:null,hitAreaEl:null},n}return function B(e,t,n){return t&&D(e.prototype,t),n&&D(e,n),e}(r,[{key:"componentDidUpdate",value:function e(){0}},{key:"componentWillUnmount",value:function e(){void 0!==this.timeout&&clearTimeout(this.timeout)}},{key:"isControlled",value:function e(){return this.controlledExternally}},{key:"isOpen",value:function e(){var t=!!this.props.content;return this.state.anchorEl&&this.isControlled()?this.props.open:t&&this.state.open}},{key:"render",value:function e(){var R,t=this.props,r=t.appearance,a=t.children,i=t.content,l=t.defaultPlacement,s=t.elementRef,u=t.inline,v=(t.onRequestClose,t.onRequestOpen,t.splunkTheme),h=t.contentRelationship,y=A(t,["appearance","children","content","defaultPlacement","elementRef","inline","onRequestClose","onRequestOpen","splunkTheme","contentRelationship"]),b=this.state.anchorEl,g=!!i,C=this.isOpen(),O=u?T:P,M=u?q:w,S=v.isPrisma,k=S?"below":"above";return"label"===h?R={labelledBy:this.ariaId,"aria-labelledby":this.ariaId}:"description"===h&&(R={describedBy:this.ariaId,"aria-describedby":this.ariaId}),o().createElement(O,I({"data-test":"tooltip","data-test-open":C,"data-test-popover-id":this.popoverId,ref:s},y),o().createElement(M,{onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,ref:this.handleMount,"data-test":"toggle"},g&&(0,n.isValidElement)(a)?(0,n.cloneElement)(a,R):a,g&&!a&&o().createElement(L,{"aria-describedby":this.ariaId},S?o().createElement(E,{hideDefaultTooltip:!0,screenReaderText:(0,m._)("More info"),style:{height:"22px",width:"22px"}}):o().createElement(o().Fragment,null,o().createElement("span",{"aria-hidden":"true"},"?"),o().createElement(f(),null,(0,m._)("More info")))),g&&o().createElement(f(),{"aria-hidden":"true",id:this.ariaId},i)),o().createElement(p(),{role:"tooltip",align:"center",anchor:b,animationConfig:{tension:400},appearance:r,closeReasons:["offScreen","escapeKey"],defaultPlacement:"theme"===l?k:l,id:this.popoverId,open:C,onRequestClose:this.handlePopoverOnRequestClose,elementRef:this.handlePopoverMount,hitAreaRef:this.handleHitAreaMount,outerRef:this.handlePopoverOuterMount},o().createElement(x,{$isLabel:"label"===h},i)))}}]),r}(n.Component);U(J,"propTypes",G),U(J,"defaultProps",{appearance:"inverted",closeDelay:300,closeWhen:"default",contentRelationship:"description",defaultPlacement:"theme",inline:!0,openDelay:"primary"});var Q=(0,v.withSplunkTheme)(J);Q.propTypes=J.propTypes;const X=Q;module.exports=t})()}}]);