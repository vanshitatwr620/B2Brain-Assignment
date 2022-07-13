
const companiesList = document.getElementById('companiesList');
let result = [];
const url = 'https://tva.staging.b2brain.com/search/autocomplete_org_all/';

//Dropdown menu
let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }

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

    const a = document.getElementById("searchBar");
    a.value = '';
    
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
               <div id="profileImage" style="background:${data.color};" >${data.company[0]}</div>
               <div id="company-name">${data.company}</div>
               <p id="website">${data.website}</p>
            </li>
        `;
        })
        .join('');
        companiesList.innerHTML = htmlString;
};

$(document).ready(function(){
  var firstName = $('#company-name').text();
  var intials = firstName.charAt(0);
  var profileImage = $('#profileImage').text(intials);
});



loadCompanies();