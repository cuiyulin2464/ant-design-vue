(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1471:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var a=o(35),r=Object(a.a)({},i,[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("FAQ")]),e._v(" "),o("p",[e._v("Here are the frequently asked questions about Ant Design Vue that you should look up before you ask in community or create new issue.")]),e._v(" "),o("h3",{attrs:{id:"Are-you-going-to-provide-Sass/Stylus(etc...)-style-file?"}},[e._v("Are you going to provide Sass/Stylus(etc...) style file? "),o("a",{staticClass:"anchor",attrs:{href:"#Are-you-going-to-provide-Sass/Stylus(etc...)-style-file?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("No, actually, you can convert Less to Sass/Stylus(etc...) with tools (which you can Google).")]),e._v(" "),o("h3",{attrs:{id:"Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-disappear-when-I-click-another-popup-component-inside-it,-How-to-resolve-it?"}},[o("code",{pre:!0},[e._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]),e._v(" disappear when I click another popup component inside it, How to resolve it? "),o("a",{staticClass:"anchor",attrs:{href:"#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-disappear-when-I-click-another-popup-component-inside-it,-How-to-resolve-it?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("Use "),o("code",{pre:!0},[e._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]),e._v(" to render component inside Popover. (Or other getXxxxContainer props)")]),e._v(" "),o("h3",{attrs:{id:"Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-scroll-with-the-page?"}},[o("code",{pre:!0},[e._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]),e._v(" scroll with the page? "),o("a",{staticClass:"anchor",attrs:{href:"#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-scroll-with-the-page?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("Use "),o("code",{pre:!0},[e._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]),e._v(" to render component inside the scroll area. (Or other getXxxxContainer props).")]),e._v(" "),o("h3",{attrs:{id:"Form-does-not-support-two-way-binding,-can't-use-v-model?"}},[o("code",{pre:!0},[e._v("Form")]),e._v(" does not support two-way binding, can't use "),o("code",{pre:!0},[e._v("v-model")]),e._v("? "),o("a",{staticClass:"anchor",attrs:{href:"#Form-does-not-support-two-way-binding,-can't-use-v-model?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("First, we do not recommend using two-way binding in the Form, the same data may be used in multiple places, if you use two-way binding, then the data modification will be synchronized to each component, but this is not what we want, you Data should be synchronized when the form is submitted successfully or fails or confirmed. With a non-bidirectionally bound form, you have maximum control over data modification/synchronization.")]),e._v(" "),o("p",[e._v("Second, if you don't use the form's automatic check/collection feature, ie you don't use the "),o("code",{pre:!0},[e._v("v-decorator")]),e._v(" modifier, you can still use "),o("code",{pre:!0},[e._v("v-model")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"How-to-modify-the-default-theme-of-Ant-Design-Vue?"}},[e._v("How to modify the default theme of Ant Design Vue? "),o("a",{staticClass:"anchor",attrs:{href:"#How-to-modify-the-default-theme-of-Ant-Design-Vue?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"/docs/vue/customize-theme/"}},[e._v("Customize Theme")]),e._v("。")]),e._v(" "),o("h3",{attrs:{id:"How-to-optimize-momentjs-bundle-size-with-webpack?"}},[e._v("How to optimize momentjs bundle size with webpack? "),o("a",{staticClass:"anchor",attrs:{href:"#How-to-optimize-momentjs-bundle-size-with-webpack?","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("See: https://github.com/jmblog/how-to-optimize-momentjs-with-webpack")]),e._v(" "),o("h3",{attrs:{id:"It-doesn't-work-when-I-change-defaultValue,defaultOpenKeys,-initialValue-dynamically."}},[e._v("It doesn't work when I change "),o("code",{pre:!0},[e._v("defaultValue")]),e._v(","),o("code",{pre:!0},[e._v("defaultOpenKeys")]),e._v(", "),o("code",{pre:!0},[e._v("initialValue")]),e._v(" dynamically. "),o("a",{staticClass:"anchor",attrs:{href:"#It-doesn't-work-when-I-change-defaultValue,defaultOpenKeys,-initialValue-dynamically.","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("The "),o("code",{pre:!0},[e._v("defaultXxxx")]),e._v(" (like "),o("code",{pre:!0},[e._v("defaultValue")]),e._v(") of "),o("code",{pre:!0},[e._v("Input")]),e._v("/"),o("code",{pre:!0},[e._v("Select")]),e._v("(etc...) only works in first render. This feature is referenced from "),o("a",{attrs:{href:"https://facebook.github.io/react/docs/forms.html#controlled-components"}},[e._v("React")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"I-set-the-value-of-Input/Select(etc...),-and-then,-it-cannot-be-changed-by-user's-action."}},[e._v("I set the "),o("code",{pre:!0},[e._v("value")]),e._v(" of "),o("code",{pre:!0},[e._v("Input")]),e._v("/"),o("code",{pre:!0},[e._v("Select")]),e._v("(etc...), and then, it cannot be changed by user's action. "),o("a",{staticClass:"anchor",attrs:{href:"#I-set-the-value-of-Input/Select(etc...),-and-then,-it-cannot-be-changed-by-user's-action.","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("Try "),o("code",{pre:!0},[e._v("defaultValue")]),e._v(" or "),o("code",{pre:!0},[e._v("change")]),e._v(" or "),o("code",{pre:!0},[e._v("v-model")]),e._v(" to change "),o("code",{pre:!0},[e._v("value")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"ant-design-vue-override-my-global-styles!"}},[e._v("ant-design-vue override my global styles! "),o("a",{staticClass:"anchor",attrs:{href:"#ant-design-vue-override-my-global-styles!","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),o("p",[e._v("Yes, ant-design-vue is designed to develop a complete background application, we override some global styles for styling convenience, and it can't be removed now. More info trace https://github.com/ant-design/ant-design/issues/4331 .")]),e._v(" "),o("p",[e._v("Or, follow the instructions in "),o("a",{attrs:{href:"docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"}},[e._v("How to avoid modifying global styles?")])])])}],!1,null,null,null);r.options.__file="docs/vue/faq.en-US.md";t.default=r.exports}}]);