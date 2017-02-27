import Dbind from 'dbind';
import { Router } from 'dbind-router';
import RouteConfig from './route';

require('./iconfont');

const App = Dbind.createClass({
  data() {
    return {
      RouteConfig,
    }
  },
  template: `
    <router
      route-config="{{ RouteConfig }}"
      root-path="/view"
    ></router>
  `,
  components: {
    'router': Router
  }
});

Dbind.registerComponent('app', App);
Dbind.watch(document.body);