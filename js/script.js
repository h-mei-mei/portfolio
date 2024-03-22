// JavaScript Document

//サイトを開いたときにダークモードかどうかを判定
$(function () {
  var setDarkmode = function () {
	if(sessionStorage.getItem("dark")){
		$('#darkmode').addClass("on");
		$('body').addClass("dark");
	}
  }
  setDarkmode();
});
//ダークモードボタン
$('#darkmode').click(function() {
	$('#darkmode').toggleClass("on");
	$('body').toggleClass("dark");
	if(sessionStorage.getItem("dark")){
		sessionStorage.removeItem("dark");
	}else{
		sessionStorage.setItem("dark",true);
	}
})

//ハンバーガーメニュー
$(".openbtn").click(function () {
    $(this).toggleClass('active');
	$(".sp-menu").toggleClass('active');
});
$(window).resize(function(){
  	// 画面幅が変更されたときに実行
	$(".openbtn").removeClass('active');
	$(".sp-menu").removeClass('active');
});

//サイトを訪れた時のローディング画面
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});











// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");

// メニュー開閉制御
hamburger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    hamburger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});

window.addEventListener("keydown", () => {　//escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    hamburger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    hamburger.focus();
    hamburger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
});