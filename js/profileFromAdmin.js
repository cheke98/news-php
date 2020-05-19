profileSubtitle = document.querySelector("#profileSubtitle");
profileIncomes = document.querySelector("#profileIncomes");
profileNewStoryBtn = document.querySelector("#profileNewStoryBtn");
profileStoryEmojis = document.querySelectorAll(".stories__emoji");
profileSearchAdminsBtn = document.querySelector("#profileSearchAdminsBtn");
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
    profileIncomes.style.display = "none";
    profileNewStoryBtn.style.display = "none";
    profileSearchAdminsBtn.style.display = "none";
    profileLogoutBtn.style.display = "none";
    for (let emoji = 0; emoji < profileStoryEmojis.length; emoji++) {
      profileStoryEmojis[emoji].style.display = "none";
    }
  }
};

$("#search-form").submit(function () {
  var toSearch = $("#searching").val();
  localStorage.setItem("searching", toSearch);
});

$(document).ready(function(){
var id=localStorage.getItem("idUserToShow");
$.ajax({
    url: "../php/mysqlLoadMyArticles.php",
    type: "POST",
    data: { id:id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data; 
      var container = $("#stories-container");
      container.empty();
      if(info.length>0){
        for(let i=0;i<info.length;i++){
          var li = '<li id="item'+i+'"></li>';
          container.append(li);
          li = $("#item"+i);
          var dFlexAll = '<div id="d-flex-all'+i+'" class="d-flex justify-content-between align-items-center"></div>';
          li.append(dFlexAll);
          dFlexAll = $("#d-flex-all"+i);
          var divStoryDesc = '<div id="story-desc'+i+'"class="stories__description"></div>';
          dFlexAll.append(divStoryDesc);
          divStoryDesc = $("#story-desc"+i);
          var title = '<span class="stories__title" onclick="showArticle(\''+info[i]['title']+'\')">'+info[i]['title']+'</span>';
          divStoryDesc.append(title);
          var br = '<br>';
          divStoryDesc.append(br);
          var subtitle = '<span class="stories__subtitle" onclick="showArticle(\''+info[i]['title']+'\')">'+info[i]['subtitle']+'</span>';
          divStoryDesc.append(subtitle);
          var dFlexCol = '<div id="d-flex-col'+i+'" class="d-flex flex-column"></div>';
          dFlexAll.append(dFlexCol);
          dFlexCol = $("#d-flex-col"+i);
          var dFlexJust = '<div id="d-flex-justify'+i+'" class="d-flex justify-content-around"></div>';
          dFlexCol.append(dFlexJust);
          dFlexJust = $("#d-flex-justify"+i);
          var g = '<span class="stories__emoji" onclick="generateStats('+info[i]['likes']+','+info[i]['id']+')">📊</span>';
          dFlexJust.append(g);
          var create = '<span class="stories__date">'+info[i]['creation_date']+'</span>';
          dFlexCol.append(create);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});
const generateStats = (likes,id) => {
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
    data: { id:id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data; 
      if(info.length>0){
        stats = [likes,info[0]['comments']];
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

$(document).ready(function(){
  var id=localStorage.getItem("idUserToShow");
$.ajax({
    url: "../php/mysqlLoadMyArticles.php",
    type: "POST",
    data: { id:id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data; 
      var likes=0;
      if(info.length>0){
        for(let i=0;i<info.length;i++){
          likes+= parseInt(info[i]['likes'],10);
        }
        summarize(likes);
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});

function summarize(likes){
  var id=localStorage.getItem("idUserToShow");
  $.ajax({
    url: "../php/mysqlSelectAllUserComments.php",
    type: "POST",
    data: { id:id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data; 
      var comments = 0;
      if(info.length>0){
        for(let i=0;i<info.length;i++){
          comments+= parseInt(info[i]['comments'],10);
        }
        //como es usuario normal, el gana el 40%
        sublike = likes * 4;
        subcomment = comments * 2;
        totalUser = (sublike+subcomment) * .4;
        var divIncomes = $("#profileIncomes");
        var a = '<span class="profile__profit">$'+totalUser+'</span>';
        divIncomes.append(a);
    }
  },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });    
}

$(document).ready(function(){
var id=localStorage.getItem("idUserToShow");
$.ajax({
    url: "../php/mysqlSelectProfile.php",
    type: "POST",
    data: { id:id },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var info = data;
      if(info[1]=="Success"){
        if(info[0]['user_channel']=="Freelance"){
          //document.getElementById("profileSearchAdminsBtn").style.display = "block";
          var divInfo = $("#profile-info");
          var mt4 = '<div class="mt-4 ml-3 mr-3 d-flex flex-row" id="mt-4"></div>';
          divInfo.append(mt4);
          mt4 = $("#mt-4");
          var h1 = '<h1 class="pr-1" id="user-name">'+info[0]['user_reporter']+'</h1>'; 
          mt4.append(h1);
          var h6 = '<h6>'+info[0]['user_channel']+'</h6>';
          mt4.append(h6);
          var h6_mail = '<h6 class="ml-4 mb-3">'+info[0]['email']+'</h6>';
          divInfo.append(h6_mail);
        }else if(info[0]['user_channel']!="Freelance"){
          document.getElementById("profileSearchAdminsBtn").style.display = "none";
          var divInfo = $("#profile-info");
          var mt4 = '<div class="mt-4 ml-3 mr-3 d-flex flex-row" id="mt-4"></div>';
          divInfo.append(mt4);
          mt4 = $("#mt-4");
          var h1 = '<h1 class="pr-1" id="user-name">'+info[0]['user_reporter']+' - </h1>'; 
          mt4.append(h1);
          var h1_admin = '<h1>'+info[0]['user_channel']+'</h1>';
          mt4.append(h1_admin);
          var h6_mail = '<h6 class="ml-4 mb-3">'+info[0]['email']+'</h6>';
          divInfo.append(h6_mail);
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
})
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
