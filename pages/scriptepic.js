let searchButton = document.querySelector("#search")
let page = document.querySelector('#page').value

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  
    epicRequest()
 

  
})


//An asynchronous function to fetch data from the API.
async function epicRequest(){
  let API_KEY = "gqCRLcy77PjarQd8K00vlisX9eywcIfRPLybDXxO";
  let response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${API_KEY} `);
 // console.log(response)
  let data = await response.json();
  //console.log(data);
  useApiData(data)
}



//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.querySelector(".explanation").innerHTML = data.explanation
    document.querySelector("#content").innerHTML = `<img src="${data.url}">`



