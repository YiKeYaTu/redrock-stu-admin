import Dbind from 'dbind';
import css from './index.css';

export default Dbind.createClass({
  data() {
    return {
      handleSrc(src) {
        return `url(${src})`;
      }
    }
  },
  template: `
    <div 
      class="${css['img']}" 
      style="{{ {
        backgroundImage: handleSrc(imgSrc) 
      } 
    }}"
    ></div>
  `
});