import Dbind from 'dbind';
import css from './work-list.css';

import Page from './page';

export default Dbind.createClass({
  routeEnter(path) { 
    this.props.handleWorkListRouteEnter(path);
  },
  template: `
    <table class="${css['work-list']}">
        <thead>
          <tr>
            <th data-each="i in thead">
              {{ thead[i] }}
            </th>
          </tr>
      </thead>
      <tbody>
        <tr data-each="i in tbody" style="background: {{ bg }}">
          <td>
              {{ tbody[i].dep }}
          </td>
          <td>
              {{ tbody[i].title }}
          </td>
          <td>
              {{ tbody[i].inf }}
          </td>
          <td>
              {{ tbody[i].time }}
          </td>
          <td>
              {{ tbody[i].endTime }}
          </td>
          <td>
              <button class="${css['upload']}">提交</button>
          </td>
        </tr>
      </tbody>
    </table>
    <page
      currentPage="{{ currentPage }}"
      totalPage="{{ totalPage }}"
      handlePageItemClick="{{ handlePageItemClick }}"
    ></page>
  `,
  components: {
    'page': Page
  }
});