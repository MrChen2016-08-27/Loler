<template>
<div id="infomation">
  <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
    <md-board v-for="(item, index) in carousels" :key="index" >
      <img @click="targetHref(item.href)"  v-lazy.container="item.src" />
    </md-board>
  </md-boards>
  <md-list class="custom-list md-triple-line">
    <md-list-item v-for="(item, index) in colList" :key="index" >
      <md-avatar>
        <img src="http://puui.qpic.cn/qqvideo_ori/0/d0557nalxgn_228_128/0" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ item.title }}</span>
        <span>{{ item.userName }}</span>
        <p>{{ item.content }}</p>
      </div>
      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">keyboard_arrow_right</md-icon>
      </md-button>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </md-list>
</div>
</template>

<script>
const url = '/information/'

export default {
  data () {
    return {
      carousels: [
      ],
      colList: [
      ]
    }
  },
  mounted () {
    this.getCarousellist()
    this.getList()
  },
  methods: {
    targetHref (href) {
      window.location.href = href
    },
    getCarousellist () {
      this.$http.get(`${url}/carouselList`)
        .then((res) => {
          const { data } = res.data
          this.carousels = data
        })
    },
    getList () {
      this.$http.get(`${url}/list`)
        .then((res) => {
          const { data } = res.data
          this.colList = data
        })
    }
  }
}
</script>

<style lang='less' scoped >
#infomation{
  .column{
    margin: 10px 0px;
  }

}
</style>