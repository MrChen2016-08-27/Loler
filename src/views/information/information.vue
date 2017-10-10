<template>
<div id="infomation">
  <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
    <md-board v-for="(item, index) in carousels" :key="index" >
      <img @click="openHref(item.href)"  :src="item.src" />
    </md-board>
  </md-boards>  
  <md-list class="custom-list md-triple-line">
    <md-list-item>
      <md-avatar>
        <img src="http://puui.qpic.cn/qqvideo_ori/0/d0557nalxgn_228_128/0" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>即时反馈系统全区上线公告</span>
        <span>英雄联盟运营团队</span>
        <p>为了进一步维护召唤师峡谷的游戏环境，我们于10月3日起开始在全大区上线即时反馈系统</p>
      </div>
      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">keyboard_arrow_right</md-icon>
      </md-button>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item>
      <md-avatar>
        <img src="http://ossweb-img.qq.com/upload/webplat/info/lol/20170929/33168445496013.jpg" alt="People">
      </md-avatar> 
      <div class="md-list-text-container">
        <span>中秋国庆双节回馈公告</span>
        <span>英雄联盟运营团队</span>
        <p>在各位召唤师欢庆中秋国庆双节的同时，我们也为各位准备了一波双节限时回馈活动</p>
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
export default {
  data () {
    return {
      carousels: [
        { href: 'http://lol.qq.com/act/a20171009yorick/index.html?e_code=362048&atm_cl=ad&atm_pos=16601&idata_id=154019', src: 'http://ossweb-img.qq.com/upload/adw/image/1507616601/1507616601.jpg?_r=1507629979' },
        { href: 'http://lol.qq.com/act/a20170711music/index.html?ADTAG=media.free.client.banner&e_code=362012&atm_cl=ad&atm_pos=16605&idata_id=153983', src: 'http://ossweb-img.qq.com/upload/adw/image/1507605995/1507605995.jpg?_r=1507629979' },
        { href: 'http://lol.qq.com/act/a20170919dragon/?e_code=362052&atm_cl=ad&atm_pos=16602&idata_id=150799', src: 'http://ossweb-img.qq.com/upload/adw/image/1507616722/1507616722.jpg?_r=1507629979' }
      ]
    }
  },
  methods: {
    openHref (href) {
      window.open(href)
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