import Stu from './components/stu';
import UserInf from './components/body/right-content/user-inf/index';
import WorkInf from './components/body/right-content/work-inf/index';
  import UnFinish from './components/body/right-content/work-inf/unfinish';
  import Finish from './components/body/right-content/work-inf/finish'


export default {
    path: '/stu',
    component: Stu,
    children: [{
      path: 'index',
      component: UserInf,
    }, {
      path: 'work',
      component: WorkInf,
      children: [{
        path: 'unfinish',
        component: UnFinish
      }, {
        path: 'finish',
        component: Finish
      }]
    }]
}