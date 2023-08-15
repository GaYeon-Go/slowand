// sub1.js
window.addEventListener('load', () => {

  // header gnb, mob_btn 고정
  const menu = document.querySelector('div.menu');
  const mobBtn = document.querySelector('div.mob_btn');
  menu.classList.add("active");
  mobBtn.classList.add("active");

  // 함께 코디된 상품
  const codyA = document.querySelector('div.cody>a');
  const codyBox = document.querySelector('ul.cody_box');

  codyA.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    codyBox.classList.toggle("on");
  })

  // recommend item 이미지 슬라이드
  let swiper = new Swiper(".recommend", {
      slidesPerView: 3.6, //보여지는 슬라이드 갯수
      spaceBetween :20, //swiper-slide에 각각 margin-right를 준다.
      // autoplay:{
      //     delay:3000,
      //     disableOninteraction:false,
      // },
      // loop : false,
      // loopAdditionalSlides:1,
      scrollbar: {
      el: ".swiper-scrollbar",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
          768:{
              slidesPerview: 3.6,
          },
          769: {
              slidesPerView:3.6,
          },
          1025: {
              slidesPerView:4.6,
          },
      }
  });

  // 상품 디테일 및 q/a 버튼 누르기
  const productTopMenu = document.querySelectorAll('ul.product_top>li');
  const product = document.querySelectorAll('.product');

  productTopMenu.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      productTopMenu.forEach(item => {
        item.classList.remove('on');
      });
      item.classList.add("on");

      var line = document.querySelector('div.line');
      line.style.width = e.target.offsetWidth + 'px';
      line.style.left = e.target.offsetLeft + 'px';

      product.forEach(item => {
        item.classList.remove('active');
      });
      product[index].classList.add("active");
    })
  })

  // withitem 슬라이드
  swiper = new Swiper(".withitem", {
    slidesPerView: 3.6, //보여지는 슬라이드 갯수
    spaceBetween :20, //swiper-slide에 각각 margin-right를 준다.
    // autoplay:{
    //     delay:3000,
    //     disableOninteraction:false,
    // },
    // loop : false,
    // loopAdditionalSlides:1,
    scrollbar: {
    el: ".swiper-scrollbar",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
        768:{
            slidesPerview: 3.6,
        },
        769: {
            slidesPerView:3.6,
        },
        1025: {
            slidesPerView:4.6,
        },
    }
  });

  // 상품결제정보
  const payLi = document.querySelectorAll('ul.pay>li>a');
  const payBox = document.querySelectorAll('ul.pay>li>ul');
  console.log(payBox);

  for(let i=0; i<payLi.length; i++){
    payLi[i].addEventListener('click', (e) => {
      e.preventDefault();
      if(payBox[i].classList.contains('on')){
        payBox[i].classList.remove('on');
      } else{
        payBox.forEach(item => {
          item.classList.remove('on');
        });
        payBox[i].classList.add('on');
      }
    });
  }

  // review 상세 검색 버튼
  const keyWard = document.querySelectorAll('ul.keyWard>li>a');
  console.log(keyWard);
  const keyWardBox = document.querySelectorAll('ul.keyWard>li>div');

  for(let i=0; i<keyWard.length; i++){
    keyWard[i].addEventListener('click', (e) => {
      e.preventDefault();
      if(keyWardBox[i].classList.contains('on')){
        keyWardBox[i].classList.remove('on');
      } else{
        keyWardBox.forEach(item => {
          item.classList.remove('on');
        });
        keyWardBox[i].classList.add('on');
      }
    })
  }

  // 상품 사이즈 설명
  const sizeBtn = document.querySelector('div.size>a');
  console.log(sizeBtn);
  const sizeBg = document.querySelector('div.size_bg');
  const body = document.querySelector('body');
  const sizeClose = document.querySelector('a.size_close');
  const sizeDetailPopup = document.querySelector('div.size_detail_popup');

  sizeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sizeBg.classList.add('on');
    body.classList.add('on');
    sizeDetailPopup.classList.add('on');
    sizeClose.classList.add('on');
  });

  sizeClose.addEventListener('click', (e) => {
    e.preventDefault();
    sizeBg.classList.remove('on');
    body.classList.remove('on');
    sizeDetailPopup.classList.remove('on');
    sizeClose.classList.remove('on');
  });

  // 소제별 세탁법
  const washingBtn = document.querySelector('div.washing_tip>a');

  washingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("sub1_popup.html","washing","width=1000px,height=812px,left=200px,top=20px,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,resizeable=no");
  });
});