profileSubtitle = document.querySelector("#profileSubtitle");
profileReportersSubtitle = document.querySelector("#profileReportersSubtitle");
profileIncomes = document.querySelectorAll("#profileIncomes");
profileNewStoryBtn = document.querySelector("#profileNewStoryBtn");
profileStoryEmojis = document.querySelectorAll(".stories__emoji");
profileRequestsBtn = document.querySelector("#profileRequestsBtn");
profileLogoutBtn = document.querySelector("#profileLogoutBtn");

function logout() {
  localStorage.clear();
}

function goBack() {
  window.history.back();
}

const verifyProfile = () => {
  if (!localStorage.getItem("currentEmail")) {
    profileSubtitle.innerHTML = "Sus historias";
    profileReportersSubtitle.innerHTML = "Las de sus reporteros";
    profileNewStoryBtn.style.display = "none";
    profileRequestsBtn.style.display = "none";
    profileLogoutBtn.style.display = "none";
    for (let income = 0; income < profileIncomes.length; income++) {
      profileIncomes[income].style.display = "none";
    }
    for (let emoji = 0; emoji < profileStoryEmojis.length; emoji++) {
      profileStoryEmojis[emoji].style.display = "none";
    }
  }
};
function showArticle(title) {
  setCookie("currentArticle", title, 1);
  window.location.href = "article.html";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
$("#search-form").submit(function () {
  var toSearch = $("#searching").val();
  localStorage.setItem("searching", toSearch);
});

$(document).ready(function () {
  var id = localStorage.getItem("idUserAdminToShow");
  $.ajax({
    url: "../php/mysqlSelectAdminProfile.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      if (info[1] == "Success") {
        var divInfo = $("#profile-info");
        var mt4 =
          '<div class="mt-4 ml-3 mr-3 d-flex flex-row" id="mt-4"></div>';
        divInfo.append(mt4);
        mt4 = $("#mt-4");
        var h1 = '<h1 class="pr-1" id="user-name">' + info[0]["name"] + "</h1>";
        mt4.append(h1);
        var h6 = "<h6>Admin</h6>";
        mt4.append(h6);
        var h6_mail = '<h6 class="ml-4 mb-3">' + info[0]["email"] + "</h6>";
        divInfo.append(h6_mail);
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});

$(document).ready(function () {
  var id = localStorage.getItem("idUserAdminToShow");
  $.ajax({
    url: "../php/mysqlLoadMyArticles.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      var container = $("#stories-container");
      container.empty();
      if (info.length > 0) {
        for (let i = 0; i < info.length; i++) {
          var li = '<li id="item' + i + '"></li>';
          container.append(li);
          li = $("#item" + i);
          var dFlexAll =
            '<div id="d-flex-all' +
            i +
            '" class="d-flex justify-content-between align-items-center"></div>';
          li.append(dFlexAll);
          dFlexAll = $("#d-flex-all" + i);
          var divStoryDesc =
            '<div id="story-desc' + i + '"class="stories__description"></div>';
          dFlexAll.append(divStoryDesc);
          divStoryDesc = $("#story-desc" + i);
          var title =
            '<span class="stories__title" onclick="showArticle(\'' +
            info[i]["title"] +
            "')\">" +
            info[i]["title"] +
            "</span>";
          divStoryDesc.append(title);
          var br = "<br>";
          divStoryDesc.append(br);
          var subtitle =
            '<span class="stories__subtitle" onclick="showArticle(\'' +
            info[i]["title"] +
            "')\">" +
            info[i]["subtitle"] +
            "</span>";
          divStoryDesc.append(subtitle);
          var dFlexCol =
            '<div id="d-flex-col' + i + '" class="d-flex flex-column"></div>';
          dFlexAll.append(dFlexCol);
          dFlexCol = $("#d-flex-col" + i);
          var dFlexJust =
            '<div id="d-flex-justify' +
            i +
            '" class="d-flex justify-content-around"></div>';
          dFlexCol.append(dFlexJust);
          dFlexJust = $("#d-flex-justify" + i);
          var g =
            '<span class="stories__emoji" onclick="generateStats(' +
            info[i]["likes"] +
            "," +
            info[i]["id"] +
            ')">📊</span>';
          dFlexJust.append(g);
          var d =
            '<span class="stories__emoji" onclick="delArticle(\'' +
            info[i]["id"] +
            "')\">🚽</span>";
          dFlexJust.append(d);
          var create =
            '<span class="stories__date">' +
            info[i]["creation_date"] +
            "</span>";
          dFlexCol.append(create);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});

const generateStats = (likes, id) => {
  console.log("1");
  var labels = ["likes", "comentarios"];
  var ch = $("#myChart");
  ch.remove();
  var can = $("#canv");
  var element = '<canvas id="myChart" height="210"></canvas>';
  can.append(element);
  var ctx = document.getElementById("myChart").getContext("2d");
  $.ajax({
    url: "../php/mysqlSelectGetStats.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      if (info.length > 0) {
        stats = [likes, info[0]["comments"]];
        config = {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "cantidad",
                data: stats,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: ["rgba(211, 86, 86, 1)", "rgba(50, 204, 71, 1)"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        };

        var myChart = new Chart(ctx, config);
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
};

function delArticle(id) {
  $.ajax({
    url: "../php/mysqlDeleteArticle.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var message = data;
      alert(message);
      window.location.href = "adminProfile.html";
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
$(document).ready(function () {
  var id = localStorage.getItem("idUserAdminToShow");
  localStorage.setItem("myLikes", 0);
  localStorage.setItem("myComments", 0);
  localStorage.setItem("reportersLikes", 0);
  localStorage.setItem("reportersComments", 0);
  countLikes(id, "admin");
});
function countLikes(id, user_type) {
  $.ajax({
    url: "../php/mysqlLoadMyArticles.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      var likes = 0;
      if (info.length > 0) {
        for (let i = 0; i < info.length; i++) {
          likes += parseInt(info[i]["likes"], 10);
        }
        if (user_type == "admin") {
          localStorage.setItem("myLikes", likes);
          countComments(id, "admin");
        } else if (user_type == "reporter") {
          var repoLikes = parseInt(localStorage.getItem("reportersLikes"), 10);
          repoLikes += likes;
          localStorage.setItem("reportersLikes", repoLikes);
          countComments(id, "reporter");
        }
      } else {
        if (user_type == "admin") {
          countComments(id, "admin");
        } else if (user_type == "reporter") {
          countComments(id, "reporter");
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
function countComments(id, user_type) {
  $.ajax({
    url: "../php/mysqlSelectAllUserComments.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      var comments = 0;
      if (info.length > 0) {
        for (let i = 0; i < info.length; i++) {
          comments += parseInt(info[i]["comments"], 10);
        }
        if (user_type == "admin") {
          localStorage.setItem("myComments", comments);
          getReportersStats();
        } else if (user_type == "reporter") {
          var repoCom = parseInt(localStorage.getItem("reportersComments"), 10);
          repoCom += comments;
          localStorage.setItem("reportersComments", repoCom);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
function getReportersStats() {
  var id = localStorage.getItem("idUserAdminToShow");
  $.ajax({
    url: "../php/mysqlSelectReporters.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var reporters = data;
      if (reporters.length > 0) {
        for (let i = 0; i < reporters.length; i++) {
          countLikes(reporters[i]["id"], "reporter");
        }
        summarize();
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
function summarize() {
  var myLikes = parseInt(localStorage.getItem("myLikes"), 10);
  var myComments = parseInt(localStorage.getItem("myComments"), 10);
  myLikes = myLikes * 4;
  myComments = myComments * 2;
  setTimeout(function () {
    var myRepoLikes = parseInt(localStorage.getItem("reportersLikes"), 10);
    var myRepoCom = parseInt(localStorage.getItem("reportersComments"), 10);
    myRepoLikes = myRepoLikes * 4 * 0.6;
    myRepoCom = myRepoCom * 2 * 0.6;
    total = myLikes + myComments + myRepoCom + myRepoLikes;
    mine = myLikes + myComments;
    repo = myRepoLikes + myRepoCom;
    total = Math.round(total * 100) / 100;
    mine = Math.round(mine * 100) / 100;
    repo = Math.round(repo * 100) / 100;
    var pTotal = $("#profileIncomes");
    var sTotal = '<span class="profile__profit">$' + total + "</span>";
    pTotal.append(sTotal);
    var pMine = $("#profileIncomesMine");
    var sMine = '<span class="profile__profit">$' + mine + "</span>";
    pMine.append(sMine);
    var pRepo = $("#profileIncomesReporters");
    var sRepo = '<span class="profile__profit">$' + repo + "</span>";
    pRepo.append(sRepo);
    localStorage.removeItem("myComments");
    localStorage.removeItem("myLikes");
    localStorage.removeItem("reportersComments");
    localStorage.removeItem("reportersLikes");
  }, 1500);
}
$(document).ready(function () {
  var id = localStorage.getItem("idUserAdminToShow");
  $.ajax({
    url: "../php/mysqlSelectReporters.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var reporters = data;
      if (reporters.length > 0) {
        localStorage.setItem("totalReportersArticles", 0);
        for (let i = 0; i < reporters.length; i++) {
          loadReportersArticles(reporters[i]["id"]);
        }
        setTimeout(function () {
          var count = parseInt(
            localStorage.getItem("totalReportersArticles"),
            10
          );
          $("#profileReportersSubtitle").text(
            "Las de tus reporteros (" + count + ")"
          );
          localStorage.removeItem("totalReportersArticles");
        }, 1500);
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});
function loadReportersArticles(id) {
  $.ajax({
    url: "../php/mysqlLoadMyArticles.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var articles = data;
      if (articles.length > 0) {
        var container = $("#reporters-stories-container");
        for (let i = 0; i < articles.length; i++) {
          var count = parseInt(
            localStorage.getItem("totalReportersArticles"),
            10
          );
          count++;
          localStorage.setItem("totalReportersArticles", count);
          var li = '<li id="reporter-' + id + "-storie-" + i + '"></li>';
          container.append(li);
          li = $("#reporter-" + id + "-storie-" + i);
          var dflex =
            '<div id="dflex-' +
            id +
            "-" +
            i +
            '" class="d-flex justify-content-between align-items-center"></div>';
          li.append(dflex);
          dflex = $("#dflex-" + id + "-" + i);
          var divdesc =
            '<div id="story-desc-' +
            id +
            "-" +
            i +
            '" class="stories__description" onclick="showArticle(\'' +
            articles[i]["title"] +
            "')\"></div>";
          dflex.append(divdesc);
          divdesc = $("#story-desc-" + id + "-" + i);
          var title =
            '<span class="stories__title">' + articles[i]["title"] + "</span>";
          divdesc.append(title);
          var br = "<br>";
          divdesc.append(br);
          var subtitle =
            '<span class="stories__subtitle">' +
            articles[i]["subtitle"] +
            "</span>";
          divdesc.append(subtitle);
          divdesc.append(br);
          var rep =
            '<span class="stories__subtitle">Por: ' +
            articles[i]["name"] +
            "</span>";
          divdesc.append(rep);
          var dflexcol =
            '<div id="d-flex-' +
            id +
            "-" +
            i +
            '" class="d-flex flex-column"></div>';
          dflex.append(dflexcol);
          dflexcol = $("#d-flex-" + id + "-" + i);
          dflexjust =
            '<div id="d-flex-just-' +
            id +
            "-" +
            i +
            '" class="d-flex justify-content-around"></div>';
          dflexcol.append(dflexjust);
          dflexjust = $("#d-flex-just-" + id + "-" + i);
          var g =
            '<span class="stories__emoji" onclick="generateStats(' +
            articles[i]["likes"] +
            "," +
            articles[i]["id"] +
            ')">📊</span>';
          dflexjust.append(g);
          var d =
            '<span class="stories__emoji" onclick="delArticle(\'' +
            articles[i]["id"] +
            "')\">🚽</span>";
          dflexjust.append(d);
          var create =
            '<span class="stories__date">' +
            articles[i]["creation_date"] +
            "</span>";
          dflexcol.append(create);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
$(document).ready(function () {
  var id = localStorage.getItem("idUserAdminToShow");
  $.ajax({
    url: "../php/mysqlSelectRequests.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var requests = data;
      if (requests.length > 0) {
        $("#all-requests").text("(" + requests.length + ")");
        var ul = $("#request-list");
        for (let i = 0; i < requests.length; i++) {
          var li = '<li id="request-' + i + '"></li>';
          ul.append(li);
          li = $("#request-" + i);
          var dflexreq =
            '<div id="d-flex-req-' +
            i +
            '" class="d-flex flex-row justify-content-between"></div>';
          li.append(dflexreq);
          dflexreq = $("#d-flex-req-" + i);
          var aprofile =
            '<a id="a-to-profile-' +
            i +
            '" class="profile__admins-requests-reporter" href="profileFromAdmin.html" onclick="goToProfile(\'' +
            requests[i]["id_user_reporter"] +
            "')\"></a>";
          dflexreq.append(aprofile);
          aprofile = $("#a-to-profile-" + i);
          var name =
            "<span onclick=\"goToProfile('" +
            requests[i]["id_user_reporter"] +
            "')\">" +
            requests[i]["name"] +
            "</span>";
          aprofile.append(name);
          var dflexbtns =
            '<div id="d-flex-btns-' + i + '" class="d-flex flex-row"></div>';
          dflexreq.append(dflexbtns);
          dflexbtns = $("#d-flex-btns-" + i);
          var acepta =
            '<a id="refresh-acept-' +
            i +
            '" href="adminProfile.html" onclick="acceptRequest(\'' +
            requests[i]["id"] +
            "','" +
            requests[i]["id_user_reporter"] +
            "','" +
            id +
            "')\"></a>";
          dflexbtns.append(acepta);
          acepta = $("#refresh-acept-" + i);
          var spanAcept =
            '<span class="profile__admins-requests-acept mr-3">Aceptar</span';
          acepta.append(spanAcept);
          var avoid =
            '<a id="refresh-avoid-' +
            i +
            '" href="adminProfile.html" onclick="refuseRequest(\'' +
            requests[i]["id"] +
            "')\"></a>";
          dflexbtns.append(avoid);
          avoid = $("#refresh-avoid-" + i);
          var spanAvoid =
            '<span class="profile__admins-requests-reject">Rechazar</span>';
          avoid.append(spanAvoid);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});

function goToProfile(id) {
  localStorage.setItem("idUserToShow", id);
  window.location.href = "profile.html";
}
function acceptRequest(id_req, id_user, id_admin) {
  //alert("req: "+id_req+" user: "+id_user+" admin: "+id_admin);
  $.ajax({
    url: "../php/mysqlUpdateAcceptRequest.php",
    type: "POST",
    data: { id_req: id_req, id_user: id_user, id_admin: id_admin },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var message = data;
      alert(message);
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
function refuseRequest(id) {
  $.ajax({
    url: "../php/mysqlDeleteRequest.php",
    type: "POST",
    data: { id: id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var message = data;
      alert(message);
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
