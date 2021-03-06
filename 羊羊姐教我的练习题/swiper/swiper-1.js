function Swiper(option) {
	var module = function () {
		this.init();
		this.bind();
	};

	module.prototype = {
		init: function () {
			this.elWrapper = document.querySelector(option.selector);
			this.currentIndex = 0;
			this.elBtnRight = this.elWrapper.querySelector('.btn-right');
			this.elBtnLeft = this.elWrapper.querySelector('.btn-left');
			this.len = this.elWrapper.querySelectorAll('.swiper-item').length;
			if (option.autoplay) {
				this.autoplay();
			}
		},
		bind: function () {
			var that = this;
			this.elBtnLeft.addEventListener('click', function () {
				that.prev();
			});
			this.elBtnRight.addEventListener('click', function () {
				that.next();
			});
			var elListDot = this.elWrapper.querySelector('.dot-list');
			elListDot.addEventListener('click', function (e) {
				if (e.target.classList.contains('dot')) {
					var index = e.target.dataset.index;
					console.log('现在点击的是第' + index + '个点点');
					that.handleCurrentIndexChange(index);
				}
			});
		},
		prev() {
			var to = this.currentIndex - 1;
			if (to < 0) {
				// option.loop ? (to = this.len - 1) : (to = this.currentIndex);
				if (!option.loop) {
					return;
				} else {
					to = this.len - 1;
				}
			}
			this.handleCurrentIndexChange(to);
		},
		next() {
			var to = this.currentIndex + 1;
			if (to >= this.len) {
				if (!option.loop) {
					return;
				} else {
					to = 0;
				}
			}
			this.handleCurrentIndexChange(to);
		},
		go(to) {
			if (to < 0 || to >= this.len) {
				return;
			}
			this.handleCurrentIndexChange(to);
		},
		handleCurrentIndexChange: function (to) {
			console.log('现在显示的是第', this.currentIndex, '个');
			console.log('把第', to, '显示出来，其他都隐藏');
			this.elWrapper
				.querySelectorAll('.swiper-item')
				[this.currentIndex].classList.remove('swiper-item-current');
			this.elWrapper
				.querySelectorAll('.swiper-item')
				[to].classList.add('swiper-item-current');
			this.currentIndex = to;
		},
		// 自动播放
		autoplay() {
			that = this;
			setInterval(function () {
				that.next();
			}, option.interval);
		}
	};

	return new module();
}
