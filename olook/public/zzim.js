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

async function getZzim() {
    try {
        const res = await axios.get('/zzim');
        // console.log(json(zzims));
        const box = document.querySelector('#zzimBox');
        const item = document.createElement('div');

        console.log(item);

        box.appendChild(item);

    } catch (err) {
        console.error(err);
    }
}

function zzimBtnFill() {
    var heart = document.getElementById('heart');
    heart.setAttribute("src", "images/icon/zzim_fill.png");
}

// url = 'https://example.com/'
// a(href=url) Another link

// $(".hover").mouseleave(
//     function () {
//       $(this).removeClass("hover");
//     }
//   );