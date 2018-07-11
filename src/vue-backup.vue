<template>
  <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
    <div
      :class="[postionClass, $style.back, $style.center]"
      v-show="show"
      @click="back">
      <slot>
        <i
          :class="['iconfont', iconClass]"
          :style="iconStyle"></i>
      </slot>
    </div>
  </transition>
</template>

<script>
import Props from './config.js'
import 'animate.css'
export default {
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
      validator (e) {
        return e instanceof HTMLElement || e === window
      },
      default () {
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
  data () {
    return {
      show: false
    }
  },
  computed: {
    postionClass () {
      switch (this.postion) {
        default:
          return this.$style['bottom']
      }
    },
    iconClass () {
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
    iconStyle () {
      return {
        fontSize: this.size + 'px'
      }
    },
    enterClass () {
      return `animated ${this.enterAnimatedName}`
    },
    leaveClass () {
      return `animated ${this.leaveAnimatedName}`
    }
  },
  methods: {
    scroll (e) {
      if (window.scrollY >= this.scrollY) {
        this.show = true
      } else {
        this.show = false
      }
    },
    initEvent () {
      setTimeout(() => {
        this.el.addEventListener('scroll', this.scroll, false)
      }, 30)
    },
    removeEvent () {
      this.el.removeEventListener('scroll', this.scroll, false)
    },
    back () {
      this.el.scroll(0, 0)
    }
  },
  created () {
    this.initEvent()
    this.scroll()
  },
  beforeDestroy () {
    this.removeEvent()
  }
}
</script>
<style>
@import 'https://at.alicdn.com/t/font_682351_ahlvoj7xbt2lc8fr.css';
</style>

<style module>
.bottom{
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.back{
  min-width: 60px;
  min-height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px 0 #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #ffffff;
}
</style>
