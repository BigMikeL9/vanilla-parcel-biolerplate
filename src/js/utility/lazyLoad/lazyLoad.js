const lazyLoad = () => {
  const featuredImages = document.querySelectorAll("img[data-src]");

  const imagesObsCallBack = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Replace 'src' with 'data-src'
      entry.target.setAttribute("src", entry.target.dataset.src);

      // [ALWAYS USE 'load' event WHEN IMPLEMENTING 'LAZY LOADING IMAGES' strategy]
      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      // stops observing after replacing and removing css filter class
      observer.unobserve(entry.target);
    });
  };

  const imagesObsOptions = {
    root: null,
    threshold: 0.7,
  };

  const imagesObserver = new IntersectionObserver(
    imagesObsCallBack,
    imagesObsOptions
  );

  featuredImages.forEach((image) => imagesObserver.observe(image));
};

export default lazyLoad;
