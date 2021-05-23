
var currentTab = 0; // 현재 탭=0
showTab(currentTab); // 현재 탭 보이기

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //마지막 탭에만 완료 버튼 나타나도록
  if (0 <= n < (x.length -1)) {
    document.getElementById("join").style.display="none"
  }
  //첫번째 탭이면 prevBtn 나타나지 않음
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  //마지막 탭이면 nextBtn 나타나지 않음
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display="none";
    document.getElementById("join").style.display="inline"
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  // 현재 보이는 탭
  var x = document.getElementsByClassName("tab");
  // 탭 숨기기
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  showTab(currentTab);
}


window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {

    const user_gender = e.target.user_gender.value;
    const job_title = e.target.job_title.value;
    const user_age = e.target.user_age.value;
    const user_height = e.target.user_height.value;
    const user_weight = e.target.user_weight.value;

    if (!user_gender) {
      return alert('성별을 입력하세요');
    }
    if (!job_title) {
      return alert('직업을 선택하세요');
    }
    if (!user_age) {
      return alert('나이를 입력하세요');
    }
    if (!user_height) {
      return alert('키를 입력하세요');
    }
    if (!user_weight) {
      return alert('몸무게를 입력하세요');
    }

    //입력 여부
    //1. 컬러
    var isColorChk = false;
    var arr_Color = document.getElementsByName("color");
    for(var i=0;i<arr_Color.length;i++){
        if(arr_Color[i].checked == true) {
            isColorChk = true;
            break;
        }
    }
    if(!isColorChk){
      alert("컬러를 한개 이상 선택해주세요.");
      return false;
  }

  //2. 스타일
    var isStyleChk = false;
    var arr_Style = document.getElementsByName("style");
    for(var i=0;i<arr_Style.length;i++){
        if(arr_Style[i].checked == true) {
            isStyleChk = true;
            break;
        }
    }
    if(!isStyleChk){
      alert("스타일을 하나 선택해주세요.");
      return false;
    }
    
  //3. 브랜드
    var brandCheck = e.target.brand.value;
    if (!brandCheck) {
      return alert('브랜드 이름을 입력해주세요');
    }
  
  //4. 가격
    var isPriceChk = false;
    var arr_Price = document.getElementsByName("price");
    for(var i=0;i<arr_Price.length;i++){
        if(arr_Price[i].checked == true) {
            isPriceChk = true;
            break;
        }
    }
    if(!isPriceChk){
      alert("가격대를 하나 선택해주세요.");
      return false;
    }    


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

