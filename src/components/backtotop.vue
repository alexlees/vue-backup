<template>
  <transition name="fade">
    <div :class="$style.wallpaper" v-show="show" @click="initClick">
      <i class="icon-top iconfont" :class="$style.font"></i>
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
      default: 2000
    }
  },
  data () {
    return {
      scroll: this.scrollY,
      show: false
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
      this.timeId = requestAnimationFrame(callBack)
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
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #444444;
  color: aliceblue;
  text-align: center;
  line-height: 4rem;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;

  cursor: pointer;
}
.font{
  color: inherit;
  font-size: 2.4rem !important;
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
