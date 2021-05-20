
window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {
    const color = document.forms['signUp'].elements['color'].value;
    const style = document.forms['signUp'].elements['style'].value;
    const brand = document.forms['signUp'].elements['brand'].brandName;
    const price = document.forms['signUp'].elements['price'].value;
    if (!color) {
      return alert('컬러를 선택해주세요');
    }
    if (!style) {
      return alert('스타일을 선택해주세요');
    }
    if (!brand) {
      return alert('브랜드를 입력해주세요');
    }
    if (!price) {
      return alert('가격대를 선택해주세요');
    }
    try {
      await axios.post('/user', { color, style, brand, price });
      // getUser();
    } catch (err) {
      console.error(err);
    }
  });
}