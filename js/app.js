const toggle = document.querySelector(".toggle");

function toggleFunc(e) {
  const target = e.target;

  if (target.checked) {
    target.classList.replace("annually", "monthly");
    return;
  }
  target.classList.replace("monthly", "annually");
}

// Event

toggle.addEventListener("change", toggleFunc);
