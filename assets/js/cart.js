$(document).ready(function () {
  let cart = {};
  let total = 0;

  function updateCart() {
    $(".cart-items").empty();
    total = 0;
    for (let id in cart) {
      const item = cart[id];
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      $(".cart-items").append(`
          <li class="cart-item" data-item-id="${id}">
              <span>${item.name} (x${item.quantity})</span>
              <span>₹${itemTotal.toFixed(2)}</span>
          </li>
      `);
    }
    $(".cart-total").text(`Total: ₹${total.toFixed(2)}`);
  }

  $(".add-to-cart").on("click", function () {
    const itemElement = $(this).closest(".menu-item");
    const itemId = itemElement.data("item-id");
    const itemName = itemElement.find(".menu-item-name").text();
    const itemQty = itemElement.find(".menu-item-qty");
    const itemPrice = parseFloat(
      itemElement.find(".menu-item-price").text().substring(1)
    );

    if (!cart[itemId]) {
      cart[itemId] = { name: itemName, price: itemPrice, quantity: 1 };
    } else {
      cart[itemId].quantity += 1;
    }
    itemQty.val(cart[itemId].quantity);

    updateCart();
  });

  $(".remove-from-cart").on("click", function () {
    const itemElement = $(this).closest(".menu-item");
    const itemId = itemElement.data("item-id");
    const itemQty = itemElement.find(".menu-item-qty");
    if (cart[itemId] && cart[itemId].quantity > 0) {
      cart[itemId].quantity -= 1;
      itemQty.val(cart[itemId].quantity);
      if (cart[itemId].quantity === 0) {
        delete cart[itemId];
        itemQty.val("");
      }
    }

    updateCart();
  });
});
