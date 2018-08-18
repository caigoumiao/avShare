<template>
  <div>
    <h4>{{book.title}}</h4>
    <img src="http://ec4.images-amazon.com/images/I/6100LpSqTbL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU28_.jpg" class="image" style="border-radius: 10px;"/>
    <el-row :gutter="12">
      <el-col :span="16">
        <ContentVue :content="book.content"></ContentVue>
      </el-col>
    </el-row>
    <!--<h4>目录</h4>-->
    <!--<el-row :gutter="12">-->
      <!--<el-col :span="16">-->
        <!--<catalogue-vue :content="book.catalogue"></catalogue-vue>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-button type="warning" icon="el-icon-download">免费下载</el-button>
  </div>
</template>

<script>

import ContentVue from '../util/ContentVue'
// import CatalogueVue from '../util/CatalogueVue'
export default {
  name: 'bookDetail',
  components: {
    ContentVue
  },
  data: function () {
    return {
      book: {
        title: 'Python黑帽子:黑客与渗透测试编程之道',
        catalogue: 'wu',
        content: '《Python黑帽子:黑客与渗透测试编程之道》适合有一定编程基础的安全爱好者、计算机从业人员阅读，特别是对正在学习计算机安全专业，立志从事计算机安全行业，成为渗透测试人员的人来说，这本书更是不可多得的参考。',
        img: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
