<template>
  <div>
    <div>
      <p>第1行测试</p>
      <p>第2行测试</p>
      <p>第3行测试</p>
      <p>第4行测试</p>
      <p>第5行测试</p>
      <p>第6行测试</p>
      <p>第7行测试</p>
      <p>第8行测试</p>
      <p>第9行测试</p>
      <p>第10行测试</p>
      <p>第11行测试</p>
      <p>第12行测试</p>
      <p>第13行测试</p>
      <p>第14行测试</p>
      <p>第15行测试</p>
      <p>第16行测试</p>
      <p>第17行测试</p>
      <p>第18行测试</p>
      <p>第19行测试</p>
      <p>第20行测试</p>
      <p>第21行测试</p>
      <p>第22行测试</p>
      <p>第23行测试</p>
      <p>第24行测试</p>
      <p>第25行测试</p>
      <p>第26行测试</p>
      <p>第27行测试</p>
      <p>第28行测试</p>
      <p>第29行测试</p>
      <p>第30行测试</p>
      <p>第31行测试</p>
      <p>第32行测试</p>
      <p>第33行测试</p>
      <p>第34行测试</p>
      <p>第35行测试</p>
      <p>第36行测试</p>
      <p>第37行测试</p>
      <p>第38行测试</p>
      <p>第39行测试</p>
      <p>第40行测试</p>
      <p>第41行测试</p>
      <p>第42行测试</p>
      <p>第43行测试</p>
      <p>第44行测试</p>
      <p>第45行测试</p>
      <p>第46行测试</p>
      <p>第47行测试</p>
      <p>第48行测试</p>
      <p>第49行测试</p>
      <p>第50行测试</p>
      <p>第51行测试</p>
      <p>第52行测试</p>
      <p>第53行测试</p>
      <p>第54行测试</p>
      <p>第55行测试</p>
      <p>第56行测试</p>
      <p>第57行测试</p>
      <p>第58行测试</p>
      <p>第59行测试</p>
      <p>第60行测试</p>
      <p>第61行测试</p>
      <p>第62行测试</p>
      <p>第63行测试</p>
      <p>第64行测试</p>
      <p>第65行测试</p>
      <p>第66行测试</p>
      <p>第67行测试</p>
      <p>第68行测试</p>
      <p>第69行测试</p>
      <p>第70行测试</p>
      <p>第71行测试</p>
      <p>第72行测试</p>
      <p>第73行测试</p>
      <p>第74行测试</p>
      <p>第75行测试</p>
      <p>第76行测试</p>
      <p>第77行测试</p>
      <p>第78行测试</p>
      <p>第79行测试</p>
      <p>第80行测试</p>
      <p>第81行测试</p>
      <p>第82行测试</p>
      <p>第83行测试</p>
      <p>第84行测试</p>
      <p>第85行测试</p>
      <p>第86行测试</p>
      <p>第87行测试</p>
      <p>第88行测试</p>
      <p>第89行测试</p>
      <p>第90行测试</p>
      <p>第91行测试</p>
      <p>第92行测试</p>
      <p>第93行测试</p>
      <p>第94行测试</p>
      <p>第95行测试</p>
      <p>第96行测试</p>
      <p>第97行测试</p>
      <p>第98行测试</p>
      <p>第99行测试</p>
    <p>第100行测试</p>
    </div>
    <v-backup>
    </v-backup>
  </div>
</template>

<script>
import 'normalize.css'
import {BackUp, Props} from './index.js'

const meta = document.createElement('meta')
meta.name = 'viewport'
meta.content = 'width=device-width,minimum-scale=1.0,maximum-scale=1.0'

document.head.appendChild(meta)
export default {
  name: 'test-app',
  components: {
    [BackUp.name]: BackUp
  },
  created () {
    console.log(Props)
  }
}
</script>

<style module>

</style>
