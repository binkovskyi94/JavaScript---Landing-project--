window.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".tabheader__item"),o=document.querySelectorAll(".tabcontent"),e=document.querySelector(".tabheader__items");function a(){o.forEach(function(e){e.classList.add("hide"),e.classList.remove("show","fade")}),n.forEach(function(e){e.classList.remove("tabheader__item_active")})}function c(e){var t=0<arguments.length&&void 0!==e?e:0;o[t].classList.add("show","fade"),o[t].classList.remove("hide"),n[t].classList.add("tabheader__item_active")}a(),c(),e.addEventListener("click",function(e){var o=e.target;o&&o.classList.contains("tabheader__item")&&n.forEach(function(e,t){o==e&&(a(),c(t))})});var t,s,r,d,i,l,u,h;function f(e){return 0<=e&&e<10?"0".concat(e):e}function m(){var e,t,o=(e=s,{total:t=Date.parse(e)-Date.parse(new Date),days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)});d.innerHTML=f(o.days),i.innerHTML=f(o.hours),l.innerHTML=f(o.minutes),u.innerHTML=f(o.seconds),o.total<=0&&clearInterval(h)}t=".timer",s="2020-12-11",r=document.querySelector(t),d=r.querySelector("#days"),i=r.querySelector("#hours"),l=r.querySelector("#minutes"),u=r.querySelector("#seconds"),h=setInterval(m,1e3),m();var v=document.querySelectorAll("[data-modal]"),L=document.querySelector(".modal"),y=document.querySelector("[data-close]");function _(){L.classList.add("hide"),L.classList.remove("show"),document.body.style.overflow=""}v.forEach(function(e){e.addEventListener("click",function(){L.classList.add("show"),L.classList.remove("hide"),document.body.style.overflow="hidden"})}),y.addEventListener("click",_),L.addEventListener("click",function(e){e.target===L&&_()}),document.addEventListener("keydown",function(e){"Escape"===e.code&&L.classList.contains("show")&&_()})});  'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };              
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        }else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const   timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
                
    }

    setClock('.timer', deadline);
    
    //Modal

    const   modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
                // modal.classList.toggle('show');
                // off scroll
                document.body.style.overflow = 'hidden';
            });
    });
    
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        // on scroll
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // modal.classList.toggle('show');
            // on scroll
            // document.body.style.overflow = '';            
        }
    });

    // close key
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
});