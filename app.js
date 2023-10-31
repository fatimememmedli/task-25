let url = "https://fakestoreapi.com/products/";
let row = document.querySelector(".row");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
      elem.quantity = 0;

      row.innerHTML += `
        <div class="card me-3 mb-3">
          <div class="image">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>
          <div class="card-details">
            <div class="card-details-text">
              <div class="card-details-head d-flex justify-content-between">
                <div class="name-price">
                  <p class="name">${elem.title}</p>
                  <p class="price">Price:${elem.price} $</p>
                </div>
                <div class="favourite-icon">
                  <button
                    type="button"
                    name="${elem.id}"
                    class="favourite-btn btn btn-danger"
                  >
                    <i class="fa-solid fa-heart" style="color: #ffffff"></i>
                  </button>
                </div>
              </div>
              <p class="catagory">Catagory:${elem.category}</p>
              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <span class="fa fa-star"></span>
              </div>
              <p class="stock-count">Stock: ${elem.rating.count}</p>
            </div>
            <div
              class="basket-button w-100 d-flex align-item-center justify-content-end"
            >
              <button
                type="button"
                name="${elem.id}"
                class="add-basket btn btn-success"
              >
                <i
                  class="fa-solid fa-basket-shopping"
                  style="color: #ffffff"
                ></i>
              </button>
            </div>
          </div>
        </div>
        `;
    });

    let basketBtns = document.querySelectorAll(".btn-success");
    let arr;

    if (localStorage.getItem("basket")) {
      arr = JSON.parse(localStorage.getItem("basket"));
    } else {
      arr = [];
    }
    // console.log(basketBtns);
    for (let basketbtn of basketBtns) {
      basketbtn.addEventListener("click", function () {
        data.forEach((elem) => {
          if (elem.id == this.name) {
            elem.quantity++;
            arr.push(elem);
            localStorage.setItem("basket", JSON.stringify(arr));
          }
        });
      });
    }
  });
