var currentTab = 0; // 현재 탭=0
showTab(currentTab); // 현재 탭 보이기

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //마지막 탭에만 완료 버튼 나타나도록
  if (0 <= n < (x.length -1)) {
    document.getElementById("join").style.display="none"
    //index 색상 변경
    if(n==1) {
      document.getElementById("pc_info").style.background = "rgb(50,50,50)";
      document.getElementById("pc_info").style.color = "white";
    }
    if(n==2) {
      document.getElementById("ps_info").style.background = "rgb(50,50,50)";
      document.getElementById("ps_info").style.color = "white";
    }
    if(n==3) {
      document.getElementById("pb_info").style.background = "rgb(50,50,50)";
      document.getElementById("pb_info").style.color = "white";
    }
    if(n==4) {
      document.getElementById("pr_info").style.background = "rgb(50,50,50)";
      document.getElementById("pr_info").style.color = "white";
    }

  }
  //첫번째 탭이면 prevBtn 나타나지 않음
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("profile_info").style.background = "rgb(50,50,50)";
    document.getElementById("profile_info").style.color = "white";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  //마지막 탭이면 nextBtn 나타나지 않음
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display="none";   
    document.getElementById("pr_info").style.background= "rgb(50,50,50)";
    document.getElementById("pr_info").style.color = "white";
    document.getElementById("join").style.display="inline"
  } else {
    document.getElementById("nextBtn").style.backgroundColor = "none";
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  // 탭 숨김
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  showTab(currentTab);
}

// 폼 입력 확인
function validateForm() {
  var x, y, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
      return alert('폼을 입력해주세요!')
    }
  }
  return valid;
}



window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {

    const user_gender = e.target.user_gender.value;
    const job_title = e.target.job_title.value;
    const user_age = e.target.user_age.value;
    const user_height = e.target.user_height.value;
    const user_weight = e.target.user_weight.value;

    //length
    var color_length = document.getElementsByName("color").length;
    var style_length = document.getElementsByName("style").length;
    
    var price_length = document.getElementsByName("price").length;

    //선택된 값 가져오기
    var prefer_brand = document.getElementById('brand').value; //브랜드 이름
    
    for (var i=0; i<color_length; i++) {
        if (document.getElementsByName("color")[i].checked == true) {
            prefer_color = document.getElementsByName("color")[i].value;
        }
      }

    for (var i=0; i<style_length; i++) {
        if (document.getElementsByName("style")[i].checked == true) {
            prefer_style = document.getElementsByName("style")[i].value;
        }
      }
  
    for (var i=0; i<price_length; i++) {
          if (document.getElementsByName("price")[i].checked == true) {
              price_range = document.getElementsByName("price")[i].value;
          }
      }

    try {
      await axios.post('/users', { user_gender, job_title, user_age, user_height, user_weight, prefer_color, prefer_style, prefer_brand, price_range });
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.prefer_color = '';
    e.target.prefer_style = '';
    e.target.prefer_brand = '';
    e.target.price_range = '';
  });
  
}