import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => ` 
  <picture>
  <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + /small/ + restaurant.pictureId}">
    <img class="restaurant__image lazyload" src="${CONFIG.BASE_IMAGE_URL + /medium/ + restaurant.pictureId}" alt="${restaurant.name}">
  </picture>
  <div class="restaurant-info">
    <div class="restaurant-info__header">
      <h2 class="restaurant__name">${restaurant.name}</h2>
      <p class="rating"><span>⭐️</span> ${restaurant.rating}</p>
    </div>
    <div class="restaurant-info__body">
      <p class="category">Kategori: ${restaurant.categories.map((category) => `<span> ${category.name}</span>`)}<p>
      <p>${restaurant.address}</p>
      <p>${restaurant.city}</p>
      <div class="description">
        <h3>Deskripsi</h3>
        <p>${restaurant.description}</p>
      </div>
      <h3>Menu</h3>
      <div class="menu">
        <div class="foods">
          <h4>Makanan</h4>
          <ul>
            ${restaurant.menus.foods.map((food) => `
              <li>
                <p>- ${food.name}</p>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="drinks">
          <h4>Minuman</h4>
          <ul>
            ${restaurant.menus.drinks.map((drink) => `
              <li>
                <p>- ${drink.name}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      <h3>Review</h3>
      <div class="reviews">
        ${restaurant.customerReviews.map((review) => `
        <div class="review-card">
          <div class="review-card__header">
            <div>
              <picture>
                <source type="image/webp" srcset="./images/blank-profile.webp">
                <source type="image/png" srcset="./images/blank-profile.png">
                <img src="./images/blank-profile.png" alt="customer profile picture">
              </picture>  
            </div>
            <div>
              <h4>${review.name}</h4>
              <p>${review.date}</p>
            </div>  
          </div>
          <div class="review-card__body">
            <p>${review.review}</p>
          </div>
        </div>
        `)}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + /small/ + restaurant.pictureId}" alt="${restaurant.name || '-'}" >
    <div class="restaurant-item__content">
      <p class="rating"><span>⭐️</span> ${restaurant.rating || '-'}</p>
      <h3 class="restaurant__name">
        <a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a>
      </h3>
      <p class="city">${restaurant.city || '-'}</p>
      <p class="description">${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
