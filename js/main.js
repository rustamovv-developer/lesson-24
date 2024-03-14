const API = "https://api.escuelajs.co/api/v1/products";
const row = document.querySelector(".products__row");
// const loading = document.querySelector(".loading");

let isLogin = localStorage.getItem("token");

function checkIsLogin() {
  if (!isLogin) {
    window.location.replace("/index.html");
  }
}
checkIsLogin();

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      // loading.classList.add("loading-none");
    });
}

fetchData(API);

function createCard(data) {
  data.forEach(({ id, category, images, title, price }) => {
    let card = document.createElement("div");
    card.className = "products__card";
    card.innerHTML = `
              <h4 class="products__h4">${id}</h4>
              <img
                src="${JSON.parse(images)[0]}}"
                alt="${name}"
                class="products__img"
              />
              <h3 class="products__h3">${category.name}</h3>
              <h2 class="products__title">
                ${title}
              </h2>
              <div class="products__raiting">
                <img
                  src="../assets/images/star.png"
                  alt="star"
                  class="products__raiting__img"
                />
                <p class="products__raiting__text">
                  By <strong class="products__raiting__strong">NestFood</strong>
                </p>
              </div>
              <div class="products__bottom">
                <div class="products__bottom__texts">
                  <h3 class="products__bottom__h3">${price}</h3>
                  <p class="products__bottom__text">$32.8</p>
                </div>
                <a href="#" class="products__bottom__btn">
                  <i
                    class="fa-solid fa-cart-shopping products__bottom__icon"
                  ></i>
                  Add</a
                >
              </div>
    `;
    card.addEventListener("click", () => singleRoute(id));
    row.appendChild(card);
  });
}

function singleRoute(id) {
  window.open(`./pages/product.html?id=${id}`, "_self");
}
