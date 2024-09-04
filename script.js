let text=document.getElementById('text');
let t1=document.getElementById('1');
let t2=document.getElementById('2');
let t3=document.getElementById('3');
// let text=document.getElementById('text');
console.log(text.value);
window.addEventListener("scroll",()=>
{
    let val=window.scrollY;
    console.log(val);
    console.log("Hello World");
    if (val<=132)
        text.style.marginTop=`${val*2.5}px`;
    else
        text.style.marginTop=`${132*2.5}px`
});


function scrollToForm() {
    document.querySelector('#para').scrollIntoView({behavior: 'smooth'});
  }



function scrollToForm() {
    document.querySelector('.list').scrollIntoView({behavior: 'smooth'});
  }

function scrollToForm() {
    document.querySelector('.last').scrollIntoView({behavior: 'smooth'});
  }



function redirectToInputPage() {
  window.location.href = "input.html";}

