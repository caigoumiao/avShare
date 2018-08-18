<template>
  <el-container>
    <el-aside style="border: solid 2px #DDD;border-radius: 5px;padding-left: 20px;margin-top: 20px;width: auto;padding-right: 20px;">
      <h3>资源分类</h3>
      <ul>
        <li>
          <a href="#" @click="goCate(111)">Java(28)</a>
        </li>
        <li>
          <a href="#">C/C++(15)</a>
        </li>
        <li>
          <a href="#">C#(3)</a>
        </li>
        <li>
          <a href="#">andriod(7)</a>
        </li>
        <li>
          <a href="#">PHP(10)</a>
        </li>
      </ul>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HomeVue',
  methods: {
    goCate (id) {
      this.$router.push('/books/' + id)
    }
  }
}
</script>

<style scoped>
  h3 {
    font-size: 20px;
    line-height: 36px;
  }
  ul {
    padding: 0px;
    margin: 0 0 9px 25px;
  }
  ul li {
    line-height: 22px;
  }
  ul li a {
    color: #4183c4;
    text-decoration: none;
    cursor: pointer;
    font-size: 13px;
  }
</style>
