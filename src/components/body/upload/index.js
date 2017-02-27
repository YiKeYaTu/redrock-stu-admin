import Dbind from 'dbind';
import css from './index.css';

import { Link } from 'dbind-router';
import Cover from '../cover/index';
import ChooseFile from '../choose-file/index';

export default Dbind.createClass({
  data() {
    return {
      
    }
  },
  template: `
    <cover show="true">
      <section class="${css['upload-content']}">
        <ul class="${css['upload-list']}">
          <li class="${css['upload-inf']}">
            <ul>
              <li>
                <h3 class="${css['active']}">正在上传（3）</h3>
              </lli>
              <li>
                <h3>未完成</h3>
              </lli>
              <li>
                <h3>已完成</h3>
              </lli>
            </ul>
          </li>
          <li>
            <choose-file></choose-file'>
          </li>
        </ul>
      </section>
    </cover>
  `,
  components: {
    'route-link': Link,
    'cover': Cover,
    'choose-file': ChooseFile
  } 
});