import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewView from './views/OverviewView.vue'
import MentorsView from './views/MentorsView.vue'
import MenteesView from './views/MenteesView.vue'
import ApplyView from './views/ApplyView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'overview', component: OverviewView },
    { path: '/mentors', name: 'mentors', component: MentorsView },
    { path: '/mentees', name: 'mentees', component: MenteesView },
    { path: '/apply', name: 'apply', component: ApplyView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
