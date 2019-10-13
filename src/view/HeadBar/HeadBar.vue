<template>
  <div class="container" :style="{background:themeColor}">
    <!-- 导航菜单隐藏显示切换 -->
    <span class="hamburg">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff" :active-text-color="themeColor" mode="horizontal">
        <el-menu-item index="1" @click="collapse">
          <hamburger></hamburger>
        </el-menu-item>
      </el-menu>
    </span>
    <div class="ringth">
      <!-- 导航菜单 -->
      <span class="nav-bar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          text-color="#fff"
           :background-color="themeColor"
          active-text-color="#ffd04b"
          mode="horizontal"
          @select="selectNavBar()"
        >
          <el-menu-item index="1" @click="$router.push('/')">{{$t("home.home")}}</el-menu-item>
          <el-menu-item index="2">{{$t("home.doc")}}</el-menu-item>
          <el-menu-item index="3">{{$t("home.Message")}}</el-menu-item>
        </el-menu>
      </span>
      <span class="tool-bar">
        <!-- 主题切换 -->
        <ThemePicker class="theme-picker"></ThemePicker>
        <!-- 语言切换 -->
        <LangSelector class="lang-selector"></LangSelector>
        <!-- 用户信息 -->
        <el-dropdown class="user-info-dropdown" trigger="hover">
          <span class="el-dropdown-link">
             {{username}}
            <img :src="this.userAvatar" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{$t("common.myMsg")}}</el-dropdown-item>
            <el-dropdown-item>{{$t("common.config")}}</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">{{$t("common.logout")}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger"
import ThemePicker from "@/components/ThemePicker";
import LangSelector from "@/components/LangSelector/index";
export default {
  components: {
    ThemePicker,
    LangSelector,
    Hamburger
  },
  data() {
    return {
      isCollapse: false,
      username: "Louis",
      userAvatar: "",
      activeIndex: "1"
    };
  },
  
  computed: {
    themeColor() {
      return this.$store.state.app.themeColor;
    }
  },
  methods: {
    selectNavBar(key, keyPath) {
      console.log(key, keyPath);
    },
    //折叠导航栏
    collapse: function() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit("onCollapse", this.isCollapse);
    },
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  },

  mounted() {
    var user = sessionStorage.getItem("user");
    console.log(user);
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/user.png");
      console.log(this.userAvatar);
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .ringth {
    display: flex;
    flex: 1;
    justify-content: space-between;
    .tool-bar {
      display: flex;
      align-items: center;
    }
  }
  .collapse-switcher {
    width: 40px;
    cursor: pointer;
    border-color: rgba(111, 123, 131, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    color: white;
    background: #504e6180;
  }
  .nav-bar {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: auto;
    .el-menu {
      background: #504e6180;
    }
  }
  .tool-bar {
    width: 300px;
    .theme-picker {
      padding-right: 10px;
    }
    .lang-selector {
      padding-right: 10px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
    .user-info-dropdown {
      font-size: 20px;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
      .el-dropdown-link {
        display: flex;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 10px 0px 10px 10px;
      }
    }
  }
}
</style>