import Stu from './components/stu';
import UserInf from './components/body/right-content/user-inf/index';
import WorkInf from './components/body/right-content/work-inf/index';
  import WorkList from './components/body/right-content/work-inf/work-list';

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
        component: WorkList
      }, {
        path: 'finish',
        component: WorkList
      }, {
        path: 'expire',
        component: WorkList
      }]
    }]
}