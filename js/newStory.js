const textarea__title = document.querySelector("#textarea__title");
const textarea__subtitle = document.querySelector("#textarea__subtitle");
const textarea__content = document.querySelector("#textarea__content");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.disabled = true;

function goBack() {
  window.history.back();
}

const verifyNewStory = () => {
  if (!localStorage.getItem("currentEmail")) {
    window.location.assign("../index.html");
  }
};

const enableLoginButton = () => {
  if (
    textarea__title.value.length !== 0 &&
    textarea__subtitle.value.length !== 0 &&
    textarea__content.value.length !== 0
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

$("#submitBtn").click(function () {
  var title = $("#textarea__title").val();
  var subtitle = $("#textarea__subtitle").val();
  var content = $("#textarea__content").val();
  var id_user_channel = localStorage.getItem("idUserAdminToShow");
  var id_super = localStorage.getItem("idUserSuperToShow");
  if (id_user_channel != null) {
    var go_to = "adminProfile.html";
    publicArticle(id_user_channel, title, subtitle, content, go_to);
  } else if (id_super != null) {
    var go_to = "superUserProfile.html";
    publicArticle(id_super, title, subtitle, content, go_to);
  } else {
    var go_to = "profile.html";
    var id_user_reporter = localStorage.getItem("idUserToShow");
    publicArticle(id_user_reporter, title, subtitle, content, go_to);
  }
});
function publicArticle(id_user, title, subtitle, content, go_to) {
  $.ajax({
    url: "../php/mysqlInsertArticle.php",
    type: "POST",
    data: { id: id_user, title: title, subtitle: subtitle, content: content },
    dataType: "jsonp",
    jsonp: "jsoncallback",

    success: function (data) {
      window.location.href = go_to;
    },
    error: function () {
      alert("Ocurrió un error en la conexión, inténtalo más tarde");
    },
  });
}
