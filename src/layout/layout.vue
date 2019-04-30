<template>
<a-layout>
  <a-layout-sider></a-layout-sider>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content></a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</a-layout>
</template>

<script type="text/ecmascript-6">
import {Layout} from 'ant-design-vue'
export default {
    name:'layout',
    data() {
        return {

        }
    },
    components: {
      [Layout.name]:Layout,
      [Layout.Header.name]:Layout.Header,
      [Layout.Content.name]:Layout.Content,
      [Layout.Sider.name]:Layout.Sider,
      [Layout.Footer.name]:Layout.Footer
    }
}
</script>

<style scoped lang="scss">
</style>
