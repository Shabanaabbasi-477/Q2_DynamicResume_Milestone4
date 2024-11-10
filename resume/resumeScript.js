"use strict";
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    //-------------------------------------------------------
    let pass1 = localStorage.getItem("pass1");
    ;
    let deg1 = localStorage.getItem("deg1");
    let uni1 = localStorage.getItem("uni1");
    //----------------------------------------------------
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    //  ------------------------------------------------------
    let lang = localStorage.getItem("lang");
    let lang2 = localStorage.getItem("lang2");
    //  ------------------------------------------------------
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let jobtitle = localStorage.getItem("jobtitle");
    //  ------------------------------------------------------
    let achiev1 = localStorage.getItem("achiev1");
    let achiev2 = localStorage.getItem("achiev2");
    let achiev3 = localStorage.getItem("achiev3");
    let picture = localStorage.getItem("profile_pic");
    //----------------------------------------------
    let resName = document.getElementById('resName');
    resName.textContent = name;
    let resDesig = document.getElementById('resDesig');
    resDesig.textContent = desig;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resPass = document.getElementById('resPass');
    resPass.textContent = pass1;
    let resDeg = document.getElementById('resDeg');
    resDeg.textContent = deg1;
    let resIns = document.getElementById('resIns');
    resIns.textContent = uni1;
    let resSk1 = document.getElementById('resSk1');
    resSk1.textContent = skill1;
    let resSk2 = document.getElementById('resSk2');
    resSk2.textContent = skill2;
    let resSk3 = document.getElementById('resSk3');
    resSk3.textContent = skill3;
    let resLang1 = document.getElementById('resLang1');
    resLang1.textContent = lang;
    let resLang2 = document.getElementById('resLang2');
    resLang2.textContent = lang2;
    let resSty = document.getElementById('resSty');
    resSty.textContent = styear;
    let resEndy = document.getElementById('resEndy');
    resEndy.textContent = endyear;
    let resComp = document.getElementById('resComp');
    resComp.textContent = company;
    let resJobT = document.getElementById('resJobT');
    resJobT.textContent = jobtitle;
    let resAchieve1 = document.getElementById('resAchieve1');
    resAchieve1.textContent = achiev1;
    let resAchieve2 = document.getElementById('resAchieve2');
    resAchieve2.textContent = achiev2;
    let resAchieve3 = document.getElementById('resAchieve3');
    resAchieve3.textContent = achiev3;
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
//  ----------------print btn ------------------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
//  ----------------edit btn ------------------
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener('click', () => {
    window.history.back();
});
