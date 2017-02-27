import Dbind from 'dbind';
import css from './index.css';

export default Dbind.createClass({
  template: `
    <section 
      style="{{ show ? 'block' : 'none' }}"
      class="${css['cover']}"
    >
      <component data-from="children"></component>
    </section>
  `
});