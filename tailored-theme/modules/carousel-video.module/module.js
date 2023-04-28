const videoCarousel = document.querySelector(".jk_module__video-carousel");
Object.assign(videoCarousel, {
	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: {
		delay: 2500,
		disableOnInteraction: true
	 },
	pagination: {
		clickable: true
	},
	navigation: {
		nextEl: ".jk_vc__next",
		prevEl: ".jk_vc__prev"
	},
	breakpoints: {
		"@0.00": {
			slidesPerView: 1,
			spaceBetween: 0
		},
		"@0.75": {
			slidesPerView: 1,
			spaceBetween: 0
		},
		"@1.00": {
			slidesPerView: 2,
			spaceBetween: 2
		},
		"@1.50": {
			slidesPerView: 3,
			spaceBetween: 3
		}
	}
});

videoCarousel.initialize();
