const listURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
const smoothieURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=smoothie"
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

var pTag = document.createElement('p')
var h2Tag = document.createElement('h1')
var ulTag = document.createElement('ul')
var liTag = document.createElement('li')
var divTag = document.createElement('div')
var imgTag = document.createElement('img')

fetch(listURL)
    .then(function(response){
       return response.json();
    })
    .then(function(response){
    response.drinks.map(drink => {
        var liTag = document.createElement('li')
        var imgTag = document.createElement('img')
        liTag.textContent = drink.strDrink
        imgTag.src = drink.strDrinkThumb
        ulTag.appendChild(liTag)
        ulTag.appendChild(imgTag)
        ulTag.classList.add('drinkList')
        liTag.classList.add(drink.idDrink)
        document.getElementById('drinkContainer').appendChild(ulTag)
        liTag.addEventListener("click", loadAlcohol)
      })

    })
    fetch(smoothieURL)
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
             ulTag.classList.add('smoothieList')
             document.getElementById('smoothieContainer').appendChild(ulTag)
            //  liTag.addEventListener("click", loadSmoothie)
           })

        })
    // fetch(smoothieURL)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(response => {
    //     response.drinks.map(drink => {
    //       console.log(drink.strInstructions);
    //       var liTag = document.createElement('li')
    //       liTag.textContent = drink.strDrink
    //       ulTag.appendChild(liTag)
    //       liTag.appendChild(pTag)
    //       pTag.classList.add("smoothieIngList")
    //       ulTag.classList.add("smoothieList")
    //       document.getElementById('smoothieContainer').appendChild(ulTag)
    //     })
    //   })

function loadAlcohol(){
  console.log("yay!")
  document.getElementById('drinkRecipie').innerHTML = ""
  event.preventDefault()
  fetch(searchURL + this.classList)
     .then(function(response){
      return response.json();
  }) .then(function(response){
      console.log(response);
      var annoyingList = []
      var annoyingList2 = []
      response.drinks.map(info => {
        console.log(info);
        var liTag = document.createElement('li')
        var append = document.getElementById('drinkRecipie')
        var imgTag = document.createElement('img')
        h2Tag.textContent = info.strDrink
        pTag.textContent = info.strInstructions
        imgTag.src = info.strDrinkThumb
        annoyingList.push(info.strIngredient1)
        annoyingList.push(info.strIngredient2)
        annoyingList.push(info.strIngredient3)
        annoyingList.push(info.strIngredient4)
        annoyingList.push(info.strIngredient5)
        annoyingList.push(info.strIngredient6)
        annoyingList.push(info.strIngredient7)
        annoyingList.push(info.strIngredient8)
        annoyingList.push(info.strIngredient9)
        annoyingList.push(info.strIngredient10)
        annoyingList.push(info.strIngredient11)
        annoyingList.push(info.strIngredient12)
        annoyingList.push(info.strIngredient13)
        annoyingList.push(info.strIngredient14)
        annoyingList.push(info.strIngredient15)
        annoyingList2.push(info.strMeasure1)
        annoyingList2.push(info.strMeasure2)
        annoyingList2.push(info.strMeasure3)
        annoyingList2.push(info.strMeasure4)
        annoyingList2.push(info.strMeasure5)
        annoyingList2.push(info.strMeasure6)
        annoyingList2.push(info.strMeasure7)
        annoyingList2.push(info.strMeasure8)
        console.log("annoying", annoyingList);
        pTag.classList.add("drinkIngList")
        append.appendChild(h2Tag)
        append.appendChild(pTag)
        append.appendChild(imgTag)
      })
      annoyingList.map(item => {
        if(item !== ""){
        var liTag = document.createElement('li')
        var append = document.getElementById('drinkRecipie')
        liTag.textContent = item
        append.appendChild(liTag)
      }
    })
      annoyingList2.map(item => {
        if(item !== ""){
        var liTag = document.createElement('li')
        var append = document.getElementById('drinkRecipie')
        liTag.textContent = item
        append.appendChild(liTag)
      }
    })
  })
}
