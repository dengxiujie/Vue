<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
          <a href="www.baidu.com">{{item.name}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </transition>   
  </div>
</template>
<script>
export default {
  name: "Main"
};
</script>
<style lang="scss" scoped>
.Main {
  flex: 1;
}
</style>

