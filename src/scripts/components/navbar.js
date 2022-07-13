class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button id="drawerButton" class="drawer-button" aria-label="hamburger button">☰</button>
      <picture>
        <source type="image/webp" srcset="./images/logo.webp">
        <source type="image/png" srcset="./images/logo.png">
        <img class="brand" src="./images/logo.png" alt="delicious logo app">
      </picture>
      <nav id="drawerNavigation">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://linkedin.com/in/farachghanisa" target="_blank" rel="noopener">About</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', Navbar);
