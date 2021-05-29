// 하트 모양 아이콘 클릭 시 하트가 채워지면서 찜 아이템에 추가
// document.querySelectorAll('.zzimBtn').forEach((el) => {
//     el.addEventListener('click', function () {
//         try {
//             await axios.post('/main', { item_id });
//             getZzim();
//           } catch (err) {
//             console.error(err);
//           }
//         });
//     });

getZzim();

async function getItem() {
    try{
        const res = await axios.get('/prefer/main');

        const box = document.querySelector('.item');
        const item = document.createElement('div');

        console.log(item);

        box.appendChild(item);

    } catch (err) {
        console.error(err);
    }
}

async function getZzim() {
    try {
        const res = await axios.get('/prefer/zzim');
        // console.log(json(zzims));
        const box = document.querySelector('#zzimBox');
        const item = document.createElement('div');
        
        console.log(box);
        console.log(item);

        box.appendChild(item);

    } catch (err) {
        console.error(err);
    }
}

function zzimBtnFill() {
    var heart = document.querySelectorAll('#heart');
    console.log(heart);
    heart[1].setAttribute("src", "/images/icon/zzim_fill.png");
}
