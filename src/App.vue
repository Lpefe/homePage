<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="test"></router-view>
    <router-view name="swipe"></router-view>
    <router-view name="swipeList"></router-view>
    <router-view name="shareContent"></router-view>
    <router-view name="aboutContent"></router-view>
    <router-view name="downloadContent"></router-view>
    <router-view name="jobContent"></router-view>
    <router-view name="footer"></router-view>
    <router-view name="anli1"></router-view>
    <div class='clearFloat'></div>
  </div>
</template>


<style>
#app {
    width: 100%;
    height: 100%;
    /* min-width: 1140px; */
    margin: 0 auto;
    text-align: center;
}
#container {
    position: relative;
}
body {
  margin:0;
  padding:0;
}
.clearFloat {
    clear: both;
}
</style>
