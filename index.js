import Content from './src/Content';
import Header from './src/Header';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import * as State from './store';
import Navigo from 'navigo';

var root = document.querySelector('#root');
var router = new Navigo();

console.log(router);

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

    console.log('page state', state);

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content}
        ${Footer}
    `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');

    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
        <div>
            <h3>Welcome to my home page,</h3>
            <h4>${event.target.value}</h4>                
        </div>
    `
    );

    links = document.querySelectorAll('#navigation a');

    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;
            
                event.preventDefault();
                render(State[page]);
            }
        );

        i++;
    }
}

// greetUser();
render(State['Home']);