import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <my-hero></my-hero>
      <section class="content">
        <h2>Restaurant List</h2>
        <div id="restaurants" class="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
