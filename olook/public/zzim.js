// 하트 모양 아이콘 클릭 시 하트가 채워지면서 찜 아이템에 추가
document.querySelectorAll('.zzimBtn').forEach((el) => {
    el.addEventListener('click', function () {
        const id = el.querySelector('td').textContent;
        getZzim(id);
        });
    });

async function getZzim() {
    try {
        const res = await axios.get('/main');
        const items = res.data;
        console.log(items);
    } catch(err) {
        console.error(err);
    }
}

// let jjim = false
// button.addEventListener("click", () => {
// if (jjim) {
// //찜 됐을 때 코드
// jjim = false
// else {
// //찜 취소할 때 코드
// jjim = true
// }}