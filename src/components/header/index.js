import Dbind from 'dbind';
import css from './index.css';

export default Dbind.createClass({
  template: `
    <nav class="${css['navbar']}">
      <h1>
        <strong>REDROCK</strong>
        <span>ADMIN</span>
      </h1>
      <div>
        <svg class="icon ${css['user-icon']}" aria-hidden="true">
          <use xlink:href="#icon-user"></use>
        </svg>
        <span>
          用户
        </span>
      </div>
    </nav>
  `
});