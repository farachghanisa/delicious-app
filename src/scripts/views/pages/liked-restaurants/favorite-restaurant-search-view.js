import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section class="content">  
        <h2>Your Favorite Restaurant</h2>
        <div class="search-container">
          <input id="query" type="text" placeholder="Search restaurant...">
          <button aria-label="button search"><i class="fa fa-search"></i></button>  
        </div>
        <div id="restaurants" class="restaurant-list">
        
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;
    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found"><p>Restoran tidak ditemukan</p></div>';
  }
}

export default FavoriteRestaurantSearchView;
