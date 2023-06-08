let body = document.querySelector(".body");
let chossenSkill = document.querySelector(".circleOn");
let htmlSkill = document.querySelector(".html");
let css = document.querySelector(".css")
let js = document.querySelector(".js")
let figma = document.querySelector(".figma")
let git = document.querySelector(".git")
let sass = document.querySelector(".sass")
let levlSkill = document.querySelector(".levlSkill")
let factSkill1 = document.querySelector(".factSkill1")
let factSkill2 = document.querySelector(".factSkill2")
let factSkill3 = document.querySelector(".factSkill3")
let factSkill4 = document.querySelector(".factSkill4")
let factText1 = document.querySelector(".factText1")
let factText2 = document.querySelector(".factText2")
let factText3 = document.querySelector(".factText3")
let factText4 = document.querySelector(".factText4")

let arrowScroll = document.querySelector(".scrollUp");
window.addEventListener('scroll', function() {
        if (window.pageYOffset < 400) {
            arrowScroll.style.opacity = "0"
        } else {
            arrowScroll.style.opacity = "1"
            arrowScroll.addEventListener('click', function() {
                window.scrollTo(0, 0)
            })
        }
    })
    // let textEmail = document.querySelector(".textEmail")
    // let textMesssage = document.querySelector(".textMessage")
    // let buttonContact = document.querySelector(".button-contact")
    // let valueEmail = textEmail.innerText
    // let valueMesssage = textMesssage.innerText;
    // buttonContact.addEventListener('click', function() {
    //     alert(valueEmail)
    // })

// if (valueEmail < 3 && valueMesssage < 3) {
//     buttonContact.style.backgroundColor = "red"
// } else {
//     buttonContact.style.backgroundColor = "green"
// }

let email = document.querySelector(".inputs-contact")
let squares = document.querySelectorAll(".square-contact")
let pointsCat1 = document.querySelector(".points-cat1")
let pointsCat2 = document.querySelector(".points-cat2")

email.addEventListener('mouseover', function() {
    for (let square of squares) {
        square.style.transform = "rotate(0deg)"
    }
    pointsCat1.style.opacity = "1"
    pointsCat2.style.opacity = "0"
})
email.addEventListener('mouseout', function() {
    for (let square of squares) {
        square.style.transform = "rotate(90deg)"
    }
    pointsCat1.style.opacity = "0"
    pointsCat2.style.opacity = "1"
})

let arrow1 = document.querySelector(".symbol-arrow1")
let arrow2 = document.querySelector(".symbol-arrow2")
arrow1.addEventListener('mouseover', function() {
    arrow1.style.margin = "0px 0px 0px 0px";
})
arrow1.addEventListener('mouseout', function() {
    arrow1.style.margin = "0px 0px 0px 5px";
})
arrow2.addEventListener('mouseover', function() {
    arrow2.style.margin = "0px 0px 0px 0px";
})
arrow2.addEventListener('mouseout', function() {
    arrow2.style.margin = "0px 5px 0px 0px";
})

htmlSkill.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(60deg)"
    chossenSkill.style.backgroundColor = "#ff4c1e"
    chossenSkill.style.boxShadow = "0 0 5px #ff4c1e, 0 0 25px #ff4c1e, 0 0 50px #ff4c1e, 0 0 200px #ff4c1e"
    chossenSkill.style.webkitTextStrokeColor = "#ff4c1e"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: normal"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-60deg)"
    factSkill1.classList.add("factSkillHTML")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "I have been working with him for 4 years."
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillHTML")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "Have experience in website marking"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillHTML")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = "Competently lay out the marking"
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillHTML")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = "I can work with html through JavaScript"
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
htmlSkill.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillHTML")
    factSkill1.classList.add("factSkill1")
    factSkill1.style.color = "rgba(0,0,0,0)"
    factSkill2.classList.remove("factSkillHTML")
    factSkill2.classList.add("factSkill2")
    factSkill2.style.color = "rgba(0,0,0,0)"
    factSkill3.classList.remove("factSkillHTML")
    factSkill3.classList.add("factSkill3")
    factSkill3.style.color = "rgba(0,0,0,0)"
    factSkill4.classList.remove("factSkillHTML")
    factSkill4.classList.add("factSkill4")
    factSkill4.style.color = "rgba(0,0,0,0)"

})
js.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(95deg)"
    chossenSkill.style.backgroundColor = "#f48131"
    chossenSkill.style.boxShadow = "0 0 5px #f48131, 0 0 25px #f48131, 0 0 50px #f48131, 0 0 200px #f48131"
    chossenSkill.style.webkitTextStrokeColor = "#f48131"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: good"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-95deg)"
    factSkill1.classList.add("factSkillJS")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "I have been working with him for less than a year"
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillJS")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "I can work with html through JavaScript"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillJS")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = "I partly know how to write in jQuery"
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillJS")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = "Basically, I only know basic JS"
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
js.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillJS")
    factSkill1.classList.add("factSkill1")
    factSkill2.classList.remove("factSkillJS")
    factSkill2.classList.add("factSkill2")
    factSkill3.classList.remove("factSkillJS")
    factSkill3.classList.add("factSkill3")
    factSkill4.classList.remove("factSkillJS")
    factSkill4.classList.add("factSkill4")

})
css.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(130deg)"
    chossenSkill.style.backgroundColor = "#004ce8"
    chossenSkill.style.boxShadow = "0 0 5px #004ce8, 0 0 25px #004ce8, 0 0 50px #004ce8, 0 0 200px #004ce8"
    chossenSkill.style.webkitTextStrokeColor = "#004ce8"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: nice"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-130deg)"
    factSkill1.classList.add("factSkillCSS")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "I wrote on it before switching to Visual Studio Code"
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillCSS")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "I have knowledge of most properties"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillCSS")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = "I know a lot of design solutions"
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillCSS")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = "Website design for me is not difficult"
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
css.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillCSS")
    factSkill1.classList.add("factSkill1")
    factSkill2.classList.remove("factSkillCSS")
    factSkill2.classList.add("factSkill2")
    factSkill3.classList.remove("factSkillCSS")
    factSkill3.classList.add("factSkill3")
    factSkill4.classList.remove("factSkillCSS")
    factSkill4.classList.add("factSkill4")

})
git.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(160deg)"
    chossenSkill.style.backgroundColor = "#8d3224"
    chossenSkill.style.boxShadow = "0 0 5px #8d3224, 0 0 25px #8d3224, 0 0 50px #8d3224, 0 0 200px #8d3224"
    chossenSkill.style.webkitTextStrokeColor = "#8d3224"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: normal"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-160deg)"
    factSkill1.classList.add("factSkillGIT")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "I have been working with him for many years"
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillGIT")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "He tested many projects on it"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillGIT")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = ""
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillGIT")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = ""
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
git.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillGIT")
    factSkill1.classList.add("factSkill1")
    factSkill2.classList.remove("factSkillGIT")
    factSkill2.classList.add("factSkill2")
    factSkill3.classList.remove("factSkillGIT")
    factSkill3.classList.add("factSkill3")
    factSkill4.classList.remove("factSkillGIT")
    factSkill4.classList.add("factSkill4")

})
sass.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(190deg)"
    chossenSkill.style.backgroundColor = "#cc6699"
    chossenSkill.style.boxShadow = "0 0 5px #cc6699, 0 0 25px #cc6699, 0 0 50px #cc6699, 0 0 200px #cc6699"
    chossenSkill.style.webkitTextStrokeColor = "#cc6699"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: nice"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-190deg)"
    factSkill1.classList.add("factSkillSASS")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "I have been working with him for 2 years"
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillSASS")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "I understand the syntax"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillSASS")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = "I know how to use in mixins"
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillSASS")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = "I know how to use in inclouds"
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
sass.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillSASS")
    factSkill1.classList.add("factSkill1")
    factSkill2.classList.remove("factSkillSASS")
    factSkill2.classList.add("factSkill2")
    factSkill3.classList.remove("factSkillSASS")
    factSkill3.classList.add("factSkill3")
    factSkill4.classList.remove("factSkillSASS")
    factSkill4.classList.add("factSkill4")

})
figma.addEventListener('mouseover', function() {
    chossenSkill.style.transform = "rotate(220deg)"
    chossenSkill.style.backgroundColor = "#00cf7f"
    chossenSkill.style.boxShadow = "0 0 5px #00cf7f, 0 0 25px #00cf7f, 0 0 50px #00cf7f, 0 0 200px #00cf7f"
    chossenSkill.style.webkitTextStrokeColor = "#00cf7f"
    chossenSkill.style.webkitTextStrokeWidth = "1px"
    let htmlSkill = "Skill: base"
    levlSkill.innerHTML = htmlSkill;
    levlSkill.style.transform = "rotate(-220deg)"
    factSkill1.classList.add("factSkillFIGMA")
    factSkill1.classList.remove("factSkill1")
    factText1.innerText = "Engaged only in the creation of the site on the layout"
    factSkill1.style.color = "black"
    factSkill1.style.textAlign = "center"
    factSkill2.classList.add("factSkillFIGMA")
    factSkill2.classList.remove("factSkill2")
    factText2.innerText = "Creating layouts in figma is not engaged"
    factSkill2.style.color = "black"
    factSkill2.style.textAlign = "center"
    factSkill3.classList.add("factSkillFIGMA")
    factSkill3.classList.remove("factSkill3")
    factText3.innerText = "I have been working with her for 3 years"
    factSkill3.style.color = "black"
    factSkill3.style.textAlign = "center"
    factSkill4.classList.add("factSkillFIGMA")
    factSkill4.classList.remove("factSkill4")
    factText4.innerText = "I know how to work with it"
    factSkill4.style.color = "black"
    factSkill4.style.textAlign = "center"
})
figma.addEventListener('mouseout', function() {
    factSkill1.classList.remove("factSkillFIGMA")
    factSkill1.classList.add("factSkill1")
    factSkill2.classList.remove("factSkillFIGMA")
    factSkill2.classList.add("factSkill2")
    factSkill3.classList.remove("factSkillFIGMA")
    factSkill3.classList.add("factSkill3")
    factSkill4.classList.remove("factSkillFIGMA")
    factSkill4.classList.add("factSkill4")

})
let projectIMG = document.querySelector(".projectIMG");
let valueIMG = projectIMG.getAttribute("src")
let arrowBACK = document.querySelector(".arrow1")
let arrowGO = document.querySelector(".arrow2")
let mainText_project = document.querySelector(".main-about-project")
let text_project = document.querySelector(".text-about-project")
let sumProject = 0;
let buttonProject = document.querySelector(".visit-project")

arrowGO.addEventListener('click', function() {
    if (sumProject == 0) {
        projectIMG.setAttribute("src", "img/project2.png")
        sumProject = sumProject + 1;
        mainText_project.innerText = "NEW UKRAINE"
        text_project.innerText = "The website tells about the past, present and future of Ukraine. Who we are today and state symbols"
        buttonProject.setAttribute("href", "https://rudd21.github.io/NewUkraine/");
    } else if (sumProject == 1) {
        projectIMG.setAttribute("src", "img/project3.png")
        sumProject = sumProject + 1;
        mainText_project.innerText = "HELP UKRAINE"
        text_project.innerText = "The site for helping Ukraine expresses what our strength, aspirations and heroes are."
        buttonProject.setAttribute("href", "https://rudd21.github.io/help-Ukraine/");
    } else {
        projectIMG.setAttribute("src", "img/project1.png")
        sumProject = 0;
        mainText_project.innerText = "HEALTH FOOD"
        text_project.innerText = "A site for the sale of healthy dried food. Which company grows itself"
        buttonProject.setAttribute("href", "https://rudd21.github.io/seedraFood/");
    }
})
let catNormal = document.querySelector(".points-cat2")
let catWrite = document.querySelector(".points-cat1")
catNormal.addEventListener('mouseover', function() {
    catNormal.style.opacity = "0";
    catWrite.style.opacity = "1"
})
catNormal.addEventListener('mouseout', function() {
    catNormal.style.opacity = "1";
    catWrite.style.opacity = "0"
})
let themeButton1 = querySelector(".theme-button1");
let themeButton2 = querySelector(".theme-button2");

function
theme1() {
    body.classList.remove("body1")
    body.classList.add("body2")
}

function theme2() {
    body.classList.remove("body2")
    body.classList.add("body1")
}

let textNews = document.querySelectorAll(".text_news");
let hiddens = document.querySelectoraAll(".hidden");

function anim() {
    let textNews1 = document.querySelector(".text_news1");
    let unhidden1 = document.querySelector(".unhidden1");
    unhidden1.classList.remove("hidden")
    textNews1.classList.add("textAI_news")
    unhidden1.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden1.classList.add("hidden")
            unhidden1.classList.remove("vissible")
        })
    }
}

function rebuild() {
    let textNews2 = document.querySelector(".text_news2");
    let unhidden2 = document.querySelector(".unhidden2");
    unhidden2.classList.remove("hidden")
    textNews2.classList.add("textAI_news")
    unhidden2.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden2.classList.add("hidden")
            unhidden2.classList.remove("vissible")
        })
    }
}

function redesign() {
    let textNews3 = document.querySelector(".text_news3");
    let unhidden3 = document.querySelector(".unhidden3");
    unhidden3.classList.remove("hidden")
    textNews3.classList.add("textAI_news")
    unhidden3.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden3.classList.add("hidden")
            unhidden3.classList.remove("vissible")
        })
    }
}

function newButtons() {
    let textNews4 = document.querySelector(".text_news4");
    let unhidden4 = document.querySelector(".unhidden4");
    unhidden4.classList.remove("hidden")
    textNews4.classList.add("textAI_news")
    unhidden4.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden4.classList.add("hidden")
            unhidden4.classList.remove("vissible")
        })
    }
}

function gallery() {
    let textNews5 = document.querySelector(".text_news5");
    let unhidden5 = document.querySelector(".unhidden5");
    unhidden5.classList.remove("hidden")
    textNews5.classList.add("textAI_news")
    unhidden5.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden5.classList.add("hidden")
            unhidden5.classList.remove("vissible")
        })
    }
}

function themes() {
    let textNews6 = document.querySelector(".text_news6");
    let unhidden6 = document.querySelector(".unhidden6");
    unhidden6.classList.remove("hidden")
    textNews6.classList.add("textAI_news")
    unhidden6.classList.add("vissible")
    for (let circlesNew of circlesNews) {
        circlesNew.addEventListener('mouseout', function() {
            unhidden6.classList.add("hidden")
            unhidden6.classList.remove("vissible")
        })
    }
}