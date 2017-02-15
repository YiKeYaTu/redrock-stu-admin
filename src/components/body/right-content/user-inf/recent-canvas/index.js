import Dbind from 'dbind';
import css from './index.css';

export default Dbind.createClass({
  didMount() {
    const ctx = this.refs.canvas.getContext('2d');
  },
  template: `
    <canvas class="${css['cvs']}" ref="canvas">
    </canvas>
  `,
});