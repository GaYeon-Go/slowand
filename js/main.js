/* main.js */
window.addEventListener('load', () => {
    // banner
    const slide = document.querySelectorAll('li.slide');
    const btnPrev = document.querySelector('a.btn_prev');
    const btnNext = document.querySelector('a.btn_next');
    const slideRolling = document.querySelectorAll('div.slide_rolling>ul>li');

    let slideNum = 0;
    let slideLast = slide.length - 1;

    function slides(items, index, action){
        items.forEach(item => {
            item.classList.remove(action);
        });
        items[index].classList.add(action);
    }
    // next 버튼
    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        slideNum++;
        if(slideNum > slideLast) slideNum = 0;
        
        slides(slide, slideNum, "active");
        slides(slideRolling, slideNum, "active");
    });
    // prev 버튼
    btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        slideNum--;
        if(slideNum < 0) slideNum = slideLast;

        slides(slide, slideNum, "active");
        slides(slideRolling, slideNum, "active");
    });
    // 롤링 버튼
    for(let i=0; i<slideRolling.length; i++){
        slideRolling[i].addEventListener('click', (e) => {
            e.preventDefault();
            slides(slide, i, "active");
            slides(slideRolling, i, "active");
        });
    }
    // 오토베너
    function bannerSlide(){
        slideNum++;
        if(slideNum > slideLast) slideNum = 0;

        slides(slide, slideNum, "active");
        slides(slideRolling, slideNum, "active");

        bnnSlide = setTimeout(bannerSlide, 5000);
    }
    let bnnSlide = setTimeout(bannerSlide, 5000);

    // theBest topMenu
    const bestTopMenu = document.querySelectorAll("ul.best_top_menu>li");

    bestTopMenu.forEach((tab,index) => {
        tab.addEventListener("click", (j) => {
            bestTopMenu.forEach(tab => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");

        var bestBottomLine = document.querySelector('div.bottom_line');
        bestBottomLine.style.width=j.target.offsetWidth + "px";
        bestBottomLine.style.left=j.target.offsetLeft + "px";

        var bestSlide = document.querySelectorAll('.swiper');
        bestSlide.forEach(item => {
            item.classList.remove("on");
        });
        bestSlide[index].classList.add("on");
        });
    });

    // today best 이미지 슬라이드
    let swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1.5, //보여지는 슬라이드 갯수
        spaceBetween :20, //swiper-slide에 각각 margin-right를 준다.
        autoplay:{
            delay:3000,
            disableOninteraction:false,
        },
        loop : false,
        loopAdditionalSlides:1,
        scrollbar: {
        el: ".swiper-scrollbar",
        },
        scrollbar: {
        el: ".swiper-scrollbar",
        },
        breakpoints: {
            768:{
                slidesPerview: 1.5,
            },
            769: {
                slidesPerView:2.5,
            },
            1025: {
                slidesPerView:3.6,
            },
        }
    });

    // 중간 광고
    const adCenterUl = document.querySelector('div.ad_center>ul');
    const adCenterLi = document.querySelectorAll('div.ad_center>ul>li');
    const adPrev = document.querySelector('a.ad_prev');
    const adNext = document.querySelector('a.ad_next');

    let adCenterNum = 0;
    let adCenterLast = adCenterLi.length - 1;
    let bnnW = document.body.clientWidth;
    window.addEventListener('resize', () => {
        bnnW = document.body.clientWidth;
    });
    function adSlides(className){
        className.style.transform = `translateX(${-adCenterNum * bnnW}px)`;
    }
    // next 버튼
    adNext.addEventListener('click', (e) => {
        e.preventDefault();
        adCenterNum++;
        if(adCenterNum > adCenterLast) adCenterNum = 0;
        adSlides(adCenterUl);
    });

    // prev 버튼
    adPrev.addEventListener('click', (e) => {
        e.preventDefault();
        adCenterNum--;
        if(adCenterNum < 0) adCenterNum = adCenterLast;
        adSlides(adCenterUl);
    });

    // 오토 슬라이드
    function adSlide(){
        adCenterNum++;
        if(adCenterNum > adCenterLast) adCenterNum = 0;

        adSlides(adCenterUl);

        adAuto = setTimeout(adSlide, 5000);
    }
    let adAuto = setTimeout(adSlide, 5000);

    // 상품 설명 슬라이드
    const itemName = document.querySelectorAll('a.item_name');
    const scrollText = document.querySelectorAll('ul.scroll_text');

    for(let i=0; i<itemName.length; i++){
        itemName[i].addEventListener("click", (e) => {
            e.preventDefault();
            if(e.currentTarget.classList.contains("on")){
                e.currentTarget.classList.remove("on");
                scrollText[i].classList.remove("on");
            } else{
                itemName.forEach(item => {
                    item.classList.remove("on");
                });
                e.currentTarget.classList.add("on");
                scrollText.forEach(item => {
                    item.classList.remove("on");
                });
                scrollText[i].classList.add("on");
            }
        })
    }

    // weekly best more버튼 클릭
    const moreBtn = document.querySelector('a.more_btn');
    const items = document.querySelector('div.weeklyBest_inner>ul.items:last-child');

    moreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moreBtn.classList.toggle("on");
        items.classList.toggle("on");
    });

    // 니즈찾기
    const nizeTopMenu = document.querySelectorAll('ul.nize_top_menu>li');
    const nizeItem = document.querySelectorAll('ul.item');

    nizeTopMenu.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            nizeTopMenu.forEach(item => {
                item.classList.remove("on");
            });
            item.classList.add("on");

            var nizeBtnLine = document.querySelector('div.nize_btn_line');
            nizeBtnLine.style.width = e.target.offsetWidth + "px" ;
            nizeBtnLine.style.left = e.target.offsetLeft + "px";

            nizeItem.forEach(item => {
                item.classList.remove("on");
            });
            nizeItem[index].classList.add("on");
        });
    });

    // mob 니즈찾기 more버튼
    const mobMore = document.querySelector('a.mob_more');
    const item = document.querySelectorAll('ul.item');

    mobMore.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle("active");
        for(var i=0; i<item.length; i++){
            item[i].classList.toggle("active");
        }
    });

    // 사이즈 디테일 버튼
    const sizeDetailBtn = document.querySelector('a.size_detail_btn');

    sizeDetailBtn.style.display = "none";
});