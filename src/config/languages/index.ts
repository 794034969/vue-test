import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { setLocalCache, getLocalCache } from '@/config/cache'
// element-ui内部组件语言
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

// 本地项目语言
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const initLocale = () => {
  const localeLanguage = getLocalCache("language")
  if (localeLanguage) { return localeLanguage }
  // Object.keys传入对象， 返回 包含对象可枚举属性和方法的数组，传入数组，返回索引值
  // 若要返回可枚举和不可枚举属性和方法的名称，可以使用 Object.getOwnPropertyNames( )函数。
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages) // 
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  // Default language is english
  return 'zh'
}

setLocalCache("language", initLocale())

const i18n = new VueI18n({
  locale: initLocale(),
  messages
})

export default i18n
