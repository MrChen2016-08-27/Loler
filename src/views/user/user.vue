<template>
  <div id="user" >
    <md-layout class="header" md-gutter>
      <md-layout class="header-left" md-flex="30">
        <md-avatar class="md-large avatar">
          <img src="../../assets/avatar.jpg" />
        </md-avatar>
      </md-layout>
      <md-layout md-flex="70" class="user-col" >
        <div class="nickname">Server</div>
        <label>等级: <span>1</span></label>
        <p></p>
      </md-layout>
    </md-layout>
    <div class="list">
      <md-list class="md-double-line">
        <md-list-item>
          <md-icon class="md-primary">star</md-icon>
          <div class="md-list-text-container">
            <span>我的收藏</span>
            <span>空的</span>
          </div>
          <md-button class="md-icon-button md-list-action">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">email</md-icon>
          <div class="md-list-text-container">
            <span>互动信息</span>
            <span>有三条未读</span>
          </div>
          <md-button class="md-icon-button md-list-action">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">get_app</md-icon>
          <div class="md-list-text-container">
            <span>我的下载</span>
            <span>暂无</span>
          </div>
          <md-button class="md-icon-button md-list-action">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">notifications</md-icon>
          <div class="md-list-text-container">
            <span>系统通知</span>
            <span>暂无</span>
          </div>
          <md-button class="md-icon-button md-list-action">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>

</script>

<style lang='less' scoped>
  #user{
    padding: 15px 5px;
    .avatar{
      @size: 80px;
      width: @size;
      height: @size;
      font-size: @size/1.2;
    }
    .user-col{
      padding: 10px;
      position: relative;
      display: block;
      text-align: left;
      padding-left: 5%;
      .nickname{
        width: 100%;
        text-align: left;
        font-size: 20px;
        margin-bottom: 5px;
        color: #333333;
        font-weight: bold;
      }
      label{
        font-size: 14px;
        text-align: left;
        color: #666666;
        margin-left: 2px;
      }
    }
    .list{
      border-top: 1px solid #ededed;
      margin-top: 20px;
    }
  }
</style>