import Dbind from 'dbind';
import css from './work-list.css';

export default Dbind.createClass({
  willMount() {

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
          <td data-each="j in tbody[i]">
              {{ tbody[i][j] }}
          </td>
        </tr>
      </tbody>
    </table>
  `,
  components: {

  }
});