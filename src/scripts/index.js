import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/footer.css';
import '../styles/detail.css';
import '../styles/favorite.css';
import './components/navbar';
import './components/hero';
import './components/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#drawerButton'),
  drawer: document.querySelector('#drawerNavigation'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
