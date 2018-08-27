<template>
    <div>
      <el-row>
        <el-col :span="8" :offset="8" style="border: 1px solid #EEE;border-radius:10px;
        background-color: #EEE; margin-top: 50px;padding: 20px;">
          <el-form label-position="right" label-width="120px;" :model="user">
            <el-form-item label="Username :">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="Password :">
              <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">Log in</el-button>
              <el-button type="primary" @click="regis">Regis</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'LoginVue',
  data: function () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // todo 判断登录操作
      localStorage.setItem('user', qs.stringify(this.user))
      alert('dsdsdsd')
      this.$router.go(-1)
    },
    regis () {
      // todo 注册操作
      this.$router.push('/regis')
    }
  }
}
</script>

<style scoped>

</style>
