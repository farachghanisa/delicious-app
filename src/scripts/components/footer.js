class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>copyright &copy;2022 - Delicious</p>
    `;
  }
}

customElements.define('my-footer', Footer);
