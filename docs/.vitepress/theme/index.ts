import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import AsideSponsors from './components/AsideSponsors.vue'
import './styles/vars.css'
import './custom.css'
import beiti from '../components/beiti.vue'


export default {
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp({ app }) {
    // app.component('SvgImage', SvgImage)
    app.component('beiti', beiti)
  }
}
