let menu = [
{"picture":"./img/PizzaMenu1.jpg",
"punchline":"Pizza Katastropha",    
"price":"8.99",
"ammount": []
},
{"picture":"./img/PizzaMenu2.jpg",
"punchline":"Pizza Turkische Wurschtsemmel",    
"price":"8.99",
"ammount": []
},
{"picture":"./img/BurgerMenu1.jpg",
"punchline":"Saftiger Cheesburger with Bacon",    
"price":"11.99",
"ammount": []
},
{"picture":"./img/BurgerMenu2.jpg",
"punchline":"MEGA Burger with Wedges",    
"price":"12.99",
"ammount": []
},
{"picture":"./img/RoastBeef.jpg",
"punchline":"Rinderbraten am Spieß",    
"price":"14.99",
"ammount": []
},
{"picture":"./img/Schnipo1.jpg",
"punchline":"Klassiker mit Pommes",    
"price":"8.99",
"ammount": []
}
];


function init() {
/*     load(); */
    render();

}


function render() {
    let content = document.getElementById('content');
    content.innerHTML = ''; /*div container löschen*/

    for (let i = 0; i < menu.length; i++) {
        const post = menu[i];
        content.innerHTML += /*html*/ `
    <div class="menuFeed">
        <h1>${post['punchline']}</h1>
      <img class="imageMenu" src="${post['picture']}"> <!-- /*post und Schlüssel picture*/ -->
      <h1>${post['price']}</h1>
        <h3 id="postcontent${i}"></h3>
         
        <input id="input${i}"><button onclick="addComment(${i})">ok</button>
  
    </div>
    `;

        let postcontent = document.getElementById(`postcontent${i}`);

        for (let j = 0; j < post['ammount'].length; j++) {
            const comment = post['ammount'][j];
            /*   const delete = post['deleteammount'][j]; */
            postcontent.innerHTML += `<div>${comment}<img onclick="deleteComment(${j},${i})" class="recycleBin" src="img/delete.png"></div>`;
        }
    }
}


function addComment(index) {
    let input = document.getElementById(`input${index}`);
    menu[index]['ammount'].push(input.value);
    render();
    save();
    input.value = '';


}


/* function deleteComment(j, i) {
    menu[i].ammount.splice(j, 1);
    save();
    render();

}


function save() {
    let menuAsText = JSON.stringify(menu);
    localStorage.setItem('menu', menuAsText);
    console.log(menuAsText);
}


function load() {
    let menuAsText = localStorage.getItem('menu');
    if (menuAsText) {
        menu = JSON.parse(menuAsText);
    }
    return menu;
} */


/* Amount + und -
let Amount_array = [];

function portions() {
    let input = document.getElementById('input'); 
    let table = document.getElementById('table');

    for (let i = 0; i < table.rows.length; i++) { 

        let first_cell = table.rows[i].cells[0];

        Amount_array.push(first_cell.innerHTML);

            if (first_cell.innerHTML > 0 && input.value > 0) { 
                first_cell.innerHTML = Amount_array[i] * input.value;
            }
    }
}

function showOverlay() {
    document.getElementById('menuResponsiv').classList.add('showOverlay');
}

function closeOverlay() {
    document.getElementById('menuResponsiv').classList.remove('showOverlay');
}

function addPortionResponsiv() {
   document.getElementById('input').value = +document.getElementById('input').value + 1;
   portions();
}

function minusPortionResponsiv() {
    if (document.getElementById('input').value > 1) { 
        document.getElementById('input').value = +document.getElementById('input').value - 1;
    }
    portions();
}*/
 
