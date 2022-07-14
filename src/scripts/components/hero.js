class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-image">
        <picture>
          <source media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_4-medium.webp">
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/heros/hero-image_4-medium.jpg">
          <source type="image/webp" srcset="./images/heros/hero-image_4-large.webp">
          <source type="image/jpeg" srcset="./images/heros/hero-image_4-large.jpg">
          <img src="./images/heros/hero-image_4-large.jpg" alt="hero image">
        </picture>
      </div>
      <div class="hero-overlay">
        <div class="hero-text">
          <h1>Delicious</h1>
          <p>Temukan restoran terbaik untukmu!</p>
        </div>
      </div>
    `;
  }
}

customElements.define('my-hero', Hero);
