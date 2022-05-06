"use strict";

const coinsSlider = new Swiper('.slider-section-coins', {
	slidesPerView: 1.5,
	spaceBetween: 32,

	breakpoints: {
		1200: {
			slidesPerView: 4.5,
			slidesPerGroup: 1,
			spaceBetween: 32,
		},
	},
});

const platformSlider = new Swiper('.slider-section-platform', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},

	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
	},
});

const commetsSlider = new Swiper('.comments-slider', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	}
});