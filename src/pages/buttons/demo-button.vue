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
        Button,
        ButtonGroup
    } from 'ant-design-vue'
    export default {
        name: 'DemoButton',
        components: {
            AButton:Button,
            AButtonGroup:ButtonGroup
        }
    }
</script>

<style scoped>

</style>
