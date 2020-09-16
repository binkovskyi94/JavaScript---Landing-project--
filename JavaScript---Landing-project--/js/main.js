function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}window.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".tabheader__item"),n=document.querySelectorAll(".tabcontent"),e=document.querySelector(".tabheader__items");function i(){n.forEach(function(e){e.classList.add("hide"),e.classList.remove("show","fade")}),s.forEach(function(e){e.classList.remove("tabheader__item_active")})}function a(e){var t=0<arguments.length&&void 0!==e?e:0;n[t].classList.add("show","fade"),n[t].classList.remove("hide"),s[t].classList.add("tabheader__item_active")}i(),a(),e.addEventListener("click",function(e){var n=e.target;n&&n.classList.contains("tabheader__item")&&s.forEach(function(e,t){n==e&&(i(),a(t))})});var t,r,c,o,l,d,u,m;function h(e){return 0<=e&&e<10?"0".concat(e):e}function f(){var e,t,n=(e=r,{total:t=Date.parse(e)-Date.parse(new Date),days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)});o.innerHTML=h(n.days),l.innerHTML=h(n.hours),d.innerHTML=h(n.minutes),u.innerHTML=h(n.seconds),n.total<=0&&clearInterval(m)}t=".timer",r="2020-12-11",c=document.querySelector(t),o=c.querySelector("#days"),l=c.querySelector("#hours"),d=c.querySelector("#minutes"),u=c.querySelector("#seconds"),m=setInterval(f,1e3),f();var v=document.querySelectorAll("[data-modal]"),_=document.querySelector(".modal"),y=document.querySelector("[data-close]");function L(){_.classList.add("show"),_.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(modalTimerId)}function p(){_.classList.add("hide"),_.classList.remove("show"),document.body.style.overflow=""}v.forEach(function(e){e.addEventListener("click",L)}),y.addEventListener("click",p),_.addEventListener("click",function(e){e.target===_&&p()}),document.addEventListener("keydown",function(e){"Escape"===e.code&&_.classList.contains("show")&&p()}),window.addEventListener("scroll",function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(L(),window.removeEventListener("scroll",e))});var w=function(){function l(e,t,n,s,i,a){_classCallCheck(this,l),this.src=e,this.alt=t,this.title=n,this.descr=s,this.price=i;for(var r=arguments.length,c=new Array(6<r?r-6:0),o=6;o<r;o++)c[o-6]=arguments[o];this.classes=c,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}return _createClass(l,[{key:"changeToUAH",value:function(){this.price=this.price*this.transfer}},{key:"render",value:function(){var t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach(function(e){return t.classList.add(e)}),t.innerHTML="\n                <img src=".concat(this.src," alt=").concat(this.alt,'>\n                <h3 class="menu__item-subtitle">').concat(this.title,'</h3>\n                <div class="menu__item-descr">').concat(this.descr,'</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>').concat(this.price,"</span> грн/день</div>\n                </div>\n            "),this.parent.append(t)}}]),l}();new w("images/tabs/vegy.jpg","vegy",'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',9,".menu .container").render(),new w("images/tabs/elite.jpg","elite",'Меню "Премиум"','В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',14,".menu .container","menu__item").render(),new w("images/tabs/post.jpg","post",'Меню "Постное"',"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",21,".menu .container","menu__item").render()});     this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "images/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();

    new MenuCard(
        "images/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "images/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render();


    // const div = new MenuCard();
    // div.render();
});