let DOMReference = {
  sliderItem: document.querySelectorAll(".list__item"),
  sliderContainer: document.querySelector(".list"),
  arrows: document.querySelectorAll('.arrows'),
  buttonNames: {
    next: document.querySelector('.arrows > button:nth-child(1)').name,
    prev: document.querySelector('.arrows > button:nth-child(2)').name
  }
};

let OnPageSlider = slider(DOMReference);

OnPageSlider();
