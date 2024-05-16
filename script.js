document
  .querySelector(".profile-img")
  .addEventListener("mouseover", function () {
    document.querySelector(".img-prof").src = "asset/Untitled-1.jpg";
  });
document
  .querySelector(".profile-img")
  .addEventListener("mouseout", function () {
    document.querySelector(".img-prof").src =
      "asset/IMG_20200808_195723_565.jpg";
  });
