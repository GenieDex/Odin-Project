const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';



const red_p = document.createElement('div');
const blue_h3 = document.createElement('h3');
const div = document.createElement('div');
const div_h1 = document.createElement('h1');
const div_p = document.createElement('p');




red_p.style.color = 'red';
blue_h3.style.color = 'blue';
div.style.cssText = 'background-color: pink; border: 2px solid black;'

red_p.textContent = "Hey I'm red!"
blue_h3.textContent = "I'm a blue h3!"
div_h1.textContent = "I'm in a div."
div_p.textContent = "Me too!"
container.appendChild(content); 
container.appendChild(red_p);
container.appendChild(blue_h3);
container.appendChild(div);
div.appendChild(div_p,div_h1);