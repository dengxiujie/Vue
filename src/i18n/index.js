import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
Vue.use(VueI18n)

// 注册i18n实例并引入语言文件，文件格式等下解析
console.log(store)
const i18n = new VueI18n({
  locale:store.state.app.lange,
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

export default i18n