define('gyScrollJS', [],
    function () {
        var keys = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };
        var scrollTimer = null;

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        function scrollAnim(pos) {
            if(window.scrollY < pos) {
                var scrollTo = Math.abs(window.scrollY - pos) < 8 ? pos : (window.scrollY + 8);
                if(scrollTo >= pos) {
                    scrollTimer = window.clearInterval(scrollTimer);
                }else {
                    window.scroll(0, scrollTo);
                }
            }else {
                var scrollTo = Math.abs(window.scrollY - pos) < 8 ? pos : (window.scrollY - 8);
                if(scrollTo <= pos) {
                    scrollTimer = window.clearInterval(scrollTimer);
                }else {
                    window.scroll(0, scrollTo);
                }
            }
        }
        var gyScrollJS = {
            disableScroll: function() {
                if (window.addEventListener) // older FF
                    window.addEventListener('DOMMouseScroll', preventDefault, false);
                window.onwheel = preventDefault; // modern standard
                window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
                window.ontouchmove = preventDefault; // mobile
                document.onkeydown = preventDefaultForScrollKeys;
            },
            enableScroll: function() {
                if (window.removeEventListener)
                    window.removeEventListener('DOMMouseScroll', preventDefault, false);
                window.onmousewheel = document.onmousewheel = null;
                window.onwheel = null;
                window.ontouchmove = null;
                document.onkeydown = null;
            },
            scrollToPos: function(pos) {
                if(scrollTimer) {
                    scrollTimer = window.clearInterval(scrollTimer);
                }
                scrollTimer = setInterval(function() { scrollAnim(pos) }, 1);
            },
            scrollToNext: function() {
                if(scrollTimer) {
                    scrollTimer = window.clearInterval(scrollTimer);
                }
                var scrollToPos = window.scrollY + window.innerHeight;
                scrollTimer = setInterval(function() { scrollAnim(scrollToPos) }, 1);
            },
            scrollToPre: function() {
                if(scrollTimer) {
                    scrollTimer = window.clearInterval(scrollTimer);
                }
                var scrollToPos = window.scrollY - window.innerHeight;
                scrollTimer = setInterval(function() { scrollAnim(scrollToPos) }, 1);
            }
        }
        return gyScrollJS;
});

