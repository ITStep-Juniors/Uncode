class SliderService {
    constructor() {
        this.AddActionToSlider();
    }
    AddActionToSlider() {
        window.addEventListener('load', function () {
            var gliders = document.querySelectorAll(".glider");
            var previos = document.querySelectorAll(".glider-prev");
            var nextElem = document.querySelectorAll(".glider-next");
            for (var i = 0; i < gliders.length; i++) {
                new Glider(gliders[i], {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    draggable: true,
                    dots: '.dots',
                    arrows: {
                        prev: previos[i],
                        next: nextElem[i]
                    }
                });
            }
        });
    }
}