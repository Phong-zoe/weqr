
function changescolor(color,d)
    {
       console.log(d);
       if(d.style.color != "red")
         {
             d.style.color = "red";
         }
        else
         d.style.color = "grey";

    }

 function changeBackGround(content, element)
 {


        const btn = document.getElementsByClassName('home-filter__btn ');
        const asd =document.getElementById('home-filter2');
        const asd1 =document.getElementById('home-filter');
     console.log(content)
       for ( var i = 0 ; i < btn.length ; i++)
       {
            btn[i].style.background = '#fff';
            btn[i].style.color = '#000';
       }

        element.style.background = '#f53e2d'
        element.style.color = '#fff'
      switch (content) {
        case 'phobien':
            document.getElementById('container1').style.display= 'block';
            document.getElementById('container2').style.display= 'none';
            document.getElementById('container').style.display= 'none';
            break;
        case 'new':
            document.getElementById('container').style.display= 'block';
            document.getElementById('container2').style.display= 'none';
            document.getElementById('container1').style.display= 'none';
            break;

        case 'bestsale':
            document.getElementById('container2').style.display= 'block';
            document.getElementById('container').style.display= 'none';
            document.getElementById('container1').style.display= 'none';
            break;
      
      }
 }
// slide
document.getElementById('next').onclick = function(){ // khi người dùng click vào nut next
   const widthItem = document.getElementById("container-product").offsetWidth + 10;
   console.log(widthItem);
// var widthItem=document.querySelector('.container-product').offsetWidth;
   document.getElementById("listall").scrollLeft += widthItem *2;
}
document.getElementById('prev').onclick = function(){ // khi người dùng click vào nut next
    const widthItem = document.getElementById("container-product").offsetWidth + 10;
// var widthItem=document.querySelector('.container-product').offsetWidth;
   document.getElementById("listall").scrollLeft -= widthItem * 2 ;
}

// var widthItem=document.querySelector('.container-product').offsetWidth;
// console.log(widthItem);