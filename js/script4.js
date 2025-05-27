let viewData = document.querySelector('.products .row');
let products = JSON.parse(localStorage.getItem('products')) || [];

products.forEach((product, index) => {
    let col = document.createElement('div');
    col.className = 'col-md-3 mb-3';

    col.innerHTML = `
        <div class="card h-100 border border-2 border-dark position-relative p-2" data-index="${index}">
            <img src="${product.img_url}" class="card-img-top border border-2 h-75">
            <div class="card-body">
                <p class="card-title fw-medium text">${product.pname}</p>
                <p class="card-text fs-5 fw-bold text-black ">Price: ₹${product.price}<br>Stock: ${product.Qty}</p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
            <button class="btn btn-danger position-absolute bottom-0 end-0 mx-3 my-4 delete-btn">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;

    viewData.appendChild(col);
});

document.addEventListener("DOMContentLoaded", function () {
    let deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            let card = btn.closest(".card");
            let index = card.getAttribute("data-index");

            products.splice(index, 1);

            localStorage.setItem("products", JSON.stringify(products));

            card.classList.add("fade-out");
            setTimeout(() => {
                card.closest(".col-md-3").remove();
            }, 300);
        });
    });
});
