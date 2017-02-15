import Dbind from 'dbind';
import css from './global.css';

import Header from './header/index';
import Body from './body/index';

export default Dbind.createClass({
  willUpdate() {
    console.log(this.props)
  },
  data: {
    leftRowActive: 0,
    rightContentTitle: 0,
    changeActive(index) {
      this.trackingUpdate({
        leftRowActive: index,
        rightContentTitle: index
      });
    },
  },
  template: `
    <app-header></app-header>
    <app-body 
      children="{{ children }}"
      rightContentTitle="{{ rightContentTitle }}" 
      changeActive="{{ changeActive }}"
      leftRowActive="{{ leftRowActive }}"
    ></app-body>
  `,
  components: {
    'app-header': Header,
    'app-body': Body
  }
});