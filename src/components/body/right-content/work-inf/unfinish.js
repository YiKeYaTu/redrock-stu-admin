import Dbind from 'dbind';

import WorkList from './work-list';

export default Dbind.createClass({
  willMount() {
    console.log(this.props)
  },
  template: `
    <work-list
      thead="{{ thead }}"
      tbody="{{ [[
        'WEB研发部',
        '写个骚东西',
        '用html，css写个锤子出来',
        '2014.02.03',
        '2016.02.03',
        '上传'
      ]] }}"
      bg="#fcf8e3"
    ></work-list>
  `,
  components: {
    'work-list': WorkList
  }
});