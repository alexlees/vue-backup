# vue-backup
***
> 一个回到顶部Vue组件，动画、icon

***

## [DEMO](https://alexlees.github.io/vue-backup/)

## 安装

0. npm || yarn
``` bash
# install dependencies
npm i vue-backup -s
yarn add vue-backup
```
***
1. CDN
```html
<script src="https://unpkg.com/vue-backup/dist/vue-backup.min.js"></script>
```
## 使用
```javascript
// main.js
// 全局注册
import Vue from 'vue'
import BackUp from 'vue-backup'

Vue.use(BackUp)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// 局部注册
// app.vue
import { BackUp } from 'vue-backup'

export default {
  name: 'App',
  components: {
    [BackUp.name]: BackUp  // 推荐该形式注册
  }
}
```

***

## props
| name | desc | type | default | required |
| :--: | :--: | ---: | :-----: | :------: |
| scrollY | 控制组件出现时机(px) | Number | 1000 | false |
| enterAnimatedName | 组件出现动画| String | rubberBand | false |
| leaveAnimatedName | 组件消失动画 | String | bounceOut | false |
| size | icon 字体大小(px) | Number | 20 | false |
| el | 滚动元素 | HTMLElement \|\| window | window | false |
| icon | 默认显示icon | Props.icon | Props.icon.top | false |

***

## slot
| name | desc | info |
| :--: | :--: | ---: |
| default | icon插槽 | 不传递会使用组件默认icon |

***

## 提示
1. 可选icon封装在Props.icon对象中，修改默认icon方式如下：
```html
<template>
  <div>
    <v-backup :icon="icon"/>
    <!-- 修改默认icon -->
  </div>
</template>

<script>
import { Props, BackUp } from 'vue-backup'
export default {
  name: 'test-icon',
  components: {
    [BackUp.name]: BackUp  // 推荐该形式注册
  },
  data () {
    return {
      icon: Props.icon.xxx // 通过该形式修改默认icon
    }
  }
}
</script>
```

2. 组件依赖[animate.css](https://github.com/daneden/animate.css) enterAnimatedName leaveAnimatedName 可选值如下：

| AnimatedName      |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |


***

## [Github](https://github.com/alexlees/vue-backup)
