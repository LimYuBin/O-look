
getZzim();

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
