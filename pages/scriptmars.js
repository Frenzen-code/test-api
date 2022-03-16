let searchButton = document.querySelector("#search")
let page = document.querySelector('#page').value

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  
    marsRequest()
 

  
})


//An asynchronous function to fetch data from the API.
async function marsRequest(){
  let API_KEY = "gqCRLcy77PjarQd8K00vlisX9eywcIfRPLybDXxO";
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY} `);
 // console.log(response)
  let data = await response.json();
  //console.log(data);
  useApiData(data)
}



//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    
   
    for(object of data.photos) {
       // console.log(object.img_src);
   //image =  document.createElement("img").setAttribute("src", object.img_src)
   let img =document.createElement("img");
   img.setAttribute("src",`${object.img_src}`)
                document.querySelector("#content").append(img)
               
    }

}



