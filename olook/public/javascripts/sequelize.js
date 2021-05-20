
window.onload = function() {
  document.getElementById('content').addEventListener('submit', async (e) => {
    const color = document.forms['signUp'].elements['color'].value;
    const style = document.forms['signUp'].elements['style'].value;
    const brand = document.forms['signUp'].elements['brand'].brandName;
    const price = document.forms['signUp'].elements['price'].value;

    try {
      await axios.post('/user', { color, style, brand, price });
      getUser();
    } catch (err) {
      console.error(err);
    }
  });
}