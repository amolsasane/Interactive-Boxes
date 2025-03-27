document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  const totalPriceElement = document.querySelector(".bottom-container .price");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Expand the selected box and collapse others
      boxes.forEach((b) => b.classList.toggle("expanded", b === this));

      // Select the radio input inside the clicked box
      this.querySelector("input").checked = true;

      // Update the total price
      const priceText = this.querySelector(".price").textContent;
      const priceValue = priceText.match(/₹([\d.]+)/)[0];
      totalPriceElement.textContent = `${priceValue} INR`;
    });
  });
});
