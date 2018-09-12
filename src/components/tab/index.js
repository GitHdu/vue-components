import Tab from './tab'
import TabPanel from './tab-panel'

Tab.install = Vue => {
  Vue.component('tab', Tab)
}

TabPanel.install = Vue => {
  Vue.component('tabPanel', TabPanel)
}

export { Tab, TabPanel }
