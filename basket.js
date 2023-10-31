let box = document.querySelector(".box");
let url = "https://fakestoreapi.com/products/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let basketArr = JSON.parse(localStorage.getItem("basket"));
    console.log(basketArr);
    basketArr.forEach((element) => {
      box.innerHTML += ` <div class="basket-item">
        <div class="basket-item-details h-90 d-flex">
          <div class="basket-image mt-2">
            <img
              src="${element.image}"
              alt=""
            />
          </div>
          <div class="basket-item-namePrice mt-2">
            <div class="basket-item-name">
              <p class="basket-item-name">${element.title}</p>
              <p class="count">quantity: ${element.quantity}</p>
            </div>
            <div class="basket-item-price">
              <p class="ms-5">${element.price * element.quantity}</p>
              <div
                class="basket-delete-buttons d-flex justify-content-end ms-4"
              >
                <button
                  type="button"
                  name="${element.id}"
                  class="delete-button btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });
    let deleteBtns = document.querySelectorAll(".delete-button");
    for (let deletebtn of deleteBtns) {
      deletebtn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        basketArr.forEach((elem) => {
          if (elem.id == this.name) {
            // basketArr.pop();
          }
        });
      });
    }
  });
