/* mob.js */
window.addEventListener('load', () => {
    // mob
    // 햄버거 버튼 누르면
    const mobBtnClose = document.querySelector('div.mob_btn_close');
    const bg = document.querySelector('div.bg');
    const mob = document.querySelector('div.mob');
    const mobBtn = document.querySelector('div.mob_btn')

    mobBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bg.classList.add("on");
        mob.classList.add("on");
        mobBtnClose.classList.add("on");
    });

    mobBtnClose.addEventListener('click', (e) => {
        e.preventDefault();
        bg.classList.remove("on");
        mob.classList.remove("on");
        e.currentTarget.classList.remove("on");
    })

    // 언어창
    const mobLanguge = document.querySelector('ul.mob_languge');
    const mobView = document.querySelector('a.mob_view');
    const mobLangugeUl = document.querySelector('ul.mob_languge ul');

    mobLanguge.addEventListener('click', (e) => {
        e.preventDefault();
        mobView.classList.toggle("on");
        mobLangugeUl.classList.toggle("on");
    });

    // 인기검색어
    const hotkeyRollVeiw = document.querySelector('div.hotkeyRoll>a');
    const hotall = document.querySelector('ul.hotall');

    hotkeyRollVeiw.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('on');
        hotall.classList.toggle("on");
    });

    // 인기검색어 롤링
    const keyRoll = document.querySelector('ul.key_roll');
    const keyRollLi = document.querySelectorAll('ul.key_roll>li');

    let keyNum = 0; 
    let keyLast = keyRollLi.length - 1;

    let keyH = document.querySelector('ul.key_roll>li').clientHeight;
    window.addEventListener('resize', () => {
        keyH = document.querySelector('ul.key_roll>li').clientHeight;
    });

    function keyRolling(){
        keyNum++;
        if(keyNum > keyLast) keyNum = 0;

        keyRoll.style.top = `${-keyNum * keyH}px`;

        keyrol = setTimeout(keyRolling, 3000);
    }
    let keyrol = setTimeout(keyRolling, 3000);

    // about
    const aboutBtn = document.querySelector('div.about>h2>a');
    const aboutUl = document.querySelector('div.about>ul');

    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
        aboutUl.classList.toggle("on");
    });

    // community
    const communityBtn = document.querySelector('div.community>h2>a');
    const communityUl = document.querySelector('div.community>ul');

    communityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('on');
        communityUl.classList.toggle('on');
    });
});