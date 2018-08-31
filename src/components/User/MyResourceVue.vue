<template>
  <div id="my-res">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">我的下载<i class="el-icon-download"></i></span>
        <ResourceList></ResourceList>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"> 我的上传<i class="el-icon-upload2"></i></span>
        <ResourceList></ResourceList>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"> 我的 Star<i class="el-icon-star-on"></i></span>
        <ResourceList></ResourceList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ResourceList from './ResourceList'
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  components: {
    ResourceList
  },
  methods: {
  }
}
</script>
<style scoped>
  #my-res {
    background-color: #FFF;
    margin-top: 50px;
  }
  .el-tab-pane {
    background-color: #FFF;
  }
</style>
