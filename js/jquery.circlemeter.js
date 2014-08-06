(function ($) {
    $.fn.circleMetter = function (options) {

        var settings = $.extend({
            size: 150,
            target: 150
        }, options);

        return this.each(function () {

            var width = settings.size;
            var height = settings.size;

            var outer = $(this);

            outer.width(width);
            outer.height(height);

            outer.css("margin", 0);
            outer.css("paddig", 0);
            outer.css("display", "inline-block");
            outer.css('border-radius', settings.size + "px");
            outer.css('position', 'relative');
            outer.css("textAlign", "left");

            var inner = outer.clone();
            inner.addClass("inner");
            inner.css('borderWidth', '0px');
            inner.css("top", width / 2);
            inner.css("left", height / 2);
            inner.width(0);
            inner.height(0);

            outer.append(inner);



            var target = 100;
            if (settings.target.toString().indexOf("%") === -1) {
                target = settings.target > settings.size ? settings.size : settings.target;
            } else {
                target = Number(settings.target.toString().slice(0, settings.target.length - 1));
                target = target > 100 ? 100 : target;
                target = target * settings.size / 100;

            }

            animateToSize(inner, target);

            function animateToSize(element, targetSize) {

                // calculate the final top and left position
                var finalWidth = target;
                var finalHeight = target;

                var finalTop = (height - finalHeight) / 2;
                var finalBottom = (width - finalWidth) / 2;

                var animationOptions = [];
                animationOptions.duration = 1000;
                animationOptions.queue = false;

                element.stop().animate({
                    width: finalWidth,
                    height: finalHeight
                }, animationOptions).animate({
                    top: finalTop,
                    left: finalBottom
                }, animationOptions);
            }

        });
    };
}(jQuery));