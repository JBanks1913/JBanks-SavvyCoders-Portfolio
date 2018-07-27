import { lowerCase } from 'lodash';
console.log(lowerCase);

function reduceLinktoHTML(links, link){
    var href = '/';

    if(link !== 'Home'){
        href += lowerCase(link);
    }

    return `
        ${links}
        <li>
          <a href="${href}" data-navigo>${link}</a>
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