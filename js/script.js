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