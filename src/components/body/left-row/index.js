import Dbind from 'dbind';
import css from './index.css';

import { Link } from 'dbind-router';

const list = [{
  href: '/stu/index',
  icon: '#icon-user',
  val: '我的信息'
}, {
  href: '/stu/work/unfinish',
  icon: '#icon-homework',
  val: '作业任务'
}, {
  href: '/stu/courware',
  icon: '#icon-data',
  val: '课件资料'
}];
const activeClass = css['active'];

export default Dbind.createClass({
  data() {
    return {
      list,
      activeClass
    }
  },
  template: `
    <section ref="left-row" class="${css['left-row']}">
      <ul>
        <li data-each="i in list" class="{{ i == leftRowActive ? activeClass : '' }}">
          <svg class="icon ${css['icon']}" aria-hidden="true">
            <use xlink:href="{{ list[i].icon }}"></use>
          </svg>
          <route-link to="{{ list[i].href }}">
            {{ list[i].val }}
          </route-link>
        </li>
      </ul>
    </section>
  `,
  components: {
    'route-link': Link
  } 
});