const listURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
const smoothieURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=smoothie"
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

var pTag = document.createElement('p')
var h1Tag = document.createElement('h1')
var ulTag = document.createElement('ul')
var liTag = document.createElement('li')
var divTag = document.createElement('div')
var imgTag = document.createElement('img')
fetch(listURL)
    .then(function(response){
       return response.json();
    })
    .then(function(response){
      console.log(response)
    response.drinks.map(drink => {
        var liTag = document.createElement('li')
        var imgTag = document.createElement('img')
        liTag.textContent = drink.strDrink
        imgTag.src = drink.strDrinkThumb
        ulTag.appendChild(liTag)
        ulTag.appendChild(imgTag)
        ulTag.classList.add("drinkList")
        liTag.classList.add(drink.idDrink)
        document.getElementsByTagName('body')[0].appendChild(ulTag)
        liTag.addEventListener("click", loadAlcohol)
      })

    })

    fetch(smoothieURL)
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        response.drinks.map(drink => {
          console.log(drink.strInstructions);
          var liTag = document.createElement('li')
          liTag.textContent = drink.strDrink
          ulTag.appendChild(liTag)
          liTag.appendChild(pTag)
          pTag.classList.add("smoothieIngList")
          ulTag.classList.add("drinkList")
          document.getElementsByTagName('body')[0].appendChild(ulTag)
        })
      })

function loadAlcohol(){
  console.log("yay!");
  event.preventDefault()
  fetch(searchURL + this.classList)
     .then(function(response){
      return response.json();
  }) .then(function(response){
      console.log(response);

  });
}
