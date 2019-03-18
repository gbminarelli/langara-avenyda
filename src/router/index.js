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
import GetUser from '@/components/api_test/GetUser'
import HowItWorks from '@/components/HowItWorks'
import FindParking from '@/components/FindParking'
import reviewHome from '@/components/reviewHome'
import Dashboard from '@/components/Dashboard'
import NewSpot from '@/components/NewSpot'
import ProfileB from '@/components/ProfileB'
import form1Parking from'@/components/form1Parking'
import form2Parking from'@/components/form2Parking'
import form3Parking from'@/components/form3Parking'

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
      path: '/dashboard',
      name: '/Dashboard',
      component: Dashboard
    },
    {
      path: '/reviewhome',
      name: 'reviewHome',
      component: reviewHome
    },
    {
      path: '/newspot',
      name: 'NewSpot',
      component: NewSpot
    },
    {
      path: '/profileb',
      name: 'ProfileB',
      component: ProfileB
    },
    {
      path: '/form1parking',
      name: 'form1Parking',
      component: form1Parking
    },
    {
      path: '/form2parking',
      name: 'form2Parking',
      component: form2Parking
    }
    ,
    {
      path: '/form3parking',
      name: 'form3Parking',
      component: form3Parking
    }
  ]
});
