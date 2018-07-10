import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';

function greetUser(){
    var greeting = document.querySelector('#greeting');
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
         <div>
           <h3>Welcome to my world,</h3>
           <h4>${firstName} ${lastName}</h4>
         </div> 
        `;
    }
    else{
        greetUser();
    }
}


var initialHTML = document.body.innerHTML;

document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header()}
    ${Content}
    ${Footer}
    ${initialHTML}
`;

greetUser();