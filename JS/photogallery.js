import App from './components/app.js';

// Render the Vue component in the HTML element with the ID "app".
new Vue({
  render: h => h(App),
}).$mount(`#app`);
