document.addEventListener(`DOMContentLoaded`,function(){

// header scroll event
  window.addEventListener(`wheel`, function (event) {
    const headerScroll = document.querySelector(`.header_area`); 
    
    if (event.deltaY > 0) {
      // wheel down
      headerScroll.classList.remove(`scroll`);
    } else {
      // wheel up
      headerScroll.classList.add(`scroll`);
    }
  });


  // 햄버거버튼 및 메뉴
  const menuBtn = document.querySelector(`.m_btn`);
  const mainMenu = document.querySelector(`.main_menu`);

  menuBtn.addEventListener(`click`, function () { 
    this.classList.toggle(`active`);

    const hasClass = this.classList.contains(`active`);

    if (hasClass) {
        mainMenu.classList.add(`active`);
    } else {
        mainMenu.classList.remove(`active`);
    }
  });


// 서브메뉴 탭 연결
  const menuList = document.querySelectorAll(`.main_menu li`);
  const subMenuBox = document.querySelector(`.sub_menu_box`);

  for (const menuBtn of menuList){
    menuBtn.addEventListener(`mouseenter`, function () {
      subMenuBox.classList.add(`active`);
      
    // 탭연결하기
    const tabData = this.getAttribute(`data-tab`);
    const subMenu = document.querySelectorAll(`.sub_menu`);

    for (const subMenuInfo of subMenu){
      subMenuInfo.classList.remove(`active`);
    }

    const changeTab = document.getElementById(tabData);
    changeTab.classList.add(`active`)
    });    
  }

  subMenuBox.addEventListener(`mouseleave`, function () {
    this.classList.remove(`active`);
  });


  // bannerSwiper
  new Swiper(".bannerSwiper", {
    autoplay:{
      delay:2500,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // -------------------------------------------------
  var swiper = undefined;

    function initSwiper() {


    const windowWidth = window.innerWidth;

    if(windowWidth >= 960 && swiper == undefined){
      // itemSwiper
      swiper = new Swiper(".itemSwiper", {
          slidesPerView: 4,
          spaceBetween: 20,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
    });
    } else {
      swiper.destroy();
      swiper = undefined;
    }
  }

    initSwiper();

    window.addEventListener(`resize`, () => {
      initSwiper();
    })

  // -------------------------------------------------

  
  var swiper2 = undefined;

  function initSwiper2() {


    const windowWidth = window.innerWidth;

    if(windowWidth >= 960 && swiper2 == undefined){
      // lookSwiper
      swiper2 = new Swiper(".lookSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    });
  } else {
      swiper2.destroy();
      swiper2 = undefined;
    }
  }

  initSwiper2();

    window.addEventListener(`resize`, () => {
      initSwiper2();
    })


  // tabSwiper
  new Swiper(".tabSwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
  });

  // sec_4 탭기능
  const tabMenu = document.querySelectorAll(`.tab_list_box li`);
  
  for (const tabBtn of tabMenu){
    tabBtn.addEventListener(`click`, function () {
      this.classList.add(`tabOn`);

      for (const siblings of tabMenu){
        if (siblings != this) {
          siblings.classList.remove(`tabOn`);
        }
      }

    // 탭연결
    const tabData = this.getAttribute(`data-alt`);
    const itemWrap = document.querySelectorAll(`.swiper_wrap`);

    for (const tab of itemWrap){
      tab.classList.remove(`tabOn`);
    }
    const changeTab = document.getElementById(tabData);
    changeTab.classList.add(`tabOn`);


    });
  }


}); // end