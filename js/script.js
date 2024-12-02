document.addEventListener(`DOMContentLoaded`, function () {
  
    // top버튼
  // 1.변수선언하기
  const topBtn = document.querySelector(`.top_btn`);

  // 2. 스크롤 이벤트 걸기
  window.addEventListener(`scroll`, function () {
    // 3. 변수에다가 스크롤Y값 넣어주기
    const scrollTop = window.scrollY;
    

    // 4. if문 사용하여 스크롤값이 300이상 부터 버튼이 보여지고 사라지는지 조건문 걸어주기
    if (scrollTop >= 300) {
      topBtn.classList.add(`scroll`);
    } else {
      topBtn.classList.remove(`scroll`);
    }
  });

  // 5. 탑버튼 클릭 이벤트를 진행하여 클릭했을때 부드럽게 맨 위로 올라가게 하기
  topBtn.addEventListener(`click`, function () {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    })
  });

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

  
    // -------------------------------------------------
  var swiper = undefined;

    function initSwiper3() {


    const windowWidth = window.innerWidth;

    if(windowWidth >= 960 && swiper == undefined){
      // tabSwiper
      swiper = new Swiper(".tabSwiper", {
    });
    } else {
      swiper.destroy();
      swiper = undefined;
    }
  }

    initSwiper3();

    window.addEventListener(`resize`, () => {
      initSwiper3();
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