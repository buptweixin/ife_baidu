function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

function addNum(num, direction) {
    var warn = document.getElementsByClassName("warn-info")[0];
    if (num == "") {
        warn.innerText = "请输入数字!";
    } else {
        warn.innerText = "";
    
    var nums = document.getElementById("nums");
    var num_div = document.createElement("div");
    num_div.classList.add("num");
    num_div.innerText = num;
    if (nums.childElementCount === 0) {
        nums.appendChild(num_div);
    } else {
        if (direction === "left") {
            nums.insertBefore(num_div, nums.firstElementChild);
        } else {
            nums.appendChild(num_div);
        }
    }
    }
}

function removeNum(direction) {
    var warn = document.getElementsByClassName("warn-info")[0];
    var nums = document.getElementById("nums");
    if (nums.childElementCount == 0) {
        warn.innerText = "当前不存在数字!";
    } else {

    if (direction === "left") {
        nums.removeChild(nums.firstElementChild);
    } else {
        nums.removeChild(nums.lastElementChild);
    }
    }
}

function bindEvent() {
    addEvent(left_add, "click", function() {
        addNum(input.value || 0, "left");
    });

    addEvent(right_add, "click", function() {
        addNum(input.value || 0, "right");
    });

    addEvent(left_remove, "click", function() {
        removeNum("left");
    });

    addEvent(right_remove, "click", function() {
        removeNum("right");
    });
}

var
    left_add,
    right_add,
    left_remove,
    right_remove,
    input;


function init() {
    left_add = document.querySelector(".in > .left");
    right_add = document.querySelector(".in > .right");
    left_remove = document.querySelector(".out > .left");
    right_remove = document.querySelector(".out > .right");
    input = document.querySelector("#number");
    bindEvent();
}


init();

console.log("enter");