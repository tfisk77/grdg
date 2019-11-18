var RecherchePays = {}
RecherchePays['france'] = 'France';
RecherchePays['espagne'] = 'Espagne';
RecherchePays['italie'] = 'Italie';

console.log(RecherchePays);
console.log(RecherchePays['France']);

var RechercheObjet = {}
RechercheObjet['chaise'] = 'Chaise';
RechercheObjet['montre'] = 'Montre';
RechercheObjet['astroworld'] = 'Astroworld - Travis Scott';
RechercheObjet['maserati'] = 'Maserati';
RechercheObjet['PS4']= 'Playstation 4';

console.log(RechercheObjet);
console.log(RechercheObjet['Chaise']);

let name = document.getElementById("name");
//alert("Bienvenu sur Tray ! Traydez vos objets a travers le monde.");
//alert("hello " + name.value );


window.addEventListener("load", function(event){
    alert('window loaded');
});


function search(name){
    // let name = document.getElementById("name");
    // alert("Bienvenu sur Tray ! Traydez vos objets a travers le monde.");
    alert("hello " + name );
    window.location = "Page2.html";
}

function objectSearch(value){
    value = value.toLowerCase();
    alert(RechercheObjet[value]);
    window.location = "Page2.html?response="+ value;
    // let response = document.getElementById("text_response");
    // response.textContent = RechercheObjet[value];
    // response.innerHTML = RechercheObjet[value];
}

function countrySearch(value){
    value = value.toLowerCase();
    alert(RecherchePays[value]);
    window.location = "Page2.html";
    let response = document.getElementById("response");
    response.innerText = RecherchePays[value];
}