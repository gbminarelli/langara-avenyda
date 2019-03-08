import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faqs from '@/components/Faqs'
import Profile from '@/components/Profile'
import GoogleMap from '@/components/GoogleMap'
import Contact from '@/components/Contact'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Verification from '@/components/Verification'
import Chart from '@/components/Chart'
import GetUser from '@/components/api_test/GetUser'
import HowItWorks from '@/components/HowItWorks'
import FindParking from '@/components/FindParking'
import NewSpot from '@/components/NewSpot'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faqs',
      name: 'Faqs',
      component: Faqs
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/googlemap',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/getuser',
      name: 'GetUser',
      component: GetUser
    },
    {
      path: '/howitworks',
      name: 'HowItWorks',
      component: HowItWorks
    },
    {
      path: '/findparking',
      name: 'FindParking',
      component: FindParking
    },
    {
      path: '/newspot',
      name: 'NewSpot',
      component: NewSpot
    }
  ]
})
