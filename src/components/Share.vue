<template>
	<div v-show="value" @click="hide" class="share">
		<div @click.stop="" class="share-plane">
      <div class="social-share" data-initialized="true">
          <a href="#" class="social-share-icon icon-weibo"></a>
          <a href="#" class="social-share-icon icon-qq"></a>
          <a href="#" class="social-share-icon icon-qzone"></a>
          <a href="#" class="social-share-icon icon-douban"></a>
          <a href="#" class="social-share-icon icon-wechat"></a>
          <a href="#" class="social-share-icon icon-linkedin"></a>
      </div>
		</div>
	</div>
</template>

<script>
  import 'social-share.js/dist/css/share.min.css'
  import 'social-share.js/dist/js/social-share.min.js'
  export default {
    created () {
      window.socialShare(document.getElementsByClassName('.social-share'))
    },
    components: {
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hide () {
        this.$emit('input', false)
      }
    }
  }
</script>

<style lang='less' scoped >
	.share{
    z-index: 999;
		width: 100%;
		position: fixed;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
    background-color: rgba(0, 0, 0, 0.3);
		.share-plane{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #ffffff;
      text-align: left;
      padding: 10px;
      padding-bottom: 10%;
		}
    .icon-weibo, .icon-qq, .icon-qzone, .icon-douban, .icon-wechat, .icon-linkedin{
      @size: 50px;
      width: @size;
      height: @size;
      font-size: @size/1.6;
      line-height: @size;
      margin: 10px 15px; 
    }
	}
</style>