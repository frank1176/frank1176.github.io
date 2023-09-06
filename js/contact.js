var day;
var i;
var mon;

for (day = 1; day <= 31; day++) {
  document.getElementById("day").innerHTML +=
    "<option value" + day + ">" + day + "</option>";
}

mon = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
for (i = 0; i <= mon.length - 1; i++) {
  document.getElementById("month").innerHTML +=
    "<option value" + i + ">" + mon[i] + "</option>";
}

for (i = 1900; i <= 2020; i++) {
  document.getElementById("year").innerHTML +=
    "<option value" + i + ">" + i + "</option>";
}

$(document).ready(function () {
  $("#Male").click(function () {
    $("label[for='Male']").css({ color: "#0033ff" });
    $("label[for='Female']").css({ color: "" });
  });
  $("#Female").click(function () {
    $("label[for='Female']").css({ color: "#0033ff" });
    $("label[for='Male']").css({ color: "" });
  });

  $("form").submit(function () {
    var check = false;
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var day = $("#day").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var text = $("#message1").val();
    if (name == "") {
      $("#error1").text("Please write your name").addClass("problem");
      check = true;
    } else {
      $("#error1").text("").removeClass("problem");
    }
    if (phone == "") {
      $("#error2").text("Please write your phone numeber").addClass("problem");
      check = true;
    } else {
      $("#error2").text("").removeClass("problem");
    }
    if (email == "") {
      $("#error3").text("Please write your email").addClass("problem");
      check = true;
    } else if (!reg.test(email)) {
      $("#error3").text("Email format wrong").addClass("problem");
      check = true;
    } else {
      $("#error3").text("").removeClass("problem");
    }

    if (day == "0" || month == "0" || year == "0") {
      $("#error4").text("Date of Birth is required").addClass("problem");
      check = true;
    } else {
      $("#error4").text("").removeClass("problem");
    }

    if (!$("input[name=radio1]:checked").val()) {
      $("#error5").text("At least choose one").addClass("problem");
      check = true;
    } else {
      $("#error5").text("").removeClass("problem");
    }
    if (text == "") {
      $("#error6").text("Please fill something ").addClass("problem");
      check = true;
    } else {
      $("#error6").text("").removeClass("problem");
    }

    if (check) {
      return false;
    } else {
      return true;
    }
  });
});
