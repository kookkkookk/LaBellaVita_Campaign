"use strict";function animation(){ctx.clearRect(0,0,w,h),ctx.globalCompositeOperation="lighter";for(var t=1,a=stars.length;t<a;t++)stars[t].draw();setTimeo=setTimeout(animation,100)}function removeE(){clearTimeout(setTimeo)}function addE(){animation()}var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),w=canvas.width=640,h=canvas.height=1138,hue=217,stars=[],count=0,maxStars=100,setTimeo;ctx&&function(){function t(t,a){if(arguments.length<2&&(a=t,t=0),t>a){var i=a;a=t,t=i}return Math.floor(Math.random()*(a-t+1))+t}function a(t,a){var i=Math.max(t,a);return Math.round(Math.sqrt(i*i+i*i))/2}var i=document.createElement("canvas"),s=i.getContext("2d");i.width=640,i.height=640;var e=i.width/2,o=s.createRadialGradient(e,e,0,e,e,e);o.addColorStop(.16,"yellow"),o.addColorStop(.16,"white"),o.addColorStop(.6,"transparent"),s.fillStyle=o,s.beginPath(),s.arc(e,e,e,0,2*Math.PI),s.fill();var r=function(){this.orbitRadius=t(a(w,h)),this.radius=t(60,this.orbitRadius)/15,this.orbitX=w/2,this.orbitY=h/2,this.timePassed=t(0,maxStars),this.speed=t(this.orbitRadius)/1e5,this.alpha=t(2,10)/10,count++,stars[count]=this};r.prototype.draw=function(){var a=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,s=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,e=t(15);1===e&&this.alpha>0?TweenMax.to(this,1,{alpha:0}):2===e&&this.alpha<1&&TweenMax.to(this,1,{alpha:1}),ctx.globalAlpha=this.alpha,ctx.drawImage(i,a-this.radius/2,s-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var n=0;n<maxStars;n++)new r;animation()}();