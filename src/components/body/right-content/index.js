import Dbind from 'dbind';
import css from './index.css';

import UserInf from './user-inf/index';

const title = ['我的信息', '作业任务', '课件资料'];

export default Dbind.createClass({
  data() {
    return {
      getTitle(index) {
        return title[index];
      }
    }
  },
  template: `
    <section class="${css['right-content']}">
      <div class="${css['title']}">
        <svg class="icon ${css['icon']}" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
        <span class="${css['home']}">
          {{ getTitle(rightContentTitle) }}
        </span>
      </div>
      <div class="${css['container']}">
        <component 
          data-from="children.component" 
          children="{{ children.children }}" 
          changeActive="{{ changeActive }}"
        ></component>
      </div>
    </section>
  `,
  components: {
    'user-inf': UserInf
  }
});