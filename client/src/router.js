import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import SubjectId from './views/SubjectId.vue'
import SelectionTutorial from './views/SelectionTutorial.vue'
import PeopleSelection from './views/PeopleSelection.vue'
import DeviceSelection from './views/DeviceSelection.vue'
import ChessboardTutorial from './views/ChessboardTutorial.vue'
import Chessboard from './views/Chessboard.vue'
import EndingPage from './views/EndingPage.vue'
import AdminPanel from './views/AdminPanel.vue'
import { defaultLocale } from './config/i18n.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}/subjectid`
    },
    {
      path: '/:locale',
      component: Index,
      redirect: '/:locale/subjectid',
      children: [
        {
          path: 'admin',
          component: AdminPanel
        },
        {
          name: 'Subject ID',
          path: 'subjectid',
          component: SubjectId
        },
        {
          name: 'Selection Tutorial',
          path: 'selectiontutorial',
          component: SelectionTutorial
        },
        {
          name: 'People Selection',
          path: 'selectpeople',
          component: PeopleSelection
        },
        {
          name: 'Device Selection',
          path: 'selectdevices',
          component: DeviceSelection
        },
        {
          name: 'Chessboard Tutorial',
          path: 'chessboardtutorial',
          component: ChessboardTutorial
        },
        {
          name: 'Chessboard',
          path: 'chessboard',
          component: Chessboard
        },
        {
          path: 'finish',
          component: EndingPage
        }
      ]
    }
  ]
})

export default router
