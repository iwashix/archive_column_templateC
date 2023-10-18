// ページトップボタン
$(document).ready(function () {
    var scrollToTopBtn = $("#top-btn");

    // スクロールイベントを監視
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > 300) {
            scrollToTopBtn.css({
                opacity: "1",
                transform: "translate(0)",
            });
        } else {
            scrollToTopBtn.css({
                transform: "translateY(100px)",
                opacity: "0"
            });
        }

        var footer = $("#footer"); // フッターの要素を適切なセレクタで指定
        var footerTop = footer.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (footerTop <= windowBottom) {
            // フッターの上部でボタンを停止
            scrollToTopBtn.css({
                // position: "absolute",
                bottom: (windowBottom - footerTop + 10) + "px"
            });
        } else {
            // ページトップから700pxスクロールすると元の位置に戻す
            scrollToTopBtn.css({
                position: "fixed",
                bottom: "20px"
            });
        }
    });

    // ボタンをクリックしてトップに戻る
    scrollToTopBtn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "ease");

    });
});

