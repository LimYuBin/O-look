
window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {
    console.log('submit');
    const color = e.target.color;
    const style = e.target.style;
    const brand = e.target.brand;
    const price = e.target.price;
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
      await axios.post('/users', { color, style, brand, price });
    } catch (err) {
      console.error(err);
    }
  });
}
