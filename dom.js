// // console.dir(document);


// // headerTitle = document.getElementById('big-div')
// // console.log(headerTitle);
// // headerTitle.innerText = 'francis'

// GETELEMENT BY CLASS NAME // 

// var items = document.getElementsByClassName('hullo')
// console.log(items[2])

// // items[3].style.backgroundColor = 'pink'


// //gives  error 
// // items.style.backgroundColor = '#F4F4F4'


// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENT BY TAG NAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].backgroundColor = 'yellow'

// //gives  error 
// // items.style.backgroundColor = '#F4F4F4'


// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERY SELECTOR  //

// query selectors work like jquery the only big difference is it is used only
//on onw items if you wanna use it for more than one item the you use queryselectorAll

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px yellow'
// header.style.borderRadius = '20px'
// header.style.padding = '10px'

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.hullo');
// item.style.color = 'red'
// item.style.fontSize = '23px'

// var lastItem = document.querySelector('.hullo:last-child')
// lastItem.style.color = 'blue'
// lastItem.style.fontSize = '23px'

// var secondItem = document.querySelector('.hullo:nth-child(3)')
// secondItem.style.color = 'yellow'
// secondItem.style.fontSize = '23px'

// var thirdItem = document.querySelector('.hullo:nth-child(4)')
// thirdItem.style.color = 'purple'
// thirdItem.style.fontSize = '23px'

// QUERYSELECTORALL // 

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello Francis'

var odd = document.querySelectorAll('li:nth-child(odd)')
var even= document.querySelectorAll('li:nth-child(even)')


for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'red';
    even[i].style.backgroundColor = 'yellow';
}



