// 사용자 등록 시

window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {
      e.preventDefault();
      const color = e.target.color.value;
      const style = e.target.style.value;
      const brand = e.target.brand.value;
      const price = e.target.price.value;

      if (!color) {
        return alert('컬러를 선택하세요');
      }
      if (!style) {
        return alert('스타일을 선택하세요');
      }
      if (!brand) {
        return alert('브랜드를 입력하세요');
      }
      if (!price) {
        return alert('가격대를 선택하세요');
      }
      try {
        await axios.post('/user', { color, style, brand, price });
        getUser();
      } catch (err) {
        console.error(err);
      }
      e.target.color.value = '';
      e.target.style.value = '';
      e.target.brand.value = '';
      e.target.price.value = '';
    });
}