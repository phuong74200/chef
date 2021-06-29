
let scope = {
    HeadBtn: e => {
        e.target.addEventListener("click", ev => {
            if (e.props.index == 0) {
                window.scrollTo(0, 0);
                return;
            }
            let target = document.getElementsByClassName("page-title")[e.props.index - 1];
            window.scrollTo(0, target.offsetTop)
        })
    }
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

document.addEventListener("scroll", e => {
    for (let i = 0; i < document.getElementsByClassName("page-btn").length; i++) {
        document.getElementsByClassName("page-btn")[i].classList.remove("on-page");
    }
    for (let i = 0; i < document.getElementsByClassName("page").length; i++) {
        const elm = document.getElementsByClassName("page")[i];
        if (elementInViewport(elm)) {
            document.getElementsByClassName("page-btn")[i].classList.add("on-page");
            break;
        }
    }
})

let anvil = new Anvil(scope);
anvil.init();

let isBurger = true;
document.getElementById("burgerBtn").addEventListener("mouseup", e => {
    let show = function () {
        document.getElementById("header").classList.add("aside");
        document.getElementById("wrapper").classList.add("aside-wrapper");
        document.body.classList.add("aside-main");
        isBurger = false;
    }
    let hide = function () {
        document.getElementById("header").classList.remove("aside");
        document.getElementById("wrapper").classList.remove("aside-wrapper");
        document.body.classList.remove("aside-main");
        isBurger = true;
    }
    if (isBurger) {
        show();
        document.getElementById("drop").onclick = e => {
            e.stopPropagation();
        }
        document.addEventListener("click", e => {
            document.getElementById("check").checked = false;
            hide();
        })
    } else {
        hide();
    }
})