
let h1_arr = document.getElementsByTagName("h1");
h=h1_arr[0];
h.innerText = "Lab12 Assignment";
h.style.color="blue";
let myhr = document.createElement("hr")
document.body.appendChild(myhr)

let h21 = document.createElement("h2");
h21.innerText = "Task";
h21.style.color = "red";

document.body.appendChild(h21);

let text1 = document.createElement("p");
text1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques: ";

document.body.appendChild(text1);

const list1 = ["find elements in the DOM (5 points);", "create/add/remove elements (5 points);", "change content of the elements (5 points);", "change styles of the elements (5 points);", "change attributes of the elements (5 points);", "change classes of the elements (5 points). "];

function list(x) {
  const ulTag = document.createElement('ul');
  for (let i=0; i<x.length; i++){
      const liTag = document.createElement('li');
      liTag.innerText = x[i];
      if (i%2===0){
        liTag.style.color = "green";
        liTag.classList.add("even")
      }
      else{
        liTag.style.color = "purple";
        liTag.classList.add("odd")
      }
      ulTag.appendChild(liTag);
  }  
  document.body.appendChild(ulTag)
}
list(list1);


const text2 = document.createElement("p");
text2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
document.body.appendChild(text2);

let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerHTML = "link";
document.getElementsByTagName("p")[1].appendChild(a1);

let myhr1 = document.createElement("hr")
document.body.appendChild(myhr1)

let h22 = document.createElement("h2");
h22.innerText = "Submission";
h22.style.color = "red";

document.body.appendChild(h22);

let text3 = document.createElement("p");
text3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(text3);

const list2 = ["Create a new repository on Github, named lab12 (1 point).", "Clone this repository to your local machine and work inside it.", "Create a new HTML file, called index.html, which has only one <h1> tag with ''Hello, World!'' message (1 point).", "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point). ", "Link this main.js file to your index.html file (Note: place your script at the end of the body section).", "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points). ", "After you finish your work, submit it to the Github (2 points)."];

list(list2);

let myhr2 = document.createElement("hr")
document.body.appendChild(myhr2)

