const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productId = e.target.id;

    fetch(`/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Failed to add product to cart.");
      });
  });
});
