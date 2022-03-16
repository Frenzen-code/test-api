let searchButton = document.querySelector("#search")
let parameter = document.querySelector('#searchTerm').value
let selection = document.querySelector('#api-select').value

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  console.log(selection);
  switch(selection) {
        case "APOD":
            apodRequest()
        break;
        case "Asteroids NeoWs":


    
  }
  
})


//An asynchronous function to fetch data from the API.
async function apodRequest(){
  let API_KEY = "gqCRLcy77PjarQd8K00vlisX9eywcIfRPLybDXxO";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${parameter}`);
  console.log(response)
  let data = await response.json();
  console.log(data);
  useApiData(data)
}

async function meteorRequest(){
    let API_KEY = "gqCRLcy77PjarQd8K00vlisX9eywcIfRPLybDXxO";
    let response = await fetch(``);
    console.log(response)
    let data = await response.json();
    console.log(data);
    useApiData(data)
  }


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.querySelector(".explanation").innerHTML = data.explanation
    document.querySelector("#content").innerHTML = `<img src="${data.url}">`


}



