<template>
  <div id="home" >
 		<md-toolbar>
 			<md-button @click="toggleLeftSlidenav" class="md-icon-button toolbar-opt">
 				<md-icon>menu</md-icon>
 			</md-button>
			<h2 class="md-title title" style="">LOLER</h2> 
			<md-button class="md-icon-button toolbar-opt">
			  <md-icon>more_vert</md-icon>
			</md-button>						
 		</md-toolbar>
 		<md-sidenav md-swipeable class="md-left" ref="leftSidenav" >
	 		<md-toolbar class="md-large">
	      <div class="left-header-tool">
          <md-avatar class="md-large">
            <img src="../../assets/logo.png" alt="People">
          </md-avatar>
	      </div>
	    </md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>whatshot</md-icon>
          <span>热门攻略</span>
            <md-list-expand>
              <md-list>
                  <md-list-item class="md-inset">版本热门组合</md-list-item>
                  <md-list-item class="md-inset">装备搭配指南</md-list-item>
                  <md-list-item class="md-inset">上分必备技巧</md-list-item>
              </md-list>
            </md-list-expand>    
        </md-list-item>
        <md-list-item>
            <md-icon>videogame_asset</md-icon>
            <span>我的游戏</span>
            <md-list-expand>
              <md-list>
                  <md-list-item class="md-inset">英雄时刻</md-list-item>
                  <md-list-item class="md-inset">游戏记录</md-list-item>
              </md-list>
            </md-list-expand>
        </md-list-item>        
        <md-list-item @click="setRouterAddress('/')">
            <md-icon>record_voice_over</md-icon>
            <span>我的关注</span>
        </md-list-item>
        <md-list-item>
          <md-icon>favorite</md-icon>
          <span>我的收藏</span>          
        </md-list-item>
      </md-list>
 		</md-sidenav>
    <router-view></router-view>
		<md-bottom-bar class="bottom-bar" md-shift>
		  <md-bottom-bar-item @click.native="routerTag('/home/information')" md-icon="bubble_chart">资讯</md-bottom-bar-item>
		  <md-bottom-bar-item md-icon="perm_contact_calendar">英雄</md-bottom-bar-item>
		  <md-bottom-bar-item md-icon="ondemand_video" md-active>视频</md-bottom-bar-item>
		  <md-bottom-bar-item @click.native="routerTag('/home/user')" md-icon="face">我</md-bottom-bar-item>
		</md-bottom-bar>
    <share v-model="shareShow"></share>
    <md-button @click="shareShow = true" class="md-fab share-btn">
      <md-icon>share</md-icon>
    </md-button>
  </div>
</template>

<script>
import Share from '../../components/Share'
export default {
  data () {
    return {
      shareShow: false
    }
  },
  methods: {
    toggleLeftSlidenav () {
      this.$refs.leftSidenav.toggle()
    },
    setRouterAddress (address) {
      this.toggleLeftSlidenav()
      this.$router.push(address)
    },
    routerTag (target) {
      this.$router.push(target)
    }
  },
  components: {
    Share
  }
}
</script>

<style lang='less' scoped >
  #home{
    padding-bottom: 60px;
  	.toolbar-opt{
  		flex: 1;
  	}
  	.title{
  		flex: 8;
  		text-align: left;
  	}
  	.bottom-bar{
  		position: fixed;
  		bottom: 0;
      z-index: 999;
  	}
    .share-btn{
      position: fixed;
      z-index: 2;
      bottom: 15%;
      right: 2%;
    }	
  }
</style>