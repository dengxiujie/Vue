export default {
    state: {
        themeColor: "#409EFF",  // 主题颜色
        oldThemeColor: "#409EFF",   // 上一次主题颜色
        collapse:false,  // 导航栏收缩状态
        lange:"zh",
        neddloding:'',//等于0打开loading
        fullscreenLoading:false,//设置loading是否显示
        appName: "Kitty Platform",  // 应用名称
    },
    getters: {
        collapse(state){// 对应着上面state
            return state.collapse
        }
    },
    mutations: {
        onCollapse(state){  // 改变收缩状态
            state.collapse = !state.collapse
            console.log(state.collapse)
        },
        setThemeColor(state, themeColor){  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        },
        gbfullscreenLoading(state){
            state.fullscreenLoading=true;//loading显示
        },
        hiddenfullscreenLoadinga(state){
            state.fullscreenLoading=false;//loading关闭
        },
        show(state){//每请求一次加一
            state.neddloding++
        },
        hide(state){//每完成请求一次减一
            state.neddloding--
        }
    },
    actions: {
    }
}