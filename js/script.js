var nav = document.querySelector(".nav");
var color_icon = document.querySelector(".color_icon");
var contrast = document.querySelectorAll(".contrast");
var peach = document.querySelector(".peach");
var green = document.querySelector(".green");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var orange = document.querySelector(".orange");
var red = document.querySelector(".red");
var contrast_hover = document.querySelectorAll(".contrast_hover");
var scroll_up = document.querySelector(".scroll_up");
console.log(scroll_up.style.background.color)
for (var i = 0; i < contrast_hover.length; i++) {

    contrast_hover[i].addEventListener("pointerover", function() {
        this.style.color = "#ff6a6a";
    })
    contrast_hover[i].addEventListener("pointerout", function() {
        this.style.color = "white";
    })
}




window.addEventListener("scroll", function(event) {
    if (document.querySelector("body").scrollTop > 100) {
        nav.classList.add("nav_scroll");
    } else {
        nav.classList.remove("nav_scroll");
    }
    if (document.querySelector("body").scrollTop > 400) {
        scroll_up.style.display = "block";
        scroll_up.addEventListener("click", function() {
            document.querySelector("body").scrollTop = 0;
        })
    } else {
        scroll_up.style.display = "none";
    }
})
color_icon.addEventListener("pointerover", function() {
    console.log("hover olundu");
})


color_icon.addEventListener("click", function() {
    if (document.querySelector(".color_selector").style.left != "0px") {
        document.querySelector(".color_selector").style.left = "0px";
    } else {
        document.querySelector(".color_selector").style.left = "-167px";

    }
})

peach.addEventListener("click", function() {
    scroll_up.addEventListener("pointerover", function() {
        console.log("dur get");
        scroll_up.style.backgroundColor = "#ff6a6a";

    })
    scroll_up.addEventListener("pointerout", function() {
        scroll_up.style.backgroundColor = "#a9a9a9";
    })

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#ff6a6a") {
            contrast[i].style.color = "#ff6a6a";

            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#ff6a6a";

                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }


    }

})
green.addEventListener("click", function() {

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#9bb70d") {
            contrast[i].style.color = "#9bb70d";
            scroll_up.addEventListener("pointerover", function() {
                scroll_up.style.backgroundColor = "#9bb70d";

            })
            scroll_up.addEventListener("pointerout", function() {
                scroll_up.style.backgroundColor = "#a9a9a9";
            })
            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#9bb70d";
                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }

    }

})
purple.addEventListener("click", function() {

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#9b59b6") {
            contrast[i].style.color = "#9b59b6";
            scroll_up.addEventListener("pointerover", function() {
                scroll_up.style.backgroundColor = "#9b59b6";

            })
            scroll_up.addEventListener("pointerout", function() {
                scroll_up.style.backgroundColor = "#a9a9a9";
            })
            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#9b59b6";
                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }

    }

})
blue.addEventListener("click", function() {

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#0088cc") {
            contrast[i].style.color = "#0088cc";
            scroll_up.addEventListener("pointerover", function() {
                scroll_up.style.backgroundColor = "#0088cc";

            })
            scroll_up.addEventListener("pointerout", function() {
                scroll_up.style.backgroundColor = "#a9a9a9";
            })

            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#0088cc";
                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }

    }

})
scroll_up.addEventListener("pointerover", function() {
    scroll_up.classList.add("default_back");
})
scroll_up.addEventListener("pointerout", function() {
    scroll_up.classList.remove("default_back");
})

orange.addEventListener("click", function() {

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#ffa500") {
            contrast[i].style.color = "#ffa500";

            scroll_up.addEventListener("pointerover", function() {
                scroll_up.style.backgroundColor = "#ffa500";

            })
            scroll_up.addEventListener("pointerout", function() {
                scroll_up.style.backgroundColor = "#a9a9a9";
            })

            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#ffa500";
                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }

    }

})
red.addEventListener("click", function() {

    for (var i = 0; i < contrast.length; i++) {
        if (contrast[i].style.color != "#dc143c") {
            contrast[i].style.color = "#dc143c";
            scroll_up.addEventListener("pointerover", function() {
                scroll_up.style.backgroundColor = "#dc143c";

            })
            scroll_up.addEventListener("pointerout", function() {
                scroll_up.style.backgroundColor = "#a9a9a9";
            })

            for (var i = 0; i < contrast_hover.length; i++) {
                contrast_hover[i].addEventListener("pointerover", function() {
                    this.style.color = "#dc143c";
                })
                contrast_hover[i].addEventListener("pointerout", function() {
                    this.style.color = "white";
                })
            }
        }

    }

})