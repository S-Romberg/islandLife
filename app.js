const listURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
const smoothieURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=smoothie"
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const iframething = document.getElementById('picture')

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
      var ul = document.createElement('ul')
    response.drinks.map(drink => {
        var liTag = document.createElement('li')
        var imgTag = document.createElement('img')
         liTag.textContent = drink.strDrink
         imgTag.src = drink.strDrinkThumb
         ul.appendChild(liTag)
         ul.appendChild(imgTag)
         ul.classList.add('smoothieList')
         liTag.classList.add(drink.idDrink)
         document.getElementById('smoothieContainer').appendChild(ul)
         liTag.addEventListener("click", loadSmoothie)
       })
     })

function loadSmoothie(event){
  document.getElementById('smoothieRecipie').innerHTML = ""
  event.preventDefault()
      var ingredients = []
      var measurements = []
      fetch(searchURL + this.classList)
         .then(function(response){
          return response.json();
      }) .then(function(response){
          response.drinks.map(info => {
            if(info.idDrink === event.target.className){
            var liTag = document.createElement('li')
            var append = document.getElementById('smoothieRecipie')
            var imgTag = document.createElement('img')
            h2Tag.textContent = info.strDrink
            pTag.textContent = info.strInstructions
            imgTag.src = info.strDrinkThumb
            ingredients.push(info.strIngredient)
            measurements.push(info.strMeasure)
            pTag.classList.add("smoothieIngList")
            append.appendChild(h2Tag)
            append.appendChild(imgTag)
            append.appendChild(pTag)
          }
          })
          ingredients.map(item => {
            if(item !== ""){
                var liTag = document.createElement('li')
                var append = document.getElementById('smoothieRecipie')
                liTag.textContent = item
                append.appendChild(liTag)
          }
        })
          measurements.map(item => {
             if (item !== '↵'){
                var liTag = document.createElement('li')
                var append = document.getElementById('smoothieRecipie')
                liTag.textContent = item
                append.appendChild(liTag)
          }
    })
  })
}

function loadAlcohol(){
  document.getElementById('drinkRecipie').innerHTML = ""
  event.preventDefault()
  fetch(searchURL + this.classList)
     .then(function(response){
      return response.json();
  }) .then(function(response){
      var annoyingList = []
      var annoyingList2 = []
      response.drinks.map(info => {
        var liTag = document.createElement('li')
        var append = document.getElementById('drinkRecipie')
        var imgTag = document.createElement('img')
        h2Tag.textContent = info.strDrink
        pTag.textContent = info.strInstructions
        imgTag.src = info.strDrinkThumb
        imgTag.src = info.strDrinkThumb
        ingredients.push(info.strIngredient)
        pTag.classList.add("drinkIngList")
        append.appendChild(h2Tag)
        append.appendChild(imgTag)
        append.appendChild(pTag)
      })
      ingredients.map(item => {
        if(item !== ""){
            var liTag = document.createElement('li')
            var append = document.getElementById('drinkRecipie')
            liTag.textContent = item
            append.appendChild(liTag)
      }
    })
      measurements.map(item => {
        if (item !== '↵'){
            var liTag = document.createElement('li')
            var append = document.getElementById('drinkRecipie')
            liTag.textContent = item
            append.appendChild(liTag)
      }
    })
  })
}

function showStrawberries() {
  iframething.innerHTML= `<iframe src="https://fallingfruit.org/locations/embed?z=13&y=39.73488&x=-104.99831&m=false&t=roadmap&f=105,1844&c=forager,freegan&l=false&locale=en" width=850 height=600 scrolling="no" style="border:none;"></iframe>`
}
function showApples() {
  iframething.innerHTML= `<iframe src="https://fallingfruit.org/locations/embed?z=13&y=39.73488&x=-104.99831&m=false&t=roadmap&f=14,1566,1874,3177,3180,3302,3306,3307,3308,3309,3310,3311,3315,3318,3319,3320,3321,3322,3323,3326,3329,3330,3332,3333,3334,3335,3336,3337,3338,3631,3635,3709,4066&c=forager,freegan&l=false&locale=en" width=640 height=600 scrolling="no" style="border:none;"></iframe>`
}
function showPeaches() {
  iframething.innerHTML= `<iframe src="https://fallingfruit.org/locations/embed?z=13&y=39.73488&x=-104.99831&m=false&t=roadmap&f=3280,3328,52&c=forager,freegan&l=false&locale=en" width=640 height=600 scrolling="no" style="border:none;"></iframe>`
}
function showBlackberries() {
  iframething.innerHTML= `<iframe src="https://fallingfruit.org/locations/embed?z=13&y=39.74428&x=-104.96938&m=false&t=roadmap&f=122,123,1426,1471,1741,1886,196,1986,230,2422,2523,2711,3901,4007,4020,420,48,566,701,857,98&c=forager,freegan&l=false&locale=en" width=640 height=600 scrolling="no" style="border:none;"></iframe>`
}
function showBanana() {
  iframething.innerHTML= `<iframe src="https://fallingfruit.org/locations/embed?z=13&y=39.73488&x=-104.99831&m=false&t=roadmap&f=1982,75&c=forager,freegan&l=false&locale=en" width=640 height=600 scrolling="no" style="border:none;"></iframe>`
}
