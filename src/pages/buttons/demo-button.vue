<template>
    <div id="app">
       <a-button type="primary">button</a-button>
        <a-button-group>
            <a-button>Cancel</a-button>
            <a-button type="primary">Ok</a-button>
        </a-button-group>
    </div>
</template>

<script>
    import {
        Button
    } from 'ant-design-vue'
    export default {
        name: 'DemoButton',
        components: {
            [Button.name]:Button,
            [Button.Group.name]:Button.Group
        }
    }
</script>

<style scoped>

</style>
