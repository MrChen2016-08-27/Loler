<template>
<div id="videos" >
  <md-card @click.native="targetHref(item.href)" :key="item.title" v-for="item in videoList" >
    <md-card-header >
      <md-card-header-text>
        <div class="md-title title" >{{ item.title }}</div>
      </md-card-header-text>
      <md-card-media md-big class="videos-card-img">
        <img :src="item.img">
      </md-card-media>
    </md-card-header>
  </md-card>  
</div>
</template>

<script>
export default {
  name: 'videos',
  data () {
    return {
      videoList: [
        {
          title: 'S7小组赛DAY7击杀时刻：WE三连胜第一出线！',
          img: 'http://shp.qpic.cn/lolwebvideo/201406/4c975b22bffefeace65bfbdab5a1f9c3/0',
          href: 'http://lol.qq.com/v/go.shtml?id=74644&type=lwvideo&url=http://lol.tuwan.com/368630/?ad=1&ADTAG=lolweb.v2.home.r0'
        },
        {
          title: '赛事速看FWvsWE：WE全队发力，FW无缘8强！',
          img: 'http://puui.qpic.cn/qqvideo_ori/0/t0561a4nnh2_228_128/0',
          href: 'http://lol.qq.com/v/detail.shtml?id=74643&ADTAG=lolweb.v2.home.r1'
        }
      ]
    }
  },
  methods: {
    targetHref (href) {
      window.location.href = href
    }
  }
}
</script>

<style lang='less' scoped >
  #videos{
    .title{
      @title-font-size: 18px;
      font-size: @title-font-size;
      line-height: @title-font-size * 1.2;
      text-align: left;
    }
    .videos-card-img{
      height: 90px;
    }
  }
</style>