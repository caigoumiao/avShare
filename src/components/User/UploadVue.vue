<template>
  <div style="background-color: #FFF;margin-top: 50px;padding: 10px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="资源名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="资源类型">
        <el-select v-model="form.region" placeholder="请选择资源类型">
          <el-option label="云盘类" value="shanghai"></el-option>
          <el-option label="书籍类" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资源标签">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
      <el-form-item label="资源分数">
        <el-select v-model="form.region" placeholder="请选择资源类型">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="shanghai"></el-option>
          <el-option label="3" value="shanghai"></el-option>
          <el-option label="4" value="shanghai"></el-option>
          <el-option label="5" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资源描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="onSubmit">上传资源</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
