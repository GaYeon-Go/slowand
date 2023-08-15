window.addEventListener('load', () => {
    // top버튼, 상품문의버튼
    const topBtn = document.querySelector('a.topBtn');
    const produtInfor = document.querySelector("a.produtInfor");
    const sizeDetailBtn = document.querySelector('a.size_detail_btn');
    const produt = document.querySelector('div.produt');
    const productClose = document.querySelector('a.produt_close');

    produtInfor.addEventListener("click", (e) => {
        e.preventDefault();
        produt.classList.add("active");
    });
    productClose.addEventListener("click", (e) => {
        e.preventDefault();
        produt.classList.remove("active");
    });

    topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });
    });

    // 스크롤 위치에 따른 top버튼 위치
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        let ht;
        let footerHt = document.querySelector("#footer").offsetHeight;

        function top(topHt){
            if(scroll <= 0){
                topBtn.classList.remove("on","ab");
                produtInfor.classList.remove("on","ab");
                sizeDetailBtn.classList.remove('on','ab');
            } else if(scroll>0 && scroll<=topHt){
                topBtn.classList.add("on");
                topBtn.classList.remove("ab");
                produtInfor.classList.add("on");
                produtInfor.classList.remove("ab");
                sizeDetailBtn.classList.add("on");
                sizeDetailBtn.classList.remove("ab");
            } else{
                topBtn.classList.remove("on");
                topBtn.classList.add("ab");
                produtInfor.classList.remove("on");
                produtInfor.classList.add("ab");
                sizeDetailBtn.classList.remove("on");
                sizeDetailBtn.classList.add("ab");
            }
        }

        let bnnW = document.body.clientHeight;

        if(bnnW <= 768){
            ht = document.body.clientHeight - footerHt - 200;
            top(ht);
        } else if(bnnW>769 && bnnW<=1024){
            ht = document.body.clientHeight - footerHt - 200;
            top(ht);
        } else{
            ht = document.body.clientHeight - footerHt - 250;
            top(ht);
        }
    });

    // 상품 사이즈 설명
    const sizeBg = document.querySelector('div.size_bg');
    const body = document.querySelector('body');
    const sizeClose = document.querySelector('a.size_close');
    const sizeDetailPopup = document.querySelector('div.size_detail_popup');

    sizeDetailBtn.addEventListener('click', (e) => {
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
});