<template>
  <el-container>
    <el-aside style="border: solid 1px #eee;width: 30%;margin-top: 70px;background-color: #FFF; display: block;overflow: visible;">
      <img src="/static/hamburger.png" class="image">
      <h4 style="text-align: center;">苗乔</h4>
      <div class="u-info u-info-level">
        <el-tag type="success" size="mini">Lv 1</el-tag>
      </div>
      <div class="u-info">
        <b>积分：</b><small>34</small>
      </div>
      <el-button type="danger" icon="el-icon-upload el-icon--right" @click="goUpload" style="width: 90%;display: block;margin: 10px auto;">上传资源</el-button>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'UserVue',
  methods: {
    goUpload () {
      this.$router.push('upload')
    }
  }
}
</script>

<style scoped>
img{
  border:solid 1px #d5d8df ;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  position:relative;
  margin:-40px auto 0;
  display: block;
}
.u-info {
  margin-top: 5px;
  text-align: center;
}
.u-info-level {
  margin-top: -10px;
}
.u-info b{
  font-size: 12px;
  font-weight: 100;
  color:#999;
}
.u-info small {
  color: #ff9358;
  font-size: 16px;
}
</style>
