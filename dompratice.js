// // getElementById
// var ids = document.getElementById('first')
// console.log('1',ids)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // getElementsByTagName
// var tagname = document.getElementsByTagName('li')
// console.log('2',tagname)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // getElementsByClassName
// var classname = document.getElementsByClassName('bold')
// console.log('3',classname)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // querySelector and types
// var queryselecto = document.querySelector('#myList li:nth-child(1).italic')
// console.log('4',queryselecto)

// var queryselect = document.querySelector('#myList li')
// console.log('5',queryselect)

// var queryselector = document.querySelectorAll('#myList li')
// console.log('6',queryselector)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// changeing text
// var changehtml = document.querySelector('.title')
// changehtml.innerHTML = '<h3>this is writen in javascript</h3>'
// html.forEach(fun = (html)=> html.innerHTML = 'the text is from javascript')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pratice
// var html = document.querySelectorAll('#title')
// function bottom (){
// 	console.log('7',html.childNode)
// 	// document.getElementById('first').innerHTML = ;
// 	// var hicode = document.getElementsByTagName('h1');
// 	// hicode.innerHTML += 'hi'
// }

// function secbuttom () {
// 	if (secound == 1){
// 		console.log('the value is one');
// 		var test = document.getElementsByTagName('h1')
// 		test.innerHTML +=  "<h2>test number one </h2>";
// 	}else{
// 		console.log('the value is not one');
// 		myList.nextElementSibling.querySelector(secound).innerHTML =  "<button>test number one </button>";
// 	}
// const mylist = document.querySelector('#myList');
// mylist.previousElementSibling.querySelector('p').innerHTML +=  "<br/>test number one";

// console.log('book list nextElementSibling',mylist);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nodes
// const banner = document.querySelector('#myList');
// console.log('page mylist node type is:',banner.nodeType);
// console.log('page mylist node name is:',banner.nodeName);
// console.log('page mylist has child nodes is:',banner.hasChildNodes());

// const clondBanner = banner.cloneNode(true);
// console.log(clondBanner);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRAVERSING THE DOM
// const booklist = document.querySelector('#myList');
// console.log('the parent node is:',booklist.parentNode);
// console.log('the parent element is:',booklist.parentElement);
// console.log(booklist.children);
// const booklist = document.querySelector('#myList');
// console.log('book-list next sibling is:',booklist.nextSibling);
// console.log('book-list next element sibling is:',booklist.nextElementSilbling);
// console.log('book-list previous sibling is:',booklist.previousSibling);
// console.log('book-list previous element sibling is:',booklist.previousElementSibling);
// booklist.previousElementSibling.querySelector(' p ').innerHTML += "Paragraph changed!";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENTS
// const bt = document.querySelectorAll('#book-list .delete');
// bt.forEach(function(bt){
// 	bt.addEventListener('click',function(e){
// 		const li = e.target.parentElement;
//         console.log(li,'hi');
// 		li.parentNode.removeChild(li);
// 	})
// })

// const bt = document.querySelector('#book-list ul');
// bt.addEventListener('click' ,function(e){
// 	if(e.target.className == 'delete'){
// 		const li = e.target.parentElement;
// 		li.parentNode.removeChild(li);
// 	}
// 	}); 
 
// var button = document.getElementById("enter");
// button.addEventListener('click',function(){
// 	document.getElementById('demo').innerHTML = 'when you click the button this will print';
// 	console.log('click')
// });

// var button = document.querySelector('#enter');
// button.addEventListener('click',function(){
// 	document.getElementById('demo').innerHTML = 'when you click the button thsi will print';
// 	console.log('click')
// })

// var input = document.getElementById('userInput');
// var button = document.getElementById('enter');
// var ul = document.getElementById('ul');

// button.addEventListener('click',function(){
//     var createnew = document.createElement('li')
// 	var t = document.createTextNode("button")
//     createnew.innerText = input.value;
//     ul.appendChild(createnew , t);
//     input.value = '';
//     createnew.addEventListener('click',function(){
//         createnew.style.textDecoration = 'line-through';
//     })
//     createnew.addEventListener('dblclick',function(){
//         createnew.style.textDecoration = 'none';
//     })
//     createnew.addEventListener('contextmenu',function(){
//         ul.removeChild(createnew);
//     })
// })

// var input = document.getElementById('userInput');
// var button = document.getElementById('enter');
// var ul = document.getElementById('ul');

// button.addEventListener('click',function(){
//     var li = document.createElement('li');
//     var buttom = document.createElement('button');
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = "";
//     console.log(li)
// })

// const deletebtn = document.querySelectorAll('#ul .delete');
// deletebtn.addEventListener('click',function(e){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li)
// });
// const bt = document.querySelector('#book-list ul');
// bt.addEventListener('click' ,function(e){
// 	if(e.target.className == 'delete'){
//         const ul = document.querySelector('ul')
// 		const li = e.target.parentElement;
// 		ul.removeChild(li);
// 	}
// 	}) 
// const btn = document.forms['add-book'];
// btn.addEventListener('submit' ,function(e){
// 	e.preventDefault();
//     const value = btn.querySelector('input[type="text"]').value;
//     const input = document.getElementById('userInput');
//     const li = document.createElement('li');
//     const deleteBtn = document.createElement('button');
//     const bookName = document.createElement('span');
//     const list = document.querySelector('ul')
//     deleteBtn.classList.add('delete')
//     bookName.classList.add('name')
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;
//     input.value = ''; 
//     li.addEventListener('click',function(){
//         li.style.textDecoration = 'line-through';
//     });
//     li.addEventListener('click',function(){
//         li.style.textDecoration = 'line-through';
//     });
// });


// var input = document.getElementById('userInput');
// var button = document.getElementById('enter');
// var ul = document.getElementById('ul');

// button.addEventListener('click',function(e){
//     e.preventDefault();
//     var createnew = document.createElement('li')
// 	var t = document.createTextNode("button")
//     createnew.innerText = input.value;
//     ul.appendChild(createnew , t);
//     input.value = '';
//     createnew.addEventListener('click',function(){
//         createnew.style.textDecoration = 'line-through';
//     })
//     createnew.addEventListener('dblclick',function(){
//         createnew.style.textDecoration = 'none';
//     })
//     createnew.addEventListener('contextmenu',function(){
//         ul.removeChild(createnew);
//     })
// })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Atributes
// var book = document.querySelector('li:first-child span');
// var get =  book.getAttribute('class')
// var put = book.removeAttribute('class')
// var set = book.setAttribute('class','madhus')
// var has = book.hasAttribute('class')
// console.log(has)
// console.log(book)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checkboxes & changeEvents
// const hideBox = document.querySelector('#hide');
// // const list = list1.querySelectorAll('li')
// hideBox.addEventListener('change',function(){
// //     var box = hideBox.checked ? document.getElementById('book-list').style.display = "none" : document.getElementById('book-list').style.display='initial';
//     if(hideBox.checked){
//         document.getElementById('book-list').style.display = "none";
//     }else{
//         document.getElementById('book-list').style.display='initial';
//     }
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Custom Search Filter
// const list = document.querySelector('book-list ul')
// const searchBar = document.forms['search-book'].querySelector('inputid');
// searchBar.addEventListener('keyup',function(e){
//     const term = e.target.value.toLowerCase();
//     const books = list.getElementByTagName('li');
//     Array.from(books).ForEach(function(book){
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(hi)!=-1){
//             book.style.display = 'block';
//         }else{
//             book.style.display = 'none';
//         }
//     });
// });
// the code are getting error I need a time 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',(e) => {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel) => {
            var hi = panel == targetPanel ? panel.classList.add('active') : panel.classList.remove('active')
        });
    }
});























// the complete information have to write on chrome console 
// document.getElementsByTagName('h1');
// it will print the h1 tag
// document.getElementsByClassName('second')

// document.getElementById('first');
// it will print the  contant which is present in that id
 
// document.querySelector('h1');
// we can selecet any tag
// document.querySelectorAll('li');
// it will select the complete li tags.it will work with all 

// document.getAttribute('random'); 
//  with this we can get attribute
// document.setAttribute('random', '100');
// with this we can set any attribute 

// document.querySelector('h1').style.background = 'yellow';
// with this we can change the any thing 

// document.querySelector('li').classList;
// with this we can see the class name 
// document.querySelector('li').classList.add('I')
// it will  add the has a class I.we can remove also by
// document.querySelector('li').classList.remove('I')
// document.querySelector('li').classlist.
// toggle('I');
// it will add the class for one time and
// remove for another time 

// document.querySelector('h1').innerHTML = '<strong>!!!!'
// </strong>
// in place of h1 tag data it will print this one
// document.querySelectorall('li')[1].parentElement;
// it will show the <ul> data why becouse it is parent 
// element
// document.querySelectorall('li')[1].parentElement.
// parentElement;
// it will show the that parent element