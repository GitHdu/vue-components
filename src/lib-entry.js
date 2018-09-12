import Vue from 'vue'
import { Tab, TabPanel } from './components/tab'
import notification from './components/notification/index'

Vue.use(Tab)
Vue.use(TabPanel)
notification(Vue)
