async function api(city){
  let a = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
  let data = await a.json()
  if(!data.error){
   displayCurrent(data)
   displayAnotherDay(data)
  }
}