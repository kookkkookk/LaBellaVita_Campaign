var init = function(){

	"use strict";
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        // w = canvas.width = window.innerWidth - 25,
        // h = canvas.height = 600,
        w = canvas.width = 1138,
        h = canvas.height = 1600,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 200; //星星数量

    var setTimeo;
    ctx && (function() {
        var canvas2 = document.createElement('canvas'),
            ctx2 = canvas2.getContext('2d');
        canvas2.width = 1138;
        canvas2.height = 1138;
        var half = canvas2.width / 2,
            gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

        gradient2.addColorStop(0.03, '#fffbd2');
        gradient2.addColorStop(0.03, 'white');
        // gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(0.4, 'transparent');
        gradient2.shadowBlur = 500;

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();



        // End cache

        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }

            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
            //星星移动范围，值越大范围越小，
        }

        var Star = function() {

            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            //星星大小
            this.orbitX = w / 3;
            this.orbitY = h / 3;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 100000;
            //星星移动速度
            this.alpha = random(2, 10) / 10;

            count++;
            stars[count] = this;
        }

        Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(15);

            if (twinkle === 1 && this.alpha > 0) {
                // this.alpha -= 0.05;
                TweenMax.to( this, 1 , {
                    alpha: 0
                } );
            } else if (twinkle === 2 && this.alpha < 1) {
                // this.alpha += 0.05;
                TweenMax.to( this, 1 , {
                    alpha: 1
                } );
            }

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        }

        for (var i = 0; i < maxStars; i++) {
            new Star();
        }

        animation();
    })();

    function animation() {
        /*ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.1; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'; //背景
        ctx.fillRect(0, 0, w, h)*/
        ctx.clearRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        };

        // window.requestAnimationFrame(animation);
        setTimeo = setTimeout(animation, 100);
    }

    function removeE() {
        clearTimeout(setTimeo)
    };

    function addE() {
        animation();
    };

}
init();