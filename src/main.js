// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, {
  AddressbarColor,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QItem,
  QItemSide,
  QItemSeparator,
  QItemMain,
  QItemTile,
  QSideLink,
  QList,
  QListHeader,
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QTabs,
  QTab,
  QCollapsible,
  QFixedPosition,
  QModal,
  QModalLayout,
  QDatetime,
  QField,
  QInput,
  QChipsInput,
  QDialogSelect,
} from 'quasar'
import VueFire from 'vuefire'
import router from './router'

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QItem,
    QItemSide,
    QItemSeparator,
    QItemMain,
    QItemTile,
    QSideLink,
    QList,
    QListHeader,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QTabs,
    QTab,
    QCollapsible,
    QFixedPosition,
    QModal,
    QModalLayout,
    QDatetime,
    QField,
    QInput,
    QChipsInput,
    QDialogSelect,
  }
}) // Install Quasar Framework

Vue.use(VueFire)

AddressbarColor.set('#80cbc4')

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  render: h => h(require('./App').default)
})
