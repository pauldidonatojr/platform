function container() {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
}

function header() {
  let header = document.createElement("header");
  let container = document.getElementById("container");
  container.appendChild(header);
  document.getElementsByTagName("header")[0].innerHTML =
    "<h1> El Pawl.com </h1>";
}
function nav() {
  let nav = document.createElement("nav");
  // let headers = document.getElementsByTagName("header")[0];
  let container = document.getElementById("container");

  container.appendChild(nav).innerHTML = `
    <ul>
    <li> Sports Book </li>
    <li> Shopping </li>
    <li> My Page </li>
  
  
  
    </ul>
  
    `;
}

function article() {
  let article = document.createElement("artice");
  article.classList.add("article");
  let container = document.getElementById("container");
  // create <div class='nested'> inside article

  container.appendChild(article).innerHTML = `
      <div class='nested-1'>
      <div> Home </div>
      <div><input type='search' > </input> </div>
  </div>
  
  <div class='nested-2'>
  
  <div class='deep-nested-2'>
  <!-- <div>
      Inside Container
  
      </div> -->
  
  
  </div>
  
  <div class='deep-nested-3'>
      <nav>
      <ul>
              <li>
                      Tool Bar
              </li>
              <li>
                      Tool Bar-1
              </li>
              <li>
                      Tool Bar-2
              </li>
      </ul>
       </nav>
  </div>
  
  
  </div>
      `;
}

function div() {
  let nested = document.createElement("div");
  let article = document.getElementsByClassName("article")[0];
  nested.classList.add("nested");
  article.appendChild(nested).innerHTML = `
  
  
  `;
}

function aside() {
  let container = document.getElementById("container");

  for (let i = 0; i <= 2; i++) {
    if (i === 1) {
      let aside = document.createElement("aside");
      container.appendChild(aside);
      aside.classList.add("sidebar-1");

      aside.innerHTML = `
      <h3>Sidebar 1 </h3>
              <blockquote>
                  A fine quote!
              </blockquote>
  
  
  
      `;
    }
    if (i === 2) {
      let aside = document.createElement("aside");
      container.appendChild(aside);
      aside.classList.add("sidebar-2");

      aside.innerHTML = `
          <h3>Sidebar 1 </h3>
                  <blockquote>
                      A fine quote!
                  </blockquote>
  
  
  
          `;
    }
  }
}
function footer() {
  let container = document.getElementById("container");
  let footer = document.createElement("footer");
  let data = [1, 2, 3, 4];

  container.appendChild(footer).innerHTML = `
    <h1> ${data[0]} this is the answer </h1>
  
    `;
}

container();
header();
nav();
article();
div();
aside();
footer();
