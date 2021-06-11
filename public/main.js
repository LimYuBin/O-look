async function getItem() {
  try{
      const res = await axios.get('/prefer/main');

      const box = document.querySelector('.item');
      const div = document.createElement('div');

      console.log(div);

      box.appendChild(div);

  } catch (err) {
      console.error(err);
  }
}



$(".zzimBtn").click(function () {
  clicked = true;
  if (clicked) {
      console.log(this) // <button class="zzimBtn active">
      try{
          const parent = $(this).parent();
          const child = parent.children();
          const child2 = child.children();
          const fig = child2.children();

          // console.log(parent); // div#wrap
          // console.log(child); // div.item, .zzimBtn
          // console.log(child2); // 0: img 1: figcaption 2: a 3: svg#heart
          // console.log(fig); // 0: h3#id 1: h3 2: p 3: p 4: span 5: path
          
          const id = fig[0].textContent;
          const brand = fig[1].textContent;
          const title = fig[2].textContent;
          const item_id = fig[4].textContent;
          const item_url = child2[2].textContent;
          const img = child2[0].src;

          console.log("id: "+id);
          console.log("브랜드: "+brand);
          console.log("타이틀: "+title);
          console.log("아이템 아이디: "+item_id);
          console.log("아이템 url: "+item_url);
          console.log("이미지 url: "+img);


          $.ajax({  
              type: "POST" ,
              url: "/users/main",
              data: {
                  id: id,
                  item_id: item_id,
                  img: img,
                  title: title,
                  brand: brand,
                  item_url: item_url,  
             }
             ,success:function(data){
               alert("찜 목록에 추가되었습니다!");
             }
             ,error:function(data){
               alert("이미 찜 목록에 존재하는 아이템 입니다!");
             }
             });

          $(this).attr("disabled", true);

      } catch(err) {
          console.error(err);
      }
    $(this).toggleClass('active');
    clicked = true;
  } else {
    $(this).removeClass('active');
    clicked = false;
  }
});