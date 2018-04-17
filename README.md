# vue-backup
***
> A vue backup component

***
## Build Setup

``` bash
# install dependencies
npm i vue-backup -s
```
***
## Usage
```javascript
// main.js
// global init component
import Vue from 'vue'
import backUp from 'vue-backup'

Vue.use(backUp)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// local init component
// app.vue
import { backToUp } from 'vue-backup'

export default {
  name: 'App',
  components: { backToUp }
}
```

```html
// app.vue
<template>
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

***

## props
| name | desc | type | default | required |
| :--: | :--: | ---: | :-----: | :------: |
| scrollY | 控制backUp出现时机(px) | Number | 500 | false |
| scrollDuration | 控制backUp向上动画时长(ms) | Number | 0 | false |
| className | 覆盖backUp样式 | String | '' | false |

***

## slot
| name | desc | info |
| :--: | :--: | ---: |
| default | icon插槽 | 不传递会使用组件默认icon |

***

## TODO
- [ x ] 自定义icon(slot 实现)
- [ x ] 覆盖样式(props 实现)
- [   ] 滚动到顶部 触发事件

***

## [Github](https://github.com/alexlees)
