export default {
  name: "intersection",
  inserted: function (el, binding) {
    // Переключаем фокус на элемент
    var options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    // eslint-disable-next-line no-unused-vars
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting /*  && this.page < this.totalPage */) {
        binding.value();
        console.log("I am here!");
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
