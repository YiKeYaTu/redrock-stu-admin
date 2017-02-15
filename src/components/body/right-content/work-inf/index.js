import Dbind from 'dbind';
import { Link } from 'dbind-router';
import css from './index.css';

export default Dbind.createClass({
  data: {
    thead: [
      '所属部门', 
      '作业标题',
      '作业说明',
      '发布日期',
      '截止日期',
      '操作'
    ]
  },
  willUpdate() {
    console.log(11)
  },
  willMount() {
    this.props.changeActive(1);
  },
  template: `
    <div class="${css['button-grp']}">
      <router-link to="/stu/work/unfinish" value="未完成"></router-link>
      <router-link to="/stu/work/unfinish" value="已过期"></router-link>
      <router-link to="/stu/work/finish" value="已完成"></router-link>
    </div>
    <component 
      data-from="children && children.component" 
      children="{{ children && children.children }}"
      thead="{{ thead }}"
    ></component>
  `,
  components: {
    'router-link': Link
  }
});