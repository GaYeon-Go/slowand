/* header.js */
window.addEventListener('load', () => {
    // 광고 롤링
    const adTopWrap = document.querySelector('.ad_top_wrap');
    const adTopLi = document.querySelectorAll('.ad_top_wrap>li');

    let adNum = 0;
    let adLast = adTopLi.length - 1;
    let adH = document.querySelector('.ad_top_wrap>li').clientHeight;
    window.addEventListener('resize', () => {
        adH = document.querySelector('.ad_top_wrap>li').clientHeight; 
    });

    function adRolling(){
        adNum++;
        if(adNum>adLast) adNum = 0;
        adTopWrap.style.top = `${-adNum * adH}px`;

        ad = setTimeout(adRolling, 3000);
    }
    let ad = setTimeout(adRolling, 3000);

    // 주메뉴
    const gnbMenu = document.querySelectorAll('nav.gnb>ul>li');

    for(var i=0; i<gnbMenu.length; i++){
        gnbMenu[i].addEventListener("mouseover", (e) => {
            e.preventDefault();
            e.currentTarget.classList.add("on");
        });
        gnbMenu[i].addEventListener("mouseout", (e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("on");
        });
    }

    // 인기검색
    // 인기검색 버튼
    const view = document.querySelector('a.view');
    const rolDown = document.querySelector('div.rol_down');

    view.addEventListener('click', (e) => {
        e.preventDefault();
        view.classList.toggle("on");
        rolDown.classList.toggle("on");
    });

    // 인기검색어 롤링
    const rolSlideUl = document.querySelector('div.rol_slide>ul');
    const rolLi = document.querySelectorAll('div.rol_slide>ul>li');

    let rolNum = 0; 
    let rolLast = rolLi.length - 1;

    let rolH = document.querySelector('div.rol_slide>ul>li').clientHeight;
    window.addEventListener('resize', () => {
        rolH = document.querySelector('div.rol_slide>ul>li').clientHeight;
    });

    function rolling(){
        rolNum++;
        if(rolNum > rolLast) rolNum = 0;

        rolSlideUl.style.top = `${-rolNum * rolH}px`;

        rol = setTimeout(rolling, 3000);
    }
    let rol = setTimeout(rolling, 3000);

    // header gnb, mob_btn 고정
    const menu = document.querySelector('div.menu');
    const mobBtn = document.querySelector('div.mob_btn');

    window.addEventListener('scroll', () => {
        let menuH = window.scrollY;
        if(menuH <= 50){
            menu.classList.remove('on');
            mobBtn.classList.remove("on");
        } else{
            menu.classList.add("on");
            mobBtn.classList.add("on");
        }
    });
});