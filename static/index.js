
const companiesList = document.getElementById('companiesList');
let result = [];
const url = 'https://tva.staging.b2brain.com/search/autocomplete_org_all/';

function hideHeroShowList() {
    var sb = document.getElementById("sbtn");
    var tb = document.getElementById("tbtn");

    sb.style.display = "none";
    tb.style.display = "block";
    var x = document.getElementById("hero");
      x.style.display = "none";
    var y = document.getElementById("list");
      y.style.display = "block";
    
  }

  function ShowHeroHideList() {
    var sb = document.getElementById("sbtn");
    var tb = document.getElementById("tbtn");

    tb.style.display = "none";
    sb.style.display = "block";
    
    var x = document.getElementById("hero");
      x.style.display = "block";
    var y = document.getElementById("list");
      y.style.display = "none";

  }

// var viewModel = function() {
//     this.shouldShowCompanies = ko.observable(false);
//     this.showCompanies = function() {
//         this.shouldShowCompanies(true);
//     }
// }
// ko.applyBindings(viewModel);

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = result.filter((data) => {
        return (
            data.company.toLowerCase().includes(searchString) ||
            data.website.toLowerCase().includes(searchString)
        );
    });
    displayCompanies(filteredCharacters);
});


const loadCompanies = async () => {
    try {
        const res = await fetch(url);
        result = await res.json();
        console.log(result)
        displayCompanies(result);
    } catch (err) {
        console.error(err);
    }
};

const displayCompanies = (companies) => {
    const htmlString = companies
        .map((data) => {
            return `
            <li class="data">
               <img src="${data.logo}"></img>
                <h4>${data.company}</h4>
                <p>${data.website}</p>
                <button id="btn">Track</button>
            </li>
        `;
        })
        .join('');
        companiesList.innerHTML = htmlString;
};

loadCompanies();