const loginEmail = document.querySelector("#loginEmail");
const loginPwd = document.querySelector("#loginPwd");
const loginBtn = document.querySelector("#loginBtn");
const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPwd = document.querySelector("#signUpPwd");
const signUpUserType = document.querySelector("#signUpUserType");
const registerBtn = document.querySelector("#registerBtn");

registerBtn.disabled = true;
loginBtn.disabled = true;
navOpened = false;

function showArticle(title) {
  setCookie("currentArticle", title, 1);
  window.location.href = "html/article.html";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function hideButtonsOnAdminLogin() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("signupButton").style.display = "none";
  document.getElementById("profileButton").style.display = "none";
  document.getElementById("superUserProfileButton").style.display = "none";
  document.getElementById("adminProfileButton").style.display = "block";
  document.getElementById("newStoryButton").style.display = "block";
  document.getElementById("logoutButton").style.display = "block";
  document.getElementById("profileSmall").style.display = "block";
}

function hideButtonsOnSuperUserLogin() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("signupButton").style.display = "none";
  document.getElementById("profileButton").style.display = "none";
  document.getElementById("adminProfileButton").style.display = "none";
  document.getElementById("superUserProfileButton").style.display = "block";
  document.getElementById("newStoryButton").style.display = "block";
  document.getElementById("logoutButton").style.display = "block";
  document.getElementById("profileSmall").style.display = "block";
}

function hideButtonsOnReporterLogin() {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("signupButton").style.display = "none";
  document.getElementById("adminProfileButton").style.display = "none";
  document.getElementById("superUserProfileButton").style.display = "none";
  document.getElementById("profileButton").style.display = "block";
  document.getElementById("newStoryButton").style.display = "block";
  document.getElementById("logoutButton").style.display = "block";
  document.getElementById("profileSmall").style.display = "block";
}

function toggleNav() {
  if (!navOpened) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "210px";
  document.getElementById("main").style.color = "white";
  document.getElementById("header__text").style.color = "black";
  document.getElementById("card").style.color = "black";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  navOpened = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.color = "black";
  document.body.style.backgroundColor = "white";
  navOpened = false;
}

function logout() {
  localStorage.clear();
  localStorage.setItem("userLogged", "false");
  document.getElementById("loginButton").style.display = "block";
  document.getElementById("signupButton").style.display = "block";
  document.getElementById("profileButton").style.display = "none";
  document.getElementById("newStoryButton").style.display = "none";
  document.getElementById("logoutButton").style.display = "none";
  document.getElementById("profileSmall").style.display = "none";
  document.getElementById("adminProfileButton").style.display = "none";
}

const replaceNumbersAndSpecialChars = () => {
  signUpName.value = signUpName.value.replace(/[0123456789[@$<>*]/g, "");
  enableRegisterButton();
};

const enableLoginButton = () => {
  if (loginEmail.value.length !== 0 && loginPwd.value.length >= 6) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
};

const enableRegisterButton = () => {
  if (
    signUpEmail.value.length > 5 &&
    signUpPwd.value.length >= 6 &&
    signUpName.value.length > 0 &&
    signUpUserType.value != "escoge"
  ) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
  }
};

$("#registerBtn").click(function () {
  var name = $("#signUpName").val();
  var email = $("#signUpEmail").val();
  var user_type = $("#signUpUserType").val();
  var pwd = $("#signUpPwd").val();
  $.ajax({
    url: "php/mysqlSignUp.php",
    type: "POST",
    data: { name: name, email: email, pwd: pwd, user_type: user_type },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      alert("Usuario registrado con éxito.");
    },
    error: function (data) {
      var state = data;
      alert(state[1]);
    },
  });
});
$("#loginBtn").click(function () {
  var email = $("#loginEmail").val();
  var pwd = $("#loginPwd").val();
  $.ajax({
    url: "php/mysqlSignIn.php",
    type: "POST",
    data: { email: email, pwd: pwd },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var state = data;
      if (state[1] == "Success") {
        localStorage.setItem("currentEmail", email);
        localStorage.setItem("currentUser", state[0]["name"]);
        localStorage.setItem("userLogged", "true");
        if (state[0]["user_type"] == "reporter") {
          hideButtonsOnReporterLogin();
          localStorage.setItem("idUserToShow", state[0]["id"]);
        } else if (state[0]["user_type"] == "admin") {
          localStorage.setItem("idUserAdminToShow", state[0]["id"]);
          hideButtonsOnAdminLogin();
        } else if (state[0]["user_type"] == "superuser") {
          localStorage.setItem("idUserSuperToShow", state[0]["id"]);
          hideButtonsOnSuperUserLogin();
        }
        $("#profileSmall").text("Bienvenido, " + state[0]["name"]);
      } else {
        alert("Credenciales incorrectas.");
      }
    },
    error: function (data) {
      alert("Credenciales incorrectas.");
    },
  });
});
$(document).ready(function () {
  $.ajax({
    url: "php/mysqlSelectTrendingNews.php",
    type: "POST",
    data: { Option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var trending = data;
      if (trending.length > 0) {
        for (let i = 0; i < trending.length; i++) {
          if (i == 0) {
            //obtenemos el div de trending
            var divTrend = $("#firstTrend");
            divTrend.replaceWith(
              $(
                '<div class="container trending" id="firstTrend" onclick="showArticle(\'' +
                  trending[i]["title"] +
                  "')\"></div>"
              )
            );
            divTrend = $("#firstTrend");
            var img =
              '<img src="' + trending[i]["img_src"] + '" width="100%" alt=""/>';
            divTrend.append(img);
            var title = '<h3 class="mt-2">' + trending[i]["title"] + "</h3>";
            divTrend.append(title);
            var subtitle = "<p>" + trending[i]["subtitle"] + "</p>";
            divTrend.append(subtitle);
            var reporter =
              "<small>" + trending[i]["name"] + "&nbsp; - &nbsp;</small>";
            divTrend.append(reporter);
            var likes = "<small>" + trending[i]["likes"] + " </small>";
            divTrend.append(likes);
            var heart =
              '<img src="./assets/img/like.png" width="13px" alt="like" />';
            divTrend.append(heart);
          } else {
            //ahora obtendremos el div del carrusel
            var divOtherTrend = $("#otherTrend");
            var carrusel =
              '<div class="my-carousel-item" id="carrusel' + i + '"></div>';
            divOtherTrend.append(carrusel);
            carrusel = $("#carrusel" + i);
            var img =
              '<img class="my-carousel-item__img" src="' +
              trending[i]["img_src"] +
              '" alt="Cat"/>';
            carrusel.append(img);
            var carrusel_det =
              '<div class="my-carousel-item__details" id="carrusel_det' +
              i +
              '" onclick="showArticle(\'' +
              trending[i]["title"] +
              "')\"></div>";
            carrusel.append(carrusel_det);
            carrusel_det = $("#carrusel_det" + i);
            var title =
              '<p class="my-carousel-item__details--title">' +
              trending[i]["title"] +
              "</p";
            carrusel_det.append(title);
            var divFlex =
              '<div class="d-flex flex-row text-white align-items-center" id="divFlex' +
              i +
              '">';
            carrusel_det.append(divFlex);
            divFlex = $("#divFlex" + i);
            var reporter =
              '<p class="my-carousel-item__details--subtitle">' +
              trending[i]["name"] +
              "</p>";
            divFlex.append(reporter);
            var likes =
              '<span class="ml-2 mr-1 font-weight-bold">' +
              trending[i]["likes"] +
              " likes</span>";
            divFlex.append(likes);
          }
        }
      }
    },
    error: function () {
      alert("Ocurrió un error en la conexión");
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "php/mysqlSelectLatestNews.php",
    type: "POST",
    data: { Option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var trending = data;
      if (trending.length > 0) {
        for (let i = 0; i < trending.length; i++) {
          //ahora obtendremos el div del carrusel
          var divOtherTrend = $("#latestNews");
          var carrusel =
            '<div class="my-carousel-item" id="carrusel_latest' +
            i +
            '"></div>';
          divOtherTrend.append(carrusel);
          carrusel = $("#carrusel_latest" + i);
          var img =
            '<img class="my-carousel-item__img" src="' +
            trending[i]["img_src"] +
            '" alt="Cat"/>';
          carrusel.append(img);
          var carrusel_det =
            '<div class="my-carousel-item__details" id="carrusel_det_latest' +
            i +
            '" onclick="showArticle(\'' +
            trending[i]["title"] +
            "')\"></div>";
          carrusel.append(carrusel_det);
          carrusel_det = $("#carrusel_det_latest" + i);
          var title =
            '<div class="my-carousel-item__details--wrapper"> <p class="my-carousel-item__details--title">' +
            trending[i]["title"] +
            "</p> </div>";
          carrusel_det.append(title);
          var divFlex =
            '<div class="d-flex flex-row text-white align-items-center" id="divFlex_latest' +
            i +
            '">';
          carrusel_det.append(divFlex);
          divFlex = $("#divFlex_latest" + i);
          var reporter =
            '<p class="my-carousel-item__details--subtitle">' +
            trending[i]["name"] +
            "</p>";
          divFlex.append(reporter);
          var likes =
            '<span class="ml-2 mr-1 font-weight-bold">' +
            trending[i]["likes"] +
            " likes</span>";
          divFlex.append(likes);
        }
      }
      loadSuggestions();
    },
    error: function () {
      alert("Ocurrió un error en la conexión");
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "php/mysqlSelectWantedNews.php",
    type: "POST",
    data: { Option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var wanted = data;
      if (wanted.length > 0) {
        for (let i = 0; i < wanted.length; i++) {
          var list = $("#list-group");
          var li = '<li class="list-group-item" id="li' + i + '"> </li>';
          list.append(li);
          li = $("#li" + i);
          var a =
            '<a href="html/article.html" onclick="showArticle(\'' +
            wanted[i]["title"] +
            "')\">" +
            wanted[i]["title"] +
            "</a>";
          li.append(a);
        }
      }
    },
    error: function () {
      alert("Ocurrió un error en la conexión");
    },
  });
});
$("#search-form").submit(function () {
  var toSearch = $("#searching").val();
  localStorage.setItem("searching", toSearch);
});
function loadSuggestions() {
  $.ajax({
    url: "php/mysqlSelectNewsSuggested.php",
    type: "POST",
    data: { option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var suggestions = data;
      if (suggestions.length > 0) {
        var mt4 = $("#mt-4");
        var h4 = "<h4>Sugerencia del superusuario:</h4>";
        mt4.append(h4);
        var p =
          '<p class="editors-pick" onclick="showArticle(\'' +
          suggestions[0]["title"] +
          "')\">" +
          suggestions[0]["title"] +
          "</p>";
        mt4.append(p);
      }
    },
    error: function () {
      alert("Ocurrió un error en la conexión");
    },
  });
}
$(document).ready(function () {
  let isLogged = localStorage.getItem("userLogged");
  if (isLogged == "true") {
    let name = localStorage.getItem("currentUser");
    $("#profileSmall").text("Bienvenido, " + name);
  }
});
$(document).ready(function () {
  var email = localStorage.getItem("currentEmail");
  if (email != null) {
    $.ajax({
      url: "php/mysqlSelectUserType.php",
      type: "POST",
      data: { email: email },
      dataType: "jsonp",
      jsonp: "jsoncallback",

      success: function (data) {
        var user_type = data;
        if (user_type == "reporter") {
          hideButtonsOnReporterLogin();
        } else if (user_type == "admin") {
          hideButtonsOnAdminLogin();
        } else if (user_type == "superuser") {
          hideButtonsOnSuperUserLogin();
        }
      },
      error: function () {
        alert("Ocurrió un error en la conexión");
      },
    });
  }
});
