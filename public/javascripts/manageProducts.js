const adminActions = document.querySelectorAll(".admin-actions");

adminActions.forEach((admin) => {
  admin.addEventListener("click", (e) => {
    if (e.target.localName === "button") {
      const id = e.target.id;

      fetch(`http://localhost:3000/admin/${id}`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  });
});
