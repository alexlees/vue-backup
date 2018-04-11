# vue-backup

> A vue backtoup component

## Build Setup

``` bash
# install dependencies
npm i vue-backup -s
```
```javascript
// main.js
import Vue from 'vue'
import backUp from 'vue-backup'

Vue.use(backUp)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

```

```html
// app.vue
<template>
<!--
* @props scrollY:         Number required: false 控制backUp组件出现时机
* @props scrollDuration:  Number required: false 控制backUp向上滚动动画时长
*
* TODO  添加自定义icon
* TODO  添加demo 动图
* TODO  添加组件位置 控制props
*
-->
  <div id="app">
    <someThingYourComponents/>
    <backUp/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

```
