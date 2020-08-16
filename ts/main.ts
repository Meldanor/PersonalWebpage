import differenceInYears from "date-fns/differenceInYears";

// Empty module so that imports are working
export {};

(ready());

function ready() {
  navBarOnClick();
  calculateYears();
}

function navBarOnClick() {
  document.querySelectorAll("nav > a").forEach((ele) => {
    ele.addEventListener('click', (el) => {
      ele.scrollIntoView({
        behavior: 'smooth'
      })
    });
  });
}

function calculateYears() {
  // Date I started working on minecraft addons
  const start = new Date(2009, 1, 1);
  const years = differenceInYears(Date.now(), start);
  document.getElementById("years").innerText = years.toString();
}
