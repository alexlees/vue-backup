# vue-backtotop

> A vue backtoup component

## Build Setup

``` bash
# install dependencies
npm i vue-backup
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

```javascript
// app.vue
<template>
  <div id="app">
    // your components
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
