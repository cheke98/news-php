function goBack() {
  window.history.back();
}

$(document).ready(function () {
  var searching = localStorage.getItem("searching");
  $.ajax({
    url: "../php/mysqlSelectSearchingArticle.php",
    type: "POST",
    data: { searching: searching },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var news = data;
      var divResults = $("#div-results");
      var results =
        '<h1 class="display-4">Resultados para ' + searching + ":</h1>";
      divResults.append(results);
      var row = '<div class="row" id="row"></div>';
      divResults.append(row);
      row = $("#row");
      var col6 = '<div class="col-6" id="col-6"></div>';
      row.append(col6);
      col6 = $("#col-6");
      var result_list = '<div class="results__list" id="result-list"></div>';
      col6.append(result_list);
      result_list = $("#result-list");

      if (news.length > 0) {
        for (let i = 0; i < news.length; i++) {
          var div_none =
            '<div id="none' +
            i +
            '" onclick="showArticle(\'' +
            news[i]["title"] +
            "')\"></div>";
          result_list.append(div_none);
          div_none = $("#none" + i);
          var items =
            '<div class="course d-flex align-items-center" id="item' +
            i +
            '"></div>';
          div_none.append(items);
          items = $("#item" + i);
          var div = '<div id="empty' + i + '"></div>';
          items.append(div);
          div = $("#empty" + i);
          var img =
            '<img src="' + news[i]["img_src"] + '" width="200px" alt=""/>';
          div.append(img);
          var course_title =
            '<div class="course__title" id="course-title' + i + '"></div>';
          items.append(course_title);
          course_title = $("#course-title" + i);
          var h5 = "<h5>" + news[i]["title"] + "</h5>";
          course_title.append(h5);
          var h6 = "<h6>" + news[i]["subtitle"] + "</h6>";
          course_title.append(h6);
          var small = "<small>" + news[i]["name"] + "</small>";
          course_title.append(small);
        }
      }
      loadSuggestions();
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});
function loadSuggestions() {
  $.ajax({
    url: "../php/mysqlSelectNewsSuggested.php",
    type: "POST",
    data: { option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var suggestions = data;
      var row = $("#row");
      var col6 = '<div class="col-6" id="col-6-2"></div>';
      row.append(col6);
      col6 = $("#col-6-2");
      var mt4 = '<div class="mt-4" id="mt-4"></div>';
      col6.append(mt4);
      mt4 = $("#mt-4");
      var h2 = "<h2>Sugerencias del superusuario:</h2>";
      mt4.append(h2);
      for (let i = 1; i < suggestions.length; i++) {
        var empty_2 =
          '<div id="empty-2-' +
          i +
          '" onclick="showArticle(\'' +
          suggestions[i]["title"] +
          "')\"></div>";
        mt4.append(empty_2);
        empty_2 = $("#empty-2-" + i);
        var items =
          '<div class="course d-flex align-items-center" id="item-2-' +
          i +
          '"></div>';
        empty_2.append(items);
        items = $("#item-2-" + i);
        var empty_3 = '<div id="empty-3-' + i + '"></div>';
        items.append(empty_3);
        empty_3 = $("#empty-3-" + i);
        var img =
          '<img src="' + suggestions[i]["img_src"] + '" width="250px" alt=""/>';
        empty_3.append(img);
        var course_title =
          '<div class="course__title" id="course-title-2-' + i + '"></div>';
        items.append(course_title);
        course_title = $("#course-title-2-" + i);
        var h3 = "<h3>" + suggestions[i]["title"] + "</h3>";
        course_title.append(h3);
        var h5 = "<h5>" + suggestions[i]["subtitle"] + "</h5>";
        course_title.append(h5);
        var span = "<span>" + suggestions[i]["name"] + "</span>";
        course_title.append(span);
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
function showArticle(title) {
  setCookie("currentArticle", title, 1);
  window.location.href = "./article.html";
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
