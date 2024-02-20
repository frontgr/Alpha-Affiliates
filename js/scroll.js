function scrollToElem(to) {
  console.log(to);
  if (to === "leaders") {
    const headerHeight = document.querySelector("header").offsetHeight;
    const anchor = document.getElementById("leaders");
    scrollToFunction(anchor, headerHeight);
  }
  if (to === "relocation") {
    const headerHeight = document.querySelector("header").offsetHeight;
    const anchor = document.getElementById("relocation");
    scrollToFunction(anchor, headerHeight);
  }
  if (to === "form") {
    const headerHeight = document.querySelector("header").offsetHeight;
    const anchor = document.getElementById("form");
    scrollToFunction(anchor, headerHeight);
  }
  if (to === "cover") {
    const headerHeight = document.querySelector("header").offsetHeight;
    const anchor = document.getElementById("cover");
    scrollToFunction(anchor, headerHeight);
  }
}

function scrollToFunction(anchor, headerHeight) {
  const offsetPosition = anchor.offsetTop - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
