
// function buildLinks(links){
//     var i = 0;
//     var result = '';

//     while(i < links.length){
//         result += `
//         <li>
//         <a href="/${links[i]}">
//         ${links[i]}
//          </a>
//         </li>`;

//         i++;
//     }

//     return result;
// }

import { lowerCase } from 'lodash';

console.log(lowerCase);

function buildLinks(links){
    var result = '';
    var i = 0;
    var href = '/';

    while(i < links.length){
        if(links[i] !== 'Home'){
            href += lowerCase(links[i]);
        }

        result += `
        <li>
          <a href="${href}" data-navigo>${links[i]}</a>
        </li>
      `;
    
        href = '/';
        
        i++;
    }

    return result;
}

export default function Navigation(state){
    return `
      <div id="navigation">
        <ul class="container">
         ${buildLinks(state.links)}
        </ul>
      </div>
     `;
}