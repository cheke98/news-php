function goBack() {
  window.history.back();
}

const verifyArticle = () => {
  if (!localStorage.getItem("currentEmail")) {
    document.querySelector("#commentBox").style.display = "none";
  }
};

var articleId = "";
$(document).ready(function () {
  $.ajax({
    url: "../php/mysqlSelectLoadArticle.php",
    type: "POST",
    data: { Option: 1 },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var article = data;
      if (article.length > 0) {
        for (let i = 0; i < 1; i++) {
          articleId = article[i]["id"];
          var article_body = $("#article-body");
          var col5 = '<div class="col-5" id="col-5"></div>';
          article_body.append(col5);
          col5 = $("#col-5");
          var title = '<h1 class="mt-2">' + article[i]["title"] + "</h1>";
          col5.append(title);
          var subtitle = "<p>" + article[i]["subtitle"] + "</p>";
          col5.append(subtitle);
          var img =
            '<img src="' + article[i]["img_src"] + '" width="100%" alt="" />';
          col5.append(img);
          var divFlex =
            '<div class="d-flex justify-content-between" id="div-flex"></div>';
          col5.append(divFlex);
          divFlex = $("#div-flex");
          var divOwners = '<div id="owners"></div>';
          divFlex.append(divOwners);
          divOwners = $("#owners");
          var reporter =
            '<span class="article__author-admin" onclick=goToProfile(\''+article[i]['id_user_reporter']+'\')>' +
            article[i]["reporter"] +
            "</span>";
          divOwners.append(reporter);
          var space = "<span> - </span>";
          divOwners.append(space);
          var channel = "<span>" + article[i]["channel"] + "</span>";
          divOwners.append(channel);
          var divLike =
            '<div class="d-flex align-items-center" id="div-likes"></div>';
          divFlex.append(divLike);
          divLike = $("#div-likes");
          var likes =
            '<span class="pr-1 font-weight-bold">' +
            article[i]["likes"] +
            " </span>";
          divLike.append(likes);
          var likeImg =
            '<img src="../assets/img/like.png" width="15px" alt="like" />';
          divLike.append(likeImg);
          var creation = "<span>" + article[i]["creation_date"] + "</span>";
          divFlex.append(creation);
          var col7 = '<div class="col-7" id="col-7"></div>';
          article_body.append(col7);
          col7 = $("#col-7");
          var content =
            '<div class="article__text" id="article-text">' +
            article[i]["content"] +
            "</div>";
          col7.append(content);
          var currentEmail = localStorage.getItem("currentEmail");
          var divLowButtons = $("#div-low-buttons");
          verifyUserType();
          
          setTimeout(function(){
            var user_type = localStorage.getItem("user_type");
              if (
            currentEmail == article[i]["email_reporter"] ||
            currentEmail == article[i]["email_channel"] ||
            user_type == "superuser"
          ) {
                var article_button =
              '<a href="" class="display-4 article__button"id="article-button" data-name="delete"></a>';
            divLowButtons.append(article_button);
            article_button = $("#article-button");
            var img =
              '<img class="article__interaction-img" src="../assets/img/trash.png" alt="" width="50px" srcset=""/>';
            article_button.append(img);
            
          } else {
            var article_button =
              '<a href="article.html" class="display-4 article__button"id="article-button" data-name="like"></a>';
            divLowButtons.append(article_button);
            article_button = $("#article-button");
            var img =
              '<img class="article__interaction-img" src="../assets/img/clap.svg" alt="" width="50px" srcset=""/>';
            article_button.append(img);
          }
          var comment_modal =
            '<a href="" data-toggle="modal" data-target="#commentsModal" class="display-4 article__button" id="comment-modal"></a>';
          divLowButtons.append(comment_modal);
          comment_modal = $("#comment-modal");
          var img2 =
            '<img class="article__interaction-img" src="../assets/img/comment.svg" width="50px" alt="" srcset=""/>';
          comment_modal.append(img2);
          },500);
          
          //localStorage.removeItem("user_type");
        }
      }
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});
$(document).ready(function () {
  $(document).on("click", "#article-button", function (e) {
    var toExecute = $(this).attr("data-name");
    switch (toExecute) {
      case "like":
        if (!localStorage.getItem("currentEmail")) {
          alert("Debes iniciar sesión si deseas dejar tu like😀");
        } else {
          $.ajax({
            url: "../php/mysqlUpdateLikeArticle.php",
            type: "POST",
            data: { id: articleId },
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function (data) {
              window.location.href = "article.html";
            },
            error: function () {
              alert("Ocurrio un error en la conexion");
            },
          });
        }
        break;
      case "delete":
        $.ajax({
          url: "../php/mysqlDeleteArticle.php",
          type: "POST",
          data: { id: articleId },
          dataType: "jsonp",
          jsonp: "jsoncallback",

          success: function (data) {
            var message = data;
            alert(message);
            window.location.href = "../index.html";
          },
          error: function () {
            alert("Ocurrio un error en la conexion");
          },
        });
        break;
    }
    return false;
  });
});

$(document).ready(function () {
  $(document).on("click", "#comment-modal", function (e) {
    $.ajax({
      url: "../php/mysqlSelectLoadComments.php",
      type: "POST",
      data: { id: articleId },
      dataType: "jsonp",
      jsonp: "jsoncallback",

      success: function (data) {
        var comments = data;
        if (comments.length > 0) {
          var divComments = $("#comments");
          divComments.empty();
          for (let i = 0; i < comments.length; i++) {
            var li =
              "<li>" +
              comments[i]["by"] +
              ": " +
              comments[i]["content"] +
              "</li>";
            divComments.append(li);
          }
        }
      },
      error: function () {
        alert("Ocurrio un error en la conexion");
      },
    });
    return false;
  });
});

$("#sendCommentBtn").click(function () {
  var comment = $("#commentToSend").val();
  var currentEmail = localStorage.getItem("currentEmail");
  $.ajax({
    url: "../php/mysqlInsertComment.php",
    type: "POST",
    data: { comment: comment, email: currentEmail, articleId: articleId },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      window.location.href = "article.html";
    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
});

$("#search-form").submit(function () {
  var toSearch = $("#searching").val();
  localStorage.setItem("searching", toSearch);
});
function goToProfile(id){
  localStorage.setItem("idUserToShow",id);
}
function verifyUserType(){
  var email = localStorage.getItem("currentEmail");
if(email!=null){
  $.ajax({
    url: "../php/mysqlSelectUserType.php",
    type: "POST",
    data: { email: email },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      var user_type = data;
     if(user_type=="superuser"){
        localStorage.setItem("user_type","superuser");
      }

    },
    error: function () {
      alert("Ocurrio un error en la conexion");
    },
  });
}
}