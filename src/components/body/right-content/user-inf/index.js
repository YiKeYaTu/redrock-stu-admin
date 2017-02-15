import Dbind from 'dbind';
import css from './index.css';

import UserHead from './user-head/index';
import RecentCanvas from './recent-canvas/index';

const list = [{
  href: '',
  val: '部门公告'
}, {
  href: '',
  val: '最近提交',
}, {
  href: '',
  val: '我的动态' 
}];

const active = css['active'];

export default Dbind.createClass({
  willMount() {
    this.props.changeActive(0);
  },
  data: {
    list,
    active
  },
  template: `
    <section class="${css['user']}">
      <section class="${css['base-inf']}">
        <user-head img-src="https://avatars1.githubusercontent.com/u/10389599?v=3&s=460"></user-head>
          <h2 class="${css['user-name']}">
            YiKeYaTu
          </h2>
          <p class="${css['user-num']}">
            2014214054
          </p>
          <div class="${css['departments']}">
            <svg class="icon ${css['icon']}" aria-hidden="true">
              <use xlink:href="#icon-ico13"></use>
            </svg>
            <svg class="icon ${css['icon']}" aria-hidden="true">
              <use xlink:href="#icon-design"></use>
            </svg>
          </div>
      </section>
      <section class="${css['recent-inf']}">
        <recent-canvas></recent-canvas>
      </section>
    </section>
  `,
  components: {
    'user-head': UserHead,
    'recent-canvas': RecentCanvas
  }
});