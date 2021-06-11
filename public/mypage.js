var color = document.querySelector("#color_select")
var style = document.querySelector('#style_select');
var brand = document.querySelector('#brand_search');
var price = document.querySelector('#pricepick');

console.log(color, style);

function toColor() {
    style.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    color.className = 'tab-pane fade show active'
}

function toStyle() {
    color.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    style.className = 'tab-pane fade show active'
}

function toBrand() {
    style.className = 'tab-pane fade'
    color.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    brand.className = 'tab-pane fade show active'
}

function toPrice() {
    style.className = 'tab-pane fade'
    color.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'

    price.className = 'tab-pane fade show active'
}
window.onload = function() {
    document.getElementById('content').addEventListener('submit', async (e) => {
    console.log('click');
    alert('정말 수정하시겠습니까?');
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
    await axios.post('/users/modify', { user_gender, job_title, user_age, user_height, user_weight, prefer_color, prefer_style, prefer_brand, price_range }).then(function (result) {
        if(result.data) {
            location.href = '/prefer/main';
            alert('수정했습니다.')
        } else {
            alert('오류');
        }

    });

    // try {
    //     alert('수정');
    //     await axios.post('/users/modify', { user_gender, job_title, user_age, user_height, user_weight, prefer_color, prefer_style, prefer_brand, price_range });
    //     getUser();
    // } catch (err) {
    //     alert('오류');
    //     console.error(err);
    // }
    e.target.prefer_color = '';
    e.target.prefer_style = '';
    e.target.prefer_brand = '';
    e.target.price_range = '';
});
    
  }

  function checkOnlyOne(element) {
  
    const checkboxes 
        = document.getElementsByName("color");
    
    checkboxes.forEach((el) => {
      el.checked = false;
    })
    
    element.checked = true;
  }