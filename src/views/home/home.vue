<template>
  <div id="home" >
 		<md-whiteframe md-tag="md-toolbar" md-elevation="2" class="md-transparent top-header">
 			<md-button @click="toggleLeftSlidenav" class="md-icon-button toolbar-opt">
 				<md-icon>menu</md-icon>
 			</md-button>
			<h2 class="md-title title">LOLer</h2> 
			<md-button class="md-icon-button toolbar-opt">
			  <md-icon>more_vert</md-icon>
			</md-button>						
 		</md-whiteframe>
 		<md-sidenav class="md-left md-fixed" ref="leftSidenav" >
	 		<md-toolbar class="md-large">
	      <div class="left-header-tool">
          <md-avatar class="md-large">
            <img src="../../assets/avatar.jpg" alt="People">
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
		  <md-bottom-bar-item :md-active="item.active" v-for="item in bottomMenus" :key="item.label" @click.native="replaceTag(item.routerTag)" :md-icon="item.icon" >{{ item.label }}</md-bottom-bar-item>
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
      shareShow: false,
      bottomMenus: [
        { routerTag: '/home/information', active: true, label: '资讯', icon: 'bubble_chart' },
        { routerTag: '/home/heros', active: false, label: '英雄', icon: 'perm_contact_calendar' },
        { routerTag: '/home/videos', active: false, label: '视频', icon: 'ondemand_video' },
        { routerTag: '/home/user', active: false, label: '我', icon: 'face' }
      ]
    }
  },
  mounted () {
    this.pipeItem()
  },
  methods: {
    toggleLeftSlidenav () {
      this.$refs.leftSidenav.toggle()
    },
    setRouterAddress (address) {
      this.toggleLeftSlidenav()
      this.$router.push(address)
    },
    pipeItem () {
      let path = this.$route.path
      this.bottomMenus.map((obj) => {
        obj.active = false
        if (obj.routerTag === path) {
          obj.active = true
        }
      })
    },
    replaceTag (target) {
      this.$router.replace(target)
    }
  },
  components: {
    Share
  }
}
</script>

<style lang='less' scoped >
  #home{
    @header-height: 60px;
    position: relative;
    padding: @header-height 0;
  	.toolbar-opt{
  		flex: 1;
  	}
    .top-header{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 99;
      &:before{
        width: 100%;
        height: 40px;
        top: 0;
        left: 0;
        content: '';
        position: absolute;
        height: @header-height;
        opacity: 0.7;
        background-color: #ffffff;
        z-index: -1;
      }
    }
  	.title{
  		flex: 8;
  		text-align: left;
  	}
  	.bottom-bar{
  		position: fixed;
  		bottom: 0;
      z-index: 99;
  	}
    .share-btn{
      position: fixed;
      z-index: 2;
      bottom: 15%;
      right: 2%;
    }	
  }
</style>