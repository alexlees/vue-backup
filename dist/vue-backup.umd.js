(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.BackUp = {})));
}(this, (function (exports) { 'use strict';

  var Props = {
    postion: {
      top: Symbol('top'),
      center: Symbol('center'),
      left: Symbol('left'),
      bottom: Symbol('bottom'),
    },
    icon: {
      top: Symbol('top'),
      fold: Symbol('fold'),
      rocket: Symbol('rocket'),
      packup: Symbol('packup'),
    }
  };

  //
  var script = {
    name: 'v-backup',
    props: {
      postion: {
        type: Symbol,
        default: Props.postion.bottom
      },
      icon: {
        type: Symbol,
        default: Props.icon.top
      },
      scrollY: {
        type: Number,
        default: 1000
      },
      el: {
        validator: function validator (e) {
          return e instanceof HTMLElement || e === window
        },
        default: function default$1 () {
          return window
        }
      },
      size: {
        type: Number,
        default: 20
      },
      enterAnimatedName: {
        type: String,
        default: 'rubberBand'
      },
      leaveAnimatedName: {
        type: String,
        default: 'bounceOut'
      }
    },
    data: function data () {
      return {
        show: false
      }
    },
    computed: {
      postionClass: function postionClass () {
        switch (this.postion) {
          default:
            return this.$style['bottom']
        }
      },
      iconClass: function iconClass () {
        switch (this.icon) {
          case Props.icon.rocket:
            return 'icon-ico-to-top'
          case Props.icon.fold:
            return 'icon-fold'
          case Props.icon.packup:
            return 'icon-packup'
          default:
            return 'icon-top'
        }
      },
      iconStyle: function iconStyle () {
        return {
          fontSize: this.size + 'px'
        }
      },
      enterClass: function enterClass () {
        return ("animated " + (this.enterAnimatedName))
      },
      leaveClass: function leaveClass () {
        return ("animated " + (this.leaveAnimatedName))
      }
    },
    methods: {
      scroll: function scroll (e) {
        if (window.scrollY >= this.scrollY) {
          this.show = true;
        } else {
          this.show = false;
        }
      },
      initEvent: function initEvent () {
        var this$1 = this;

        setTimeout(function () {
          this$1.el.addEventListener('scroll', this$1.scroll, false);
        }, 30);
      },
      removeEvent: function removeEvent () {
        this.el.removeEventListener('scroll', this.scroll, false);
      },
      back: function back () {
        this.el.scroll(0, 0);
      }
    },
    created: function created () {
      this.initEvent();
      this.scroll();
    },
    beforeDestroy: function beforeDestroy () {
      this.removeEvent();
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "transition",
      {
        attrs: {
          "enter-active-class": _vm.enterClass,
          "leave-active-class": _vm.leaveClass
        }
      },
      [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show,
                expression: "show"
              }
            ],
            class: [_vm.postionClass, _vm.$style.back, _vm.$style.center],
            on: { click: _vm.back }
          },
          [
            _vm._t("default", [
              _c("i", {
                class: ["iconfont", _vm.iconClass],
                style: _vm.iconStyle
              })
            ])
          ],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-aa1cc54a_0", { source: "\n@import 'https://at.alicdn.com/t/font_682351_ahlvoj7xbt2lc8fr.css';\n@import 'https://unpkg.com/animate.css/animate.css';\n", map: {"version":3,"sources":["D:\\VUE\\vue-backup/D:\\VUE\\vue-backup\\src\\vue-backup.vue"],"names":[],"mappings":";AAuHA,mEAAA;AACA,oDAAA","file":"vue-backup.vue","sourcesContent":["<template>\n  <transition :enter-active-class=\"enterClass\" :leave-active-class=\"leaveClass\">\n    <div\n      :class=\"[postionClass, $style.back, $style.center]\"\n      v-show=\"show\"\n      @click=\"back\">\n      <slot>\n        <i\n          :class=\"['iconfont', iconClass]\"\n          :style=\"iconStyle\"></i>\n      </slot>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport Props from './config.js'\nexport default {\n  name: 'v-backup',\n  props: {\n    postion: {\n      type: Symbol,\n      default: Props.postion.bottom\n    },\n    icon: {\n      type: Symbol,\n      default: Props.icon.top\n    },\n    scrollY: {\n      type: Number,\n      default: 1000\n    },\n    el: {\n      validator (e) {\n        return e instanceof HTMLElement || e === window\n      },\n      default () {\n        return window\n      }\n    },\n    size: {\n      type: Number,\n      default: 20\n    },\n    enterAnimatedName: {\n      type: String,\n      default: 'rubberBand'\n    },\n    leaveAnimatedName: {\n      type: String,\n      default: 'bounceOut'\n    }\n  },\n  data () {\n    return {\n      show: false\n    }\n  },\n  computed: {\n    postionClass () {\n      switch (this.postion) {\n        default:\n          return this.$style['bottom']\n      }\n    },\n    iconClass () {\n      switch (this.icon) {\n        case Props.icon.rocket:\n          return 'icon-ico-to-top'\n        case Props.icon.fold:\n          return 'icon-fold'\n        case Props.icon.packup:\n          return 'icon-packup'\n        default:\n          return 'icon-top'\n      }\n    },\n    iconStyle () {\n      return {\n        fontSize: this.size + 'px'\n      }\n    },\n    enterClass () {\n      return `animated ${this.enterAnimatedName}`\n    },\n    leaveClass () {\n      return `animated ${this.leaveAnimatedName}`\n    }\n  },\n  methods: {\n    scroll (e) {\n      if (window.scrollY >= this.scrollY) {\n        this.show = true\n      } else {\n        this.show = false\n      }\n    },\n    initEvent () {\n      setTimeout(() => {\n        this.el.addEventListener('scroll', this.scroll, false)\n      }, 30)\n    },\n    removeEvent () {\n      this.el.removeEventListener('scroll', this.scroll, false)\n    },\n    back () {\n      this.el.scroll(0, 0)\n    }\n  },\n  created () {\n    this.initEvent()\n    this.scroll()\n  },\n  beforeDestroy () {\n    this.removeEvent()\n  }\n}\n</script>\n<style>\n@import 'https://at.alicdn.com/t/font_682351_ahlvoj7xbt2lc8fr.css';\n@import 'https://unpkg.com/animate.css/animate.css';\n</style>\n\n<style module>\n.bottom{\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n.back{\n  min-width: 60px;\n  min-height: 60px;\n  background-color: rgba(0, 0, 0, 0.8);\n  box-shadow: 0 0 10px 0 #ffffff;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.center{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  color: #ffffff;\n}\n</style>\n"]}, media: undefined })
  ,inject("data-v-aa1cc54a_1", { source: "\n.src-bottom-2dN5{\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n.src-back-1iRA{\n  min-width: 60px;\n  min-height: 60px;\n  background-color: rgba(0, 0, 0, 0.8);\n  box-shadow: 0 0 10px 0 #ffffff;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.src-center-2VGi{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  color: #ffffff;\n}\n", map: {"version":3,"sources":["D:\\VUE\\vue-backup/D:\\VUE\\vue-backup\\src\\vue-backup.vue"],"names":[],"mappings":";AA4HA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;CACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,qCAAA;EACA,+BAAA;EACA,uBAAA;EACA,mBAAA;CACA;AACA;EACA,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,sBAAA;EACA,eAAA;CACA","file":"vue-backup.vue","sourcesContent":["<template>\n  <transition :enter-active-class=\"enterClass\" :leave-active-class=\"leaveClass\">\n    <div\n      :class=\"[postionClass, $style.back, $style.center]\"\n      v-show=\"show\"\n      @click=\"back\">\n      <slot>\n        <i\n          :class=\"['iconfont', iconClass]\"\n          :style=\"iconStyle\"></i>\n      </slot>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport Props from './config.js'\nexport default {\n  name: 'v-backup',\n  props: {\n    postion: {\n      type: Symbol,\n      default: Props.postion.bottom\n    },\n    icon: {\n      type: Symbol,\n      default: Props.icon.top\n    },\n    scrollY: {\n      type: Number,\n      default: 1000\n    },\n    el: {\n      validator (e) {\n        return e instanceof HTMLElement || e === window\n      },\n      default () {\n        return window\n      }\n    },\n    size: {\n      type: Number,\n      default: 20\n    },\n    enterAnimatedName: {\n      type: String,\n      default: 'rubberBand'\n    },\n    leaveAnimatedName: {\n      type: String,\n      default: 'bounceOut'\n    }\n  },\n  data () {\n    return {\n      show: false\n    }\n  },\n  computed: {\n    postionClass () {\n      switch (this.postion) {\n        default:\n          return this.$style['bottom']\n      }\n    },\n    iconClass () {\n      switch (this.icon) {\n        case Props.icon.rocket:\n          return 'icon-ico-to-top'\n        case Props.icon.fold:\n          return 'icon-fold'\n        case Props.icon.packup:\n          return 'icon-packup'\n        default:\n          return 'icon-top'\n      }\n    },\n    iconStyle () {\n      return {\n        fontSize: this.size + 'px'\n      }\n    },\n    enterClass () {\n      return `animated ${this.enterAnimatedName}`\n    },\n    leaveClass () {\n      return `animated ${this.leaveAnimatedName}`\n    }\n  },\n  methods: {\n    scroll (e) {\n      if (window.scrollY >= this.scrollY) {\n        this.show = true\n      } else {\n        this.show = false\n      }\n    },\n    initEvent () {\n      setTimeout(() => {\n        this.el.addEventListener('scroll', this.scroll, false)\n      }, 30)\n    },\n    removeEvent () {\n      this.el.removeEventListener('scroll', this.scroll, false)\n    },\n    back () {\n      this.el.scroll(0, 0)\n    }\n  },\n  created () {\n    this.initEvent()\n    this.scroll()\n  },\n  beforeDestroy () {\n    this.removeEvent()\n  }\n}\n</script>\n<style>\n@import 'https://at.alicdn.com/t/font_682351_ahlvoj7xbt2lc8fr.css';\n@import 'https://unpkg.com/animate.css/animate.css';\n</style>\n\n<style module>\n.bottom{\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n.back{\n  min-width: 60px;\n  min-height: 60px;\n  background-color: rgba(0, 0, 0, 0.8);\n  box-shadow: 0 0 10px 0 #ffffff;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.center{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  color: #ffffff;\n}\n</style>\n"]}, media: undefined });
  Object.defineProperty(this, "$style", { value: {"bottom":"src-bottom-2dN5","back":"src-back-1iRA","center":"src-center-2VGi"} });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      {
        component.__file = "D:\\VUE\\vue-backup\\src\\vue-backup.vue";
      }

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var component = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
    install.installed = true;
  	Vue.component(component.name, component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // To allow use as module (npm/webpack/etc.) export component
  var index = {
    install: install,
  };
  var BackUp = component;

  exports.default = index;
  exports.BackUp = BackUp;
  exports.Props = Props;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
