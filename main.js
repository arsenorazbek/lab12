
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

const list1 = ["find elements in the DOM <b>(5 points)</b>;", "create/add/remove elements <b>(5 points)</b>;", "change content of the elements <b>(5 points)</b>;", "change styles of the elements <b>(5 points)</b>;", "change attributes of the elements <b>(5 points)</b>;", "change classes of the elements <b>(5 points)</b>. "];

function list(x) {
  const ulTag = document.createElement('ul');
  for (let i=0; i<x.length; i++){
      const liTag = document.createElement('li');
      liTag.innerHTML = x[i];
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

const list2 = ["Create a new repository on Github, named <b>lab12 (1 point)</b>.", "Clone this repository to your local machine and work inside it.", "Create a new HTML file, called <b>index.html</b>, which has only one ≮h1> tag with ''Hello, World!'' message <b>(1 point)</b>.", "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>. ", "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).", "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points)</b>. ", "After you finish your work, submit it to the Github <b>(2 point)</b>."];

list(list2);

let myhr2 = document.createElement("hr")
document.body.appendChild(myhr2)

