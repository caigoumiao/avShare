<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(o, index) in bookProfiles" :key="index">
      <el-card :body-style="{ padding: '0px' }" style="border: 3px solid #DDD; height: 280px;">
        <img :src="o.img" class="image">
        <div style="padding: 14px;">
          <span>{{o.title}}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="goBookDetail(o.id)">瞅瞅{{$route.params.cateId}}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'overview',
  data: function () {
    return {
      bookProfiles: [
        {
          id: 0,
          title: '无字天书',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534565427201&di=06528b1966add6ab6d9a2dcb5dc2bde8&imgtype=0&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmiddle%2F6af1edbex8f65d6c70086%26690'
        },
        {
          id: 1,
          title: '无字天书',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534565427201&di=06528b1966add6ab6d9a2dcb5dc2bde8&imgtype=0&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmiddle%2F6af1edbex8f65d6c70086%26690'
        },
        {
          id: 2,
          title: '无字天书',
          img: '/static/timg.gif'
        },
        {
          id: 3,
          title: '无字天书',
          img: '/static/timg.gif'
        }
      ]
    }
  },
  methods: {
    goBookDetail (id) {
      this.$router.push('/book/' + id)
    }
  }
}
</script>

<style scoped>
  img {
    width: 90%;
    height: 80%;
  }
</style>
