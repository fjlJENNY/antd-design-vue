<template>
<div>
  <a-form>
    <a-form-item>
      <a-input></a-input>
    </a-form-item>
    <a-form-item>
      <a-select>
        <a-select-option>
          
        </a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
</div>
</template>

<script type="text/ecmascript-6">
import {Form , Input , Select} from 'ant-design-vue'
export default {
    name:'Mall',
    data() {
        return {

        }
    },
    components: {
      [Form.name]:Form,
      [Form.Item.name]:Form.Item,
      [Input.name]:Input,
      [Select.name]:Select,
      [Select.Option.name]:Select.Option
    },
    mounted(){
      console.log(Form)
    }
}
</script>

<style scoped lang="scss">
</style>
