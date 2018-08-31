<template>
  <div id="app" style="overflow-y: scroll;background-color: #f7f8f9;">
    <el-container style="width: 60%;margin-left: 20%;">
      <el-header style="margin-left: 0px; padding: 0px 20px 0px 0px;height:auto;margin: 0px;">
        <h1>盗版资源分享网</h1>
      </el-header>
      <el-row :gutter="2" style="border-bottom: 1px solid #EEE;margin:10px 20px 0 0;" id="nav">
        <el-col :span="1" style="bottom: -10px;">
          <a href="#" style="margin-bottom: 0px;" @click="goIndex">首页</a>
        </el-col>
        <el-col :span="4" style="height:inherit;">
          <a href="#">程序员必读书籍</a>
        </el-col>
        <el-col :span="8">
          <div style="">
            <el-input placeholder="search" v-model="searchInfo" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="9">
          <a v-show="user==undefined" style="color:#4183c4;" @click="goLogin">Log In</a>
          <a v-show="user!=undefined" style="color:#4183c4;" @click="logOut">Log Out</a>
          <a @click="goUser">USER</a>
        </el-col>
      </el-row>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      searchInfo: '',
      user: localStorage.user
    }
  },
  methods: {
    goLogin () {
      alert(this.user)
      this.$router.push('/login')
    },
    logOut () {
      this.$confirm('确认注销？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        localStorage.removeItem('user')
        this.user = undefined
        this.$router.push('/login')
      })
    },
    goIndex () {
      this.$router.push('/')
    },
    goUser () {
      this.$router.push('/user')
    }
  },
  updated: function () {
    this.user = localStorage.user
  }
}
</script>

<style>
  h1 {
    font-size: 40px;
    margin: 0px;
  }

  .input-with-select {
    width: 160px;
  }

  #app {
  }

  #nav a {
    text-decoration: none;
    font-size: 13px;
    color: #000;
    font-weight: 600;
    cursor: pointer;
  }

  #nav a:hover {
    color: #409EFF;
  }
</style>
