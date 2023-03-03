"use strict";

const days = document.querySelectorAll(".day");

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) =>
    days.forEach(function (item) {
      const dayName = item.querySelector(".day--name");

      let tooltipText;
      let newTooltip;

      item.addEventListener("mouseover", function () {
        for (let i = 0; i < data.length; i++) {
          if (dayName.textContent === data[i].day) {
            tooltipText = data[i].amount;
            newTooltip = document.createElement("span");
            newTooltip.innerHTML = `$${tooltipText}`;
            newTooltip.classList.add("tooltip");
            item.append(newTooltip);
          }
        }
      });
      item.addEventListener("mouseleave", function () {
        const tooltip = item.querySelector(".tooltip");
        if (tooltip) {
          tooltip.remove();
        }
      });
    })
  );
