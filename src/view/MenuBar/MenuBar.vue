<template>
  <div class="menu-bar-container">
    <div
      class="logo"
      :style="{background:themeColor}"
      :class="isCollapse?'menu-bar-collapse-width':'menu-bar-width'"
      @click="$router.push('/')"
    >
      <img v-if="isCollapse" src="@/assets/logo.png" />
      <div>{{isCollapse?'':appName}}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu
      default-active="1-1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :class="isCollapse?'menu-bar-collapse-width':'menu-bar-width'"
      @open="handleOpen"
      @close="handleClose"
      @select="handleselect"
      :collapse="isCollapse"
    >
      <menuTree v-for="item in menuTree" :key="item.menuId" :menu="item"></menuTree>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import menuTree from "@/components/MenuTree/index";
export default {
  data() {
    return {
      logo: ""
    };
  },
  components: {
    menuTree
  },
  computed: {
    ...mapState({
      appName: state => state.app.appName,
      themeColor: state => state.app.themeColor,
      isCollapse: state => state.app.collapse,
      menuTree: state => state.menu.MenuTree
    })
  },

  methods: {
    findMenuTree() {
      this.$axios.menu
        .findMenuTree()
        .then(res => {
          if (res.code == 200) {
            console.log(res.data);
            this.$store.commit("setMenuTree", res.data);
          } else {
            this.$messaage({
              message: res.msg,
              type: "error",
              showClose: true
            });
          }
        })
        .catch(err => {
          //  this.$message({
          //     message:err,
          //     type:"error",
          //     showClose:true
          //   })
        });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect(a, b) {}
  },
  mounted() {
    this.sysName = "I like Kitty";
    this.logo = require("@/assets/logo.png");
    this.findMenuTree();
  }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
  display: flex;
  flex-direction: column;
  .el-menu {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .logo {
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 0px;
      margin: 10px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
    }
  }
  .menu-bar-width {
    width: 200px;
    overflow: hidden;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>