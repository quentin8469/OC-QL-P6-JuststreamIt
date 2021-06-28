// carrousel all best movies
slide_position = 0
size = 5
// carrousel all best movies
let slides = document.getElementsByClassName("item 1")
slide_length = slides.length
let afterButton = document.querySelector(".after")
let beforeButton = document.querySelector(".befor")

function update() {
    for (let slide of slides) {
        slide.classList.remove("shows")
        slide.classList.add("hidden")
    }

    for (let i = slide_position; i < slide_position + size; i++) {
        slides[i].classList.remove("hidden");
        slides[i].classList.add("shows");
    }
}

function nextSlide() {
    if (slide_position + size == slide_length) {
        slide_position = 0;
    } else {
        slide_position++;
    }

    update();
}

function beforeSlide() {
    if (slide_position == 0) {
        slide_position = slide_length - size;
    }
    else {
        slide_position--;
    }
    update();
}

update()
afterButton.addEventListener("click", nextSlide);
beforeButton.addEventListener("click", beforeSlide);

// carrousel movie fantasy
slide_position_f = 0
size_f = 5
// carrousel movie fantasy
let slides_f = document.getElementsByClassName("item 2")
slide_length_f = slides_f.length
let afterButton_f = document.querySelector(".after.f")
let beforeButton_f = document.querySelector(".befor.f")

function update_f() {
    for (let slide of slides_f) {
        slide.classList.remove("shows")
        slide.classList.add("hidden")
    }

    for (let i = slide_position_f; i < slide_position_f + size_f; i++) {
        slides_f[i].classList.remove("hidden");
        slides_f[i].classList.add("shows");
    }
}

function nextSlide_f() {
    if (slide_position_f + size_f == slide_length_f) {
        slide_position_f = 0;
    } else {
        slide_position_f++;
    }

    update_f();
}

function beforeSlide_f() {
    if (slide_position_f == 0) {
        slide_position_f = slide_length_f - size_f;
    }
    else {
        slide_position_f--;
    }
    update_f();
}

update_f()
afterButton_f.addEventListener("click", nextSlide_f);
beforeButton_f.addEventListener("click", beforeSlide_f);

// carrousel movie horror
slide_position_h = 0
size_h = 5
// carrousel movie horror
let slides_h = document.getElementsByClassName("item 3")
slide_length_h = slides_h.length
let afterButton_h = document.querySelector(".after.h")
let beforeButton_h = document.querySelector(".befor.h")

function update_h() {
    for (let slide of slides_h) {
        slide.classList.remove("shows")
        slide.classList.add("hidden")
    }

    for (let i = slide_position_h; i < slide_position_h + size_h; i++) {
        slides_h[i].classList.remove("hidden");
        slides_h[i].classList.add("shows");
    }
}

function nextSlide_h() {
    if (slide_position_h + size_h == slide_length_h) {
        slide_position_h = 0;
    } else {
        slide_position_h++;
    }

    update_h();
}

function beforeSlide_h() {
    if (slide_position_h == 0) {
        slide_position_h = slide_length_h - size_h;
    }
    else {
        slide_position_h--;
    }
    update_h();
}

update_h()
afterButton_h.addEventListener("click", nextSlide_h);
beforeButton_h.addEventListener("click", beforeSlide_h);

// carrousel movie mystery
slide_position_m = 0
size_m = 5
// carrousel movie mystery
let slides_m = document.getElementsByClassName("item 4")
slide_length_m = slides_m.length
let afterButton_m = document.querySelector(".after.m")
let beforeButton_m = document.querySelector(".befor.m")

function update_m() {
    for (let slide of slides_m) {
        slide.classList.remove("shows")
        slide.classList.add("hidden")
    }

    for (let i = slide_position_m; i < slide_position_m + size_m; i++) {
        slides_m[i].classList.remove("hidden");
        slides_m[i].classList.add("shows");
    }
}

function nextSlide_m() {
    if (slide_position_m + size_m == slide_length_m) {
        slide_position_m = 0;
    } else {
        slide_position_m++;
    }

    update_m();
}

function beforeSlide_m() {
    if (slide_position_m == 0) {
        slide_position_m = slide_length_m - size_m;
    }
    else {
        slide_position_m--;
    }
    update_m();
}

update_m()
afterButton_m.addEventListener("click", nextSlide_m);
beforeButton_m.addEventListener("click", beforeSlide_m);
