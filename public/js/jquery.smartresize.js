// http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

(function ($, sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout, width, height;

        return function () {
            var obj = this,
                args = arguments,
                newWidth = $(document).width(),
                newHeight = $(window).height(),
                delayed = function () {
                    if (!execAsap) {
                        func.apply(obj, args);
                    }

                    timeout = null;
                };

            if (newWidth !== width || newHeight !== height) {
                width = newWidth;
                height = newHeight;

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

                timeout = setTimeout(delayed, threshold || 100);
            }
        };
    }

    jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');