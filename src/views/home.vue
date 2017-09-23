<template>
  <div id="home" >
 		<md-toolbar>
 			<md-button class="md-icon-button toolbar-opt">
 				<md-icon>menu</md-icon>
 			</md-button>

			<h2 class="md-title title" style="">英雄联盟</h2> 

			<md-button class="md-icon-button toolbar-opt">
			  <md-icon>more_vert</md-icon>
			</md-button>						
 		</md-toolbar>

		<md-bottom-bar class="bottom-bar" md-shift>
		  <md-bottom-bar-item md-icon="bubble_chart">资讯</md-bottom-bar-item>
		  <md-bottom-bar-item md-icon="perm_contact_calendar">英雄</md-bottom-bar-item>
		  <md-bottom-bar-item md-icon="ondemand_video" md-active>视频</md-bottom-bar-item>
		  <md-bottom-bar-item md-icon="face">我</md-bottom-bar-item>
		</md-bottom-bar> 		
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped >
  #home{
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
  	}	
  }
</style>