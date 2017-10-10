<template>
<div id="heros">
  <md-layout>
    <md-layout class="col" v-for="(item, index) in herosAll" :key="index" md-flex="25">     
      <md-avatar class="md-large">
        <img :src="item.src" alt="People">
        <md-tooltip md-direction="top">{{ item.name }}</md-tooltip>
      </md-avatar>
    </md-layout>
  </md-layout>	
</div>
</template>

<script>
export default {
  data () {
    return {
      herosAll: [
        { name: '沙漠皇帝', src: 'http://ossweb-img.qq.com/images/lol/img/champion/Azir.png' },
        { name: '星界游神', src: 'http://ossweb-img.qq.com/images/lol/img/champion/Bard.png' },
        { name: '魂锁典狱长', src: 'http://ossweb-img.qq.com/images/lol/img/champion/Thresh.png' },
        { name: '仙灵女巫', src: 'http://ossweb-img.qq.com/images/lol/img/champion/Lulu.png' },
        { name: '暗黑元首', src: 'http://ossweb-img.qq.com/images/lol/img/champion/Syndra.png' }
      ]
    }
  }
}
</script>

<style lang='less' scoped >
#heros{
  padding-top: 20px;
  .col{
    margin: 10px 0;
  }
}
</style>