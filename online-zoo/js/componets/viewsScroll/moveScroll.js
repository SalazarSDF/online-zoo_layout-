const scrollBar = document.querySelector(".custom-scroll-bar");
let moveScroll = () => {
  const usersReviews = document.querySelector(".users-reviews");
  if (!usersReviews) return;
  scrollBar.addEventListener("input", () => {
    const howMuchScroll = document.querySelector(".review").offsetWidth + 29;
    usersReviews.scroll({
      left: howMuchScroll * Number(scrollBar.value),
      behavior: "smooth",
    });
  });
};

if (scrollBar) moveScroll();
