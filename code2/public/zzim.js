
getZzim();

async function getZzim() {
    try {
        const res = await axios.get('/prefer/zzim');
        // console.log(json(zzims));
        const box = document.querySelector('#zzimBox');
        const item = document.createElement('div');
        
        // console.log(box);
        // console.log(item);

        box.appendChild(item);

    } catch (err) {
        console.error(err);
    }
}

$(".deleteBtn").click(function () {
    clicked = true;
    if (clicked) {
        console.log(this)
        try{
            const parent = $(this).parent();
            const child = parent.children();
            const child2 = child.children();
            const fig = child2.children();

            // console.log(parent); // div#wrap
            // console.log(child); // figure.item, .deleteBtn
            // console.log(child2); // 0: img 1: figcaption 2: a 3: svg#delete
            // console.log(fig); // 0: h3#id 1: h3 2: p 3: span.hidden(아이템 아이디) 4: path
            
            const id = fig[0].textContent;
            const brand = fig[1].textContent;
            const title = fig[2].textContent;
            const item_id = fig[3].textContent;
            const item_url = child2[2].textContent;
            const img = child2[0].src;

            console.log("id: "+id);
            console.log("브랜드: "+brand);
            console.log("타이틀: "+title);
            console.log("아이템 아이디: "+item_id);
            console.log("아이템 url: "+item_url);
            console.log("이미지 url: "+img);


            $.ajax({  
                type: "DELETE" ,
                url: "/users/zzim",
                data: {
                    item_id: item_id, 
               }
               ,success:function(data){
                console.log("성공");
                alert("성공"); //alert 안됨
               }
               ,error:function(data){
                console.log("실패");
                alert("실패"); //alert 안됨
               }
                });

            alert("성공");
            location.reload();

        } catch(err) {
            console.error(err);
        }
    //   $(this).toggleClass('active');
    //   clicked = true;
    // } else {
    //   $(this).removeClass('active');
    //   clicked = false;
    // }
}});
