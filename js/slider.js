function Slider() {
    this.currentImgIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;
    this.imagesUrls = null;
};

Slider.prototype.start = function (elId, imagesUrls = []) {
    let elSelector = '#' + elId;
    let el = document.querySelector(elSelector);
    this.showPrevBtn = el.querySelector('.show-prev');
    this.showNextBtn = el.querySelector('.show-next');
    this.slideImg = el.querySelector('.slide-img');
    this.imagesUrls = imagesUrls;

    this.slideImg.src = this.imagesUrls[this.currentImgIndex];
    this.showPrevBtn.disabled = true;

    let that = this;

    // subscribe to event
    this.showPrevBtn.addEventListener('click', function(){
        that.onShowPrevBtnCliсk()
    });
    this.showNextBtn.addEventListener('click', function(){
        that.onShowNextBtnCliсk()
    });
};

Slider.prototype.onShowPrevBtnCliсk = function () {
    this.currentImgIndex--;
    this.slideImg.src = this.imagesUrls[this.currentImgIndex];
    this.showNextBtn.disabled = false;
    
    if (this.currentImgIndex === 0) {
        this.showPrevBtn.disabled = true;
    }
};

Slider.prototype.onShowNextBtnCliсk = function () {
    this.currentImgIndex++;
    
    this.slideImg.src = this.imagesUrls[this.currentImgIndex];
    this.showPrevBtn.disabled = false;
    console.log(this.currentImgIndex);
    if (this.currentImgIndex === (this.imagesUrls.length - 1)) {
        this.showNextBtn.disabled = true;
    }
};