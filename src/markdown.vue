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

<style>

</style>
