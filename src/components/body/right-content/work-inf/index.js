import Dbind from 'dbind';
import { Link } from 'dbind-router';
import css from './index.css';

export default Dbind.createClass({
  data() {
    return {
      workActive: 0,
      bg: '',
      currentPage: 0,
      totalPage: 0,
      thead: [
        '所属部门', 
        '作业标题',
        '作业说明',
        '发布日期',
        '截止日期',
        '操作'
      ],
      tbody: [],
      handleWorkListRouteEnter(path) {
        if(path === 'unfinish') {
          this.changeEnterIndex(0, '#fcf8e3');
        } else if(path === 'finish') {
          this.changeEnterIndex(1, '#dff0d8');
        } else {
          this.changeEnterIndex(2, '#f2dede');
        }
      },
      handlePageItemClick(index) {
        if(index === '...') return;
        this.trackingUpdate({
          currentPage: index
        });
      }
    }
  },
  changeEnterIndex(index, bg) {
    this.trackingUpdate({
      workActive: index,
      bg,
      currentPage: 1,
      totalPage: 10,
      tbody: [{
        dep: 'WEB研发部',
        title: '用html，css写个锤子'
      }, {
        dep: 'WEB研发部',
        title: '用html，css写个锤子'
      }]
    });
  },
  getPageInf(url) {

  },
  willMount() {
    this.props.changeActive(1);
  },
  template: `
    <div class="${css['button-grp']}">
      <router-link to="/stu/work/unfinish">
        <button class="{{ workActive == 0 ? '${css["button-active"]}' : '' }}">未完成</button>
      </router-link>
      <router-link to="/stu/work/finish">
        <button class="{{ workActive == 1 ? '${css["button-active"]}' : '' }}">已完成</button>
      </router-link>
      <router-link to="/stu/work/expire">
        <button class="{{ workActive == 2 ? '${css["button-active"]}' : '' }}">已过期</button>
      </router-link>
    </div>
    <component 
      data-from="children && children.component" 
      children="{{ children && children.children }}"
      thead="{{ thead }}"
      tbody="{{ tbody }}"
      bg="{{ bg }}"
      currentPage="{{ currentPage }}"
      totalPage="{{ totalPage }}"
      handleWorkListRouteEnter="{{ handleWorkListRouteEnter }}"
      handlePageItemClick="{{ handlePageItemClick }}"
    ></component>
  `,
  components: {
    'router-link': Link
  }
});