const API = "https://api.escuelajs.co/api/v1/products";
const row = document.querySelector(".products__row");
const loading = document.querySelector(".loading")

async function fetchData(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      // loading.style.display = "none"
    });
}

fetchData(API);

const h4 = document.querySelector(".products__h4");
const h3 = document.querySelector(".products__h3");
const titlePr = document.querySelector(".products__title");
const pricePr = document.querySelector(".products__bottom__h3");

function createCard({ id, category, images, title, price }) {
  h4.textContent = id;
  h3.textContent = category.name;
  titlePr.textContent = title;
  pricePr.textContent = price;
}
