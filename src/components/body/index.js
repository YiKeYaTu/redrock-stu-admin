import Dbind from 'dbind';
import css from './index.css';

import LeftRow from './left-row/index';
import RightContent from './right-content/index';

export default Dbind.createClass({
  willMount() {
  },
  template: `
    <left-row 
      leftRowActive="{{ leftRowActive }}"
    ></left-row>
    <right-content 
      children="{{ children }}" 
      changeActive="{{ changeActive }}"
      rightContentTitle="{{ rightContentTitle }}"
    ></right-content>
  `, 
  components: {
    'left-row': LeftRow,
    'right-content': RightContent,
  }
});