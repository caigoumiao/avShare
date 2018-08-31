<template>
  <div>
    <!-- todo 资源列表组件设计 -->
    <el-row v-for="(index,o) in data" :key="index">
      <el-col :span="4">
        <img src="/static/zip.svg" />
      </el-col>
      <el-col :span="20">
        <a>{{o}}stm32f1 M3 浮点快速运算库</a>
        <div id="res-info">
          <label>
            <span>上传者：</span>
            <em>dengbin2010</em>
          </label>
          <label>
            <span>上传时间：</span>
            <em>20160604</em>
          </label>
          <strong>
            <span>积分：</span>
            <em>3</em>
          </strong>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ResourceList',
  props: ['data']
}
</script>

<style scoped>
  img{
    width:42px;
    height:48px;
  }
  .el-row{
    border-bottom: solid 1px #e6e6e6 ;
    padding: 15px 0;
  }
  .el-col a{
    display: inline-block;
    padding-bottom: 20px;
    font-size: 15px;
    color:#333;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
  }
  .el-col a:hover{
    color: #409EFF;
  }
  #res-info label{
    font-size: 12px;
  }
  #res-info label span{
    color:#888;
  }
  #res-info label em{
    color:#546a7e;
    font-style: normal;
  }
  #res-info strong {
    display: block;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  #res-info strong span{
    vertical-align: baseline;
    color:#888;
    font-size: 12px;
    font-weight: 400;
  }
  #res-info strong em{
    color:#ff9358;
    font-size: 32px;
    line-height: 32px;
    font-style: normal;
    font-weight: 400;
  }
</style>
