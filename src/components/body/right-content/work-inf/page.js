import Dbind from 'dbind';
import css from './page.css';

export default Dbind.createClass({
  data() {
    return {
      list: []
    }
  },
  willUpdate() {
    this.settList();
  },
  willMount() {
    this.settList();
  },
  settList() {
    const list = [];
    let currentPage = this.props.currentPage;
    let totalPage = this.props.totalPage;

    let start = currentPage - 2;
    let len = currentPage + 2;
    if(start < 1) {
      len += ~start + 2;
    }
    if(len > totalPage) {
      len = totalPage;
      start -= len - totalPage;
      if(len - start < 4) {
        start -= 4 - (len - start)
      }
    }
    if(start < 1) start = 1;
    if(start > 1) list.unshift('...');
    
    for(let i = start; i <= len; i ++) {
      if(i !== 1 && i !== totalPage) {
        list.push(i);
      }
    }
    list.unshift(1);
    if(len < totalPage) list.push('...');
    list.push(totalPage);
    this.data.list = list;
  },
  template: `
    <ul class="${css['page-content']}">
      <li 
        data-each="i in list" 
        onclick="{{ handlePageItemClick(list[i]) }}"
        class="{{ list[i] === currentPage ? '${css['active']}' : '' }}"
      >
        {{ list[i] }}
      </li>
    </ul>
  `
});