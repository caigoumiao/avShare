<template>
    <div style="border: 1px solid #FFF;background-color: #EEE; padding: 2px;padding: 0px;border-radius: 10px;">
      <p style="word-break: break-all;word-wrap: break-word;margin: 5px;font-family: '微软雅黑 Light'; font-size: 12px;">
        {{content}}
      </p>
    </div>
</template>

<script>
export default {
  name: 'ContentVue',
  props: [
    'content'
  ]
}
</script>

<style scoped>

</style>
