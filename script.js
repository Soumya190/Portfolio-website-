let nav = document.body.childNodes[1].children[1];
// console.log(nav.style.backgroundColor = 'red');


nav.onmouseover=()=>{
    nav.style.backgroundColor='#EDD2E0';
}

// nav.addEventListener('scroll',(event)=>{});
// onscroll=(event)=>{
//     nav.style.backgroundcolor='#EDD2E0';
// }

let a =document.querySelector('a');
console.log(a);

a.onmouseover=()=>{
    a.style.color ='red';
}


// a.addEventListener('scroll',(event)=>{})
// onscroll=(event)=>{
//     a.style.color = 'red'; 
// };

let a1 = document.body.childNodes[1].children[1].children[1]

a1.onmouseover=()=>{
    a1.style.color='red';
}

let a2 = document.body.childNodes[1].children[1].children[2];
a2.onmouseover=()=>{
    a2.style.color = 'red';
}

let a3 = document.body.childNodes[1].children[1].children[3]
a3.onmouseover=()=>{
    a3.style.color = 'red';
}

let a4 = document.body.childNodes[1].children[1].children[4]
a4.onmouseover=()=>{
    a4.style.color = 'red';
}

a.addEventListener("scrollend",()=>{
    a.style.color = 'red';
});

h1 = document.querySelector('h1');
console.log(h1);

h1.addEventListener('scroll',(event)=>{})
onscroll = (event) => {
    h1.style.color = '#797B84';
};



// let content2 = document.querySelector('.content2');
// console.log(content2);

// content2.addEventListener('mouseover',()=>{
//     content2.style.backgroundColor='#EDD2E0';
// })