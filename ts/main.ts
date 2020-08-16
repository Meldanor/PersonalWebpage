(ready());

function ready() {
  navBarOnClick();
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

