<template>
  <transition name="fade">
    <div :class="[$style.wallpaper, className]" v-show="show" @click="initClick">
      <i class="iconfont icon-top" :class="$style.font" v-if="icon"></i>
      <slot/>
    </div>
  </transition>
</template>

<script>
const NAME = 'backUp'
export default {
  name: NAME,
  props: {
    scrollY: {
      default: 500,
      validator (value) {
        return typeof value === 'number' && value >= 0
      }
    },
    scrollDuration: {
      type: Number,
      default: 0
    },
    // 覆盖样式
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scroll: this.scrollY,
      show: false
    }
  },
  computed: {
    icon () {
      return !this.$slots.default
    }
  },
  methods: {
    initScroll () {
      window.addEventListener('scroll', this.onScroll, false)
    },
    cancelScroll () {
      window.removeEventListener('scroll', this.onScroll, false)
    },
    onScroll (e) {
      const callBack = (newTimestamp) => { // requestAnimationFrame 减少callback触发次数
        const scrollPx = window.scrollY - this.scrollY
        if (scrollPx >= 0) {
          this.show = true
        } else {
          this.show = false
        }
      }
      requestAnimationFrame(callBack)
    },
    initClick (e) {
      this.cancelScroll()
      this.show = false
      this.click(this.scrollDuration)
    },
    click (scrollDuration) {
      const cosParameter = window.scrollY / 2
      let scrollCount = 0
      let oldTimestamp = performance.now()

      let step = (newTimestamp) => {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }
        if (window.scrollY === 0) {
          this.initScroll()
          this.$emit('scrollTop', true)
          return
        }
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }
  },
  created () {
    this.initScroll()
  },
  beforeDestroy () {
    this.cancelScroll()
  }
}
</script>

<style module>
.wallpaper{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #444444;
  color: aliceblue;
  text-align: center;
  line-height: 3rem;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;

  cursor: pointer;
}
.font{
  color: inherit;
  font-size: 2rem !important;
}
</style>

<style>
@import url('./font/iconfont.css');
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-active{
  transition: all .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
</style>
