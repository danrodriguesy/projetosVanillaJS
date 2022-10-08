import '../css/style.css';
import javascriptLogo from '../../public/images/Javascript.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>40 projetos em JS</h1>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    
  </div>
  <hr />
  <ul> 
    <li> 
      <a href="./backgroundChange.html"> 1. Background Change </a>
    </li>
    <li> 
      <a href="./counter.html"> 2. Counter </a>
    </li>
  </ul>
`