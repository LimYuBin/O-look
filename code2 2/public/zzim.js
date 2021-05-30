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

document.querySelectorAll('#heart').forEach((el) => {
    el.addEventListener('click', function () {
        const id = el.parentElement.querySelectorAll('#id').value;
        console.log(id)
        const item_id = el.parentElement.querySelectorAll('#item_id').value;
        const img = el.parentElement.querySelectorAll('#img').value;
        const title = el.parentElement.querySelectorAll('#title').value;
        const brand = el.parentElement.querySelectorAll('#brand').value;
        const item_url = el.parentElement.querySelectorAll('#item_url').value;

        if(el.src == "http://localhost:3000/images/icon/zzim_fill.png") {
            el.setAttribute("src", "/images/icon/zzim.png");
            axios.post('/zzim', { id, item_id, img, title, brand, item_url });
        }
        else {
            el.setAttribute("src", "/images/icon/zzim_fill.png");
            axios.delete('/zzim')
        }
    });
});

