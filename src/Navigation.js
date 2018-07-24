import { lowerCase } from 'lodash';
console.log(lowerCase);

function reduceLinktoHTML(links, link){
    var href = '/';
    var i = 0;

    if(link !== 'Home'){
        href += lowerCase(links[i]);
    }

    return `
        ${links}
        <li>
          <a href="${href}" data-navigo>${links}</a>
        </li>
      `;
}

function buildLinks(links){
    return links.reduce(reduceLinktoHTML, '');
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