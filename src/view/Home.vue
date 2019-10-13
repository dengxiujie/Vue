<template>
  <div class="box">
    <!-- 导航菜单栏 -->
    <MenuBar></MenuBar>
    <div class="right">
      <!-- 头部区域 -->
      <HeadBar></HeadBar>
      <!-- 主内容区域 -->
      <Main></Main>
    </div>
  </div>
</template>
<script>
import mock from "@/mock/index"
import HeadBar from "./HeadBar/HeadBar";
import MenuBar from "./MenuBar/MenuBar";
import Main from "./Main/Main";
export default {
  data() {
    return {};
  },
  components: {
    HeadBar,
    MenuBar,
    Main
  },

};
</script>

<style scoped lang="scss">
.box {
  flex: 1;
  display: flex;
  // background: rgba(224, 234, 235, 0.1);
}
.right{
  flex:1;
  display:flex;
  flex-direction: column;
}
</style>  