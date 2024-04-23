document.addEventListener('DOMContentLoaded', () => {
  const stepsSliderEl = document.querySelector('[js-steps-slider]');

  if (stepsSliderEl && Swiper) {
    let init = false;
    let stepsSlider;

    const nextBtn = stepsSliderEl.querySelector('[js-steps-button-next]');
    const prevBtn = stepsSliderEl.querySelector('[js-steps-button-prev]');

    function manageSliderState() {
      if (window.innerWidth <= 1024 && !init) {
        init = true;

        stepsSlider = new Swiper(stepsSliderEl, {
          slidesPerView: 1,
          spaceBetween: 48,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
        });
      } else if (init) {
        stepsSlider.destroy();
        init = false;
      }
    }

    manageSliderState();

    window.addEventListener('resize', manageSliderState);
  }

  const participantsEl = document.querySelector('[js-participants]')
  const participantsSliderEl = document.querySelector('[js-participants-slider]');

  if (participantsEl && participantsSliderEl) {
    const nextBtn = participantsEl.querySelector('[js-participants-next]');
    const prevBtn = participantsEl.querySelector('[js-participants-prev]');
    const pagination = participantsEl.querySelector('[js-participants-pagination]');


    new Swiper(participantsSliderEl, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      // autoplay: {
      //   delay: 4000,
      // },
      pagination: {
        el: pagination,
        type: "fraction",
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        // when window width is >= 320px
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      }
    });
  }
})


document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset =  30;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
