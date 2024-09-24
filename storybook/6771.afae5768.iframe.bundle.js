(self.webpackChunk_splunk_ucc_ui_lib=self.webpackChunk_splunk_ucc_ui_lib||[]).push([[6771],{"./node_modules/@splunk/react-ui/CollapsiblePanel.js":(module,__unused_webpack_exports,__webpack_require__)=>{(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{SingleOpenPanelGroup:()=>ce,default:()=>je});const n=__webpack_require__("./node_modules/react/index.js");var r=e.n(n);const a=__webpack_require__("./node_modules/lodash/has.js");var o=e.n(a);const i=__webpack_require__("./node_modules/lodash/keys.js");var l=e.n(i);const s=__webpack_require__("./node_modules/lodash/omit.js");var c=e.n(s);const p=__webpack_require__("./node_modules/prop-types/index.js");var u=e.n(p);const d=__webpack_require__("./node_modules/@splunk/react-ui/TransitionOpen.js");var f=e.n(d);const b=__webpack_require__("./node_modules/@splunk/ui-utils/id.js"),v=__webpack_require__("./node_modules/@splunk/ui-utils/i18n.js"),m=__webpack_require__("./node_modules/@splunk/react-ui/usePrevious.js");var y=e.n(m);const h=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var g=e.n(h);const k=__webpack_require__("./node_modules/@splunk/react-ui/Box.js");var C=e.n(k);const x=__webpack_require__("./node_modules/@splunk/react-ui/ButtonSimple.js");var O=e.n(x);const S=__webpack_require__("./node_modules/@splunk/react-ui/Clickable.js");var I=e.n(S);const P=__webpack_require__("./node_modules/@splunk/themes/index.js"),w=__webpack_require__("./node_modules/@splunk/react-icons/ChevronRight.js");var j=e.n(w);const E=__webpack_require__("./node_modules/@splunk/react-icons/enterprise/ChevronRight.js");var _=e.n(E),q={className:u().string},R=function e(t){var n=t.className;return(0,P.useSplunkTheme)().isEnterprise?r().createElement(_(),{className:n,hideDefaultTooltip:!0,screenReaderText:null}):r().createElement(j(),{className:n})};R.propTypes=q;const A=R;var D=g()(C()).withConfig({displayName:"CollapsiblePanelStyles__StyledBox",componentId:"sc-1phikbp-0"})(["display:flex;flex-direction:column;flex-shrink:1;",";",";& + &{margin-top:",";}"],(0,P.pick)({enterprise:(0,h.css)(["min-height:calc("," + 12px);"],P.variables.lineHeight),prisma:{comfortable:(0,h.css)(["min-height:56px;"]),compact:(0,h.css)(["min-height:48px;"])}}),(0,P.pick)({prisma:(0,h.css)(["background-color:",";"],P.variables.backgroundColorSection)}),(0,P.pick)({enterprise:"2px",prisma:"1px"})),T=g()(C()).withConfig({displayName:"CollapsiblePanelStyles__StyledSingleOpenPanelGroupBox",componentId:"sc-1phikbp-1"})(["",";flex-direction:column;margin-bottom:0;",""],P.mixins.reset("flex"),(0,P.pick)({enterprise:(0,h.css)(["background:",";"],P.variables.backgroundColor)})),N=(0,h.css)(["min-width:",";"],(0,P.pick)({enterprise:"20px",prisma:"35px"})),X=g().span.withConfig({displayName:"CollapsiblePanelStyles__StyledIconWrapper",componentId:"sc-1phikbp-2"})(["display:inline-block;flex:0 auto;",""],N),W=g().div.withConfig({displayName:"CollapsiblePanelStyles__StyledTitleWithActions",componentId:"sc-1phikbp-3"})(["display:flex;flex-shrink:0;border-bottom:0;position:relative;padding:",";transition:background-color 0.2s,border 0.2s,box-shadow 0.2s;color:",";"," ",""],(0,P.pick)({enterprise:(0,h.css)([""," "," "," ",""],P.variables.spacingXSmall,P.variables.spacingSmall,P.variables.spacingXSmall,P.variables.spacingXSmall),prisma:{comfortable:"8px 10px 8px 11px",compact:"8px 10px 8px 11px"}}),(0,P.pick)({enterprise:P.variables.textColor,prisma:P.variables.contentColorActive}),(0,P.pick)({prisma:(0,h.css)(["background-color:",";"],P.variables.interactiveColorBackground),enterprise:{dark:(0,h.css)(["background-color:",";"],P.variables.gray45),light:(0,h.css)(["background-color:",";"],P.variables.gray96)}}),(function(e){return e.$disabled&&(0,h.css)(["cursor:default;color:",";"],(0,P.pick)({enterprise:P.variables.contentColorDefault,prisma:P.variables.contentColorDisabled}))})),B=g()(O()).withConfig({displayName:"CollapsiblePanelStyles__StyledToggleButton",componentId:"sc-1phikbp-4"})(["flex:0 auto;padding:0;",""],N),L=g()(I()).withConfig({displayName:"CollapsiblePanelStyles__StyledTitleClickable",componentId:"sc-1phikbp-5"})(["width:100%;flex-shrink:0;border-bottom:0;cursor:pointer;position:relative;display:flex;transition:background-color 0.2s,border 0.2s,box-shadow 0.2s;padding:",";color:",";"," "," &[disabled]{cursor:default;color:",";}&:focus:not([disabled]),&:active:not([disabled]){color:",";box-shadow:",";z-index:1;}&:hover:not([disabled]){color:",";background-color:",";}"],(0,P.pick)({enterprise:"6px 30px 6px 5px",prisma:{comfortable:"18px 20px 18px 11px",compact:"14px 20px 14px 11px"}}),(0,P.pick)({enterprise:P.variables.textColor,prisma:P.variables.contentColorActive}),(0,P.pick)({prisma:(0,h.css)(["background-color:",";"],P.variables.interactiveColorBackground)}),(0,P.pickVariant)("$open",{false:{enterprise:{dark:(0,h.css)(["background-color:",";"],P.variables.gray45),light:(0,h.css)(["background-color:",";"],P.variables.gray96)}}}),(0,P.pick)({enterprise:P.variables.contentColorDefault,prisma:P.variables.contentColorDisabled}),(0,P.pick)({enterprise:P.variables.textColor,prisma:P.variables.contentColorActive}),P.variables.focusShadow,(0,P.pick)({enterprise:P.variables.textColor,prisma:P.variables.contentColorActive}),(0,P.pick)({enterprise:{light:P.variables.gray92,dark:P.variables.gray30},prisma:P.mixins.overlayColors(P.variables.interactiveColorBackground,P.variables.interactiveColorOverlayHover)})),$=g().span.withConfig({displayName:"CollapsiblePanelStyles__StyledHeadingContent",componentId:"sc-1phikbp-6"})(["display:flex;justify-content:space-between;margin-left:",";flex:1 1 auto;"," ",""],(0,P.pick)({enterprise:"5px",prisma:"6px"}),(0,P.pick)({prisma:(0,h.css)(["font-weight:",";"],P.variables.fontWeightSemiBold)}),(function(e){return e.$titleWithActions&&(0,h.css)(["min-height:",";"],(0,P.pick)({prisma:{comfortable:P.variables.spacingXXXLarge,compact:P.variables.spacingXXLarge}}))})),M=g().span.withConfig({displayName:"CollapsiblePanelStyles__StyledHeadingActions",componentId:"sc-1phikbp-7"})(["min-height:",";flex:1 0 auto;"],(0,P.pick)({prisma:{comfortable:P.variables.spacingXXXLarge,compact:P.variables.spacingXXLarge}})),G=g().span.withConfig({displayName:"CollapsiblePanelStyles__StyledDescription",componentId:"sc-1phikbp-8"})(["font-size:",";margin-left:",";"],P.variables.fontSizeSmall,(0,P.pick)({enterprise:P.variables.spacingSmall,prisma:P.variables.spacingLarge})),H=g().div.withConfig({displayName:"CollapsiblePanelStyles__StyledInsetWrapper",componentId:"sc-1phikbp-9"})(["",";padding:",";"],P.mixins.reset("block"),(0,P.pickVariant)("$inset",{true:(0,P.pick)({enterprise:{compact:P.variables.spacingXSmall,comfortable:P.variables.spacingSmall},prisma:{compact:P.variables.spacingMedium,comfortable:P.variables.spacingXLarge}}),false:0})),U=g()(A).withConfig({displayName:"CollapsiblePanelStyles__StyledExpandPanelIcon",componentId:"sc-1phikbp-10"})(["transition:transform ",";",";"," width:100%;vertical-align:",";"],(0,P.pick)({enterprise:"300ms",prisma:"200ms"}),(0,P.pick)({enterprise:(0,h.css)(["[disabled] &{color:",";}"],(0,P.pick)({dark:P.variables.contentColorDefault,light:P.variables.contentColorDisabled})),prisma:(0,h.css)(["color:",";[disabled] &{color:inherit;}"],P.variables.contentColorDefault)}),(function(e){return e.open&&(0,h.css)(["transform:rotate(90deg);"])}),(0,P.pick)({enterprise:"baseline",prisma:"text-bottom"}));const V=(0,n.createContext)({});function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function J(e){return function Y(e){if(Array.isArray(e))return ne(e)}(e)||function Q(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||te(e)||function K(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){return function ae(e){if(Array.isArray(e))return e}(e)||function re(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||te(e,t)||function ee(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){if(null==e)return{};var r,a,n=function ie(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var le={children:u().node,defaultOpenPanelId:u().any,elementRef:u().oneOfType([u().func,u().object]),inset:u().bool,onChange:u().func,openPanelId:u().any};function se(e){var t=e.children,a=e.defaultOpenPanelId,i=e.elementRef,l=e.inset,s=void 0!==l&&l,p=e.onChange,u=e.openPanelId,d=oe(e,["children","defaultOpenPanelId","elementRef","inset","onChange","openPanelId"]),f=o()(e,"openPanelId"),b=y()(a),v=f?void 0:a,h=Z((0,n.useState)(v),2),g=h[0],k=h[1],C=function e(){return f?u:g},x=(0,n.useCallback)((function(e,t){var n=t.panelId,r=C();f||k(r===n?null:n),null==p||p(e,t)}),[u,f,g,C,p]);(0,n.useEffect)((function(){0}),[]),(0,n.useEffect)((function(){0}),[b,f]),(0,n.useEffect)((function(){0}),[b,a]);var O=n.Children.toArray(t).filter(n.isValidElement),S=(0,n.useMemo)((function(){return{onChange:x,openPanelId:f?u:g,inset:s}}),[x,f,s,u,g]);return r().createElement(T,F({"data-test":"single-open-panel-group","data-test-open-panel-id":u,elementRef:i},c().apply(void 0,[d].concat(J(Object.keys(le))))),r().createElement(V.Provider,{value:S},O))}se.propTypes=le;const ce=se;function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(e)}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){Se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return he=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t},he(e,t)}function ge(e){var t=function xe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function n(){var a,r=Oe(e);if(t){var o=Oe(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return function ke(e,t){if(t&&("object"===pe(t)||"function"==typeof t))return t;return Ce(e)}(this,a)}}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e){return Oe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)},Oe(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie={innerBodyStyles:u().object,actions:u().node,children:u().node,defaultOpen:u().bool,description:u().string,disabled:u().bool,elementRef:u().oneOfType([u().func,u().object]),headingLevel:u().number,inset:u().bool,onRequestClose:u().func,onRequestOpen:u().func,onChange:u().func,open:u().bool,overflow:u().string,panelId:u().any,renderChildrenWhenCollapsed:u().bool,title:u().node.isRequired,titleWithActions:u().bool},we=function(e){!function ye(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(n,e);var t=ge(n);function n(e){var r;return function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Se(Ce(r=t.call(this,e)),"controlledExternally",void 0),Se(Ce(r),"containerId",void 0),Se(Ce(r),"toggleId",void 0),Se(Ce(r),"handleRequestClose",(function(e){var t=r.props,n=t.panelId,a=t.onRequestClose;null==a||a({event:e,panelId:n,reason:"toggleClick"})})),Se(Ce(r),"handleRequestOpen",(function(e){var t=r.props,n=t.panelId,a=t.onRequestOpen;null==a||a({event:e,panelId:n,reason:"toggleClick"})})),Se(Ce(r),"handleChange",(function(e){var t,n,a=r.props,o=a.panelId,i=a.onChange,l=r.isOpen();r.isControlled()||r.setState({animating:!0,open:!l});var s=l?"close":"open";null==i||i(e,{panelId:o,reason:"toggleClick",action:s}),null===(t=(n=r.context).onChange)||void 0===t||t.call(n,e,{panelId:o,reason:"toggleClick",action:s}),l?r.handleRequestClose(e):r.handleRequestOpen(e)})),Se(Ce(r),"handleAnimationEnd",(function(){r.setState({animating:!1})})),r.controlledExternally=o()(e,"open"),r.state=fe(fe({},r.isControlled()?void 0:{open:e.defaultOpen||!1}),{},{animating:!1}),r.containerId="container-".concat((0,b.createGUID)()),r.toggleId="toggle-".concat((0,b.createGUID)()),r}return function me(e,t,n){return t&&ve(e.prototype,t),n&&ve(e,n),e}(n,[{key:"componentDidMount",value:function e(){0}},{key:"componentDidUpdate",value:function e(t){this.props.open!==t.open&&this.setState({animating:!0})}},{key:"isOpen",value:function e(){var e=this.isControlled()?this.props.open:this.state.open;return void 0!==this.context.openPanelId?this.context.openPanelId===this.props.panelId:e}},{key:"isControlled",value:function e(){return this.controlledExternally}},{key:"render",value:function e(){var t=this.props,a=t.innerBodyStyles,o=t.actions,i=t.children,s=t.description,p=t.disabled,u=t.elementRef,d=t.headingLevel,m=t.overflow,y=t.renderChildrenWhenCollapsed,h=t.title,g=t.titleWithActions,k=t.inset,C=this.state.animating,x=(0,b.createDOMID)("panel-toggle"),O=this.isOpen(),S={disabled:p,onClick:this.handleChange,id:this.toggleId,"aria-controls":this.containerId,"aria-expanded":O,$open:!!O,"data-test":"toggle"};return r().createElement(D,ue({"data-test":"collapsible-panel",elementRef:u},c()(this.props,l()(n.propTypes))),g||null!=o?r().createElement(W,{$disabled:p},r().createElement(B,ue({appearance:"pill","aria-label":(0,v._)("Panel"),"aria-labelledby":x},S),r().createElement(U,{open:!!O})),r().createElement($,{$titleWithActions:g,"data-test":"title",id:null!=o?x:void 0},h),null!=o&&r().createElement(M,null,o)):r().createElement("span",{"data-test":"heading",role:d?"heading":void 0,"aria-level":d},r().createElement(L,S,r().createElement(X,null,r().createElement(U,{open:!!O})),r().createElement($,null,r().createElement("span",{"data-test":"title"},h),s&&r().createElement(G,{"data-test":"description"},s)))),r().createElement(f(),{outerId:this.containerId,"aria-labelledby":this.toggleId,"data-test":"body",outerStyle:{overflow:C?"hidden":m},innerStyle:fe({tableLayout:"fixed"},a),open:O,onAnimationEnd:this.handleAnimationEnd,role:null!=o?"region":void 0,renderChildrenWhenCollapsed:y},r().createElement(H,{$inset:k},i)))}}]),n}(n.Component);Se(we,"propTypes",Ie),Se(we,"defaultProps",{disabled:!1,overflow:"auto",renderChildrenWhenCollapsed:!1,titleWithActions:!1,inset:!1}),Se(we,"contextType",V);const je=we;module.exports=t})()},"./node_modules/@splunk/react-ui/TransitionOpen.js":(module,__unused_webpack_exports,__webpack_require__)=>{(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>W});const n=__webpack_require__("./node_modules/react/index.js");var r=e.n(n);const o=__webpack_require__("./node_modules/prop-types/index.js");var a=e.n(o);const i=__webpack_require__("./node_modules/lodash/keys.js");var s=e.n(i);const l=__webpack_require__("./node_modules/lodash/omit.js");var u=e.n(l);const c=__webpack_require__("./node_modules/@splunk/react-ui/Animation.js"),f=__webpack_require__("./node_modules/@splunk/ui-utils/focus.js"),p=__webpack_require__("./node_modules/@splunk/ui-utils/style.js"),d=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js"),m=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var y=e.n(m);const h=__webpack_require__("./node_modules/@splunk/themes/index.js");var v=y()(d.animated.div).withConfig({displayName:"TransitionOpenStyles__Styled",componentId:"sc-1x58s0g-0"})(["",";",";"],h.mixins.reset("block"),(function(e){return e.$hideOverflow&&(0,m.css)(["overflow:hidden;"])})),b=y()(d.animated.div).withConfig({displayName:"TransitionOpenStyles__StyledInner",componentId:"sc-1x58s0g-1"})(["",";",";width:100%;"],h.mixins.reset("table"),h.mixins.clearfix());function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(e)}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return T=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t},T(e,t)}function k(e){var t=function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function n(){var o,r=N(e);if(t){var a=N(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return function E(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;return C(e)}(this,o)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)},N(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q={animation:a().oneOf(["slideFromTop","slideFromRight","slideFromBottom","slideFromLeft","expandHeight","expandWidth","none"]),animateOnMount:a().bool,children:a().node,className:a().string,id:a().string,innerClassName:a().string,innerStyle:a().object,onAnimationEnd:a().func,open:a().bool,outerClassName:a().string,outerId:a().string,outerStyle:a().object,renderChildrenWhenCollapsed:a().bool,retainFocus:a().bool,takeFocus:a().bool},M=function(e){!function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(n,e);var t=k(n);function n(e){var o;return function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),R(C(o=t.call(this,e)),"allowAnimationUpdates",!0),R(C(o),"getValue",(function(e){var t=o.props.animation,n=0;if(e)switch(o.props.takeFocus&&(0,f.takeFocus)(e,"container"),t){case"slideFromTop":case"slideFromBottom":case"expandHeight":case"none":n=e.offsetHeight;break;case"slideFromLeft":case"slideFromRight":case"expandWidth":n=e.offsetWidth}return n})),R(C(o),"handleMount",(function(e){var t=o.getValue(e);o.setState({value:t,innerEl:e})})),R(C(o),"handleRest",(function(){var e,t;o.allowAnimationUpdates&&o.setState({animating:!1}),null===(e=(t=o.props).onAnimationEnd)||void 0===e||e.call(t)})),R(C(o),"handleTab",(function(e){o.state.innerEl&&(0,f.handleTab)(o.state.innerEl,e)})),R(C(o),"internalRender",(function(e){var P,t=e.value,a=e.transform,i=o.props,l=i.animation,c=i.className,f=i.children,d=i.id,m=i.innerClassName,y=i.innerStyle,h=i.open,g=i.outerClassName,w=i.outerId,j=i.outerStyle,F=i.renderChildrenWhenCollapsed,x=o.state.animating;if(x)switch(l){case"slideFromTop":case"slideFromBottom":case"expandHeight":case"none":P="height";break;case"slideFromLeft":case"slideFromRight":case"expandWidth":P="width"}return h||x||!F?r().createElement(v,{$hideOverflow:!h||x,className:(0,p.toClassName)(c,g),style:S(S({},j),P&&R({},P,t)),id:w},(h||x)&&r().createElement(b,O({"data-test":"transition-open"},u()(o.props,s()(n.propTypes)),{ref:o.handleMount,tabIndex:-1,className:m,id:d,onKeyDown:o.props.retainFocus?o.handleTab:void 0,style:S(S({},y),{},{transform:a})}),f)):r().createElement(v,{$hideOverflow:!1,className:(0,p.toClassName)(c,g),style:S(S({},j),P&&R({},P,t)),id:w},r().createElement(b,O({"data-test":"transition-open"},u()(o.props,s()(n.propTypes)),{ref:o.handleMount,tabIndex:-1,className:m,id:d,onKeyDown:o.props.retainFocus?o.handleTab:void 0,style:S(S({},y),{},{transform:a,display:"none"})}),f))})),R(C(o),"getSpringTransition",(function(){var e=o.props,t=e.open,n=e.animation,r=o.state.value,a={value:t?r:0},i={value:t?0:r},s={precision:1};if("expandWidth"===n||"expandHeight"===n||"none"===n)return{to:a,config:s};if(!r)return null;if("slideFromTop"!==n&&"slideFromLeft"!==n)return{to:a,from:i,config:s};var l="slideFromTop"===n?"Y":"X",u="translate".concat(l,"(").concat(t?0:-r,"px)"),c="translate".concat(l,"(").concat(t?-r:0,"px)");return{to:S({transform:u},a),from:S({transform:c},i)}})),o.state={animating:!!e.animateOnMount&&e.open,innerEl:null,prevOpen:e.open},o}return function x(e,t,n){return t&&F(e.prototype,t),n&&F(e,n),e}(n,[{key:"componentDidUpdate",value:function e(){var t=this.getValue(this.state.innerEl);this.state.value===t||this.state.animating||this.setState({value:t})}},{key:"componentWillUnmount",value:function e(){this.allowAnimationUpdates=!1}},{key:"render",value:function e(){var t=this.props.animation;return r().createElement(c.Spring,O({},this.getSpringTransition(),{immediate:"none"===t,onRest:this.handleRest}),this.internalRender)}}]),n}(n.Component);R(M,"propTypes",q),R(M,"defaultProps",{animation:"expandHeight",animateOnMount:!1,innerStyle:{},open:!1,outerStyle:{},renderChildrenWhenCollapsed:!1,retainFocus:!1,takeFocus:!1}),R(M,"getDerivedStateFromProps",(function(e,t){return e.open!==t.prevOpen?{animating:!0,prevOpen:e.open}:null}));const W=M;module.exports=t})()},"./node_modules/@splunk/react-ui/usePrevious.js":(module,__unused_webpack_exports,__webpack_require__)=>{(()=>{"use strict";var e={d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{default:()=>n});const t=__webpack_require__("./node_modules/react/index.js");const n=function o(e){var r=(0,t.useRef)();return(0,t.useEffect)((function(){r.current=e}),[e]),r.current};module.exports=r})()}}]);