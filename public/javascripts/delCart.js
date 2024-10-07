const deleteButton = document.querySelectorAll(".delete-product");

deleteButton.forEach((del) => {
  del.addEventListener("click", (e) => {
    if (e.target.localName === "button") {
      const id = e.target.id;
      console.log(id);

      fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  });
});
