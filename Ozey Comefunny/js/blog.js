function Blog (link, date, title, detail) {
  this.link = link;
  this.date = date;
  this.title = title;
  this.detail = detail;
}

var oct = new Blog('url(../images/blank.png)', '19/Oct/2020', '이미지에 대한 설명 기재...', '가나다라마바사');
var sep = new Blog('url(../images/blank.png)', '07/Sep/2020', '회사의 발전을 위해 사람들은 우리가 열심히...', '가나다라마바사');
var aug = new Blog('url(../images/blank.png)', '03/Aug/2020', '회사 창립하고 첫 출근은 마시자 마시자 술이...', '가나다라마바사');
var jul = new Blog('url(../images/blank.png)', '01/Jul/2020', '회사 창립!! 드디어 친구들과 머리를 모아 회사...', '가나다라마바사');
var url = '"../images/blank.png"';

var blogList = [oct, sep, aug, jul];


for(var i = 0; i < blogList.length; i++) {
  document.write("<div class='blog-article'>")
  document.write("<img src="+url+">" +"</img><br>");
  document.write("<h2>" + blogList[i].date + "</h2>");
  document.write("<h3>" + blogList[i].title + "</h3><br><br>");
  // document.write("<p>" + blogList[i].detail + "</p><br>");
  document.write("</div>")
}




// // 로그인
// var userId = document.querySelector("#id");
// var pw = document.querySelector("#password");
// var jeremy = "b2win";
// var answer = "gooddeveloper";
// var login = document.querySelector("#detail");
// var url = "index-logout.html";


// login.addEventListener("click", function() {
//   if(userId.value != jeremy) {
//     alert("존재하지 않는 아이디입니다. 다시 입력해주세요.")
//     userId.value = "";
//     userId.focus();
//   } else if (pw.value != answer) {
//     alert("비밀번호가 다릅니다. 다시 입력해주세요.")
//     pw.value = "";
//     pw.focus();
//     } else {
//       alert("로그인 성공");
//       location.href = url;
//     }
//   });
