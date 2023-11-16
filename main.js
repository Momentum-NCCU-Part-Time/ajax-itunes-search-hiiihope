const musicUrl = "https://itunes.apple.com/search?term=";
let searchTerm = document.getElementById("search");
let searchForm = document.getElementById("searchForm");
let button = document.getElementById("submitButton");
let results = document.getElementById("results");

searchForm.addEventListener("submit", (e) => {
   e.preventDefault()

   let searchBox = document.getElementById('searchBox')
   console.log(searchBox.value)

    fetch(musicUrl + searchBox.value, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    
    })
    
        
    .then((response) => {
                if (response.status === 200) {
            return response.json();
        }
        else {throw new Error("No results found") }
    })

     .then((parsedJson) => {
         const resultsArray = parsedJson.results;
         console.log(resultsArray)
         // console.log(parsedJson);
         results.innerHTML = ""
         if(resultsArray.length === 0) {
             
         let errorMessage = document.createElement('h2')
          errorMessage.innerText = "No results found"
          results.appendChild(errorMessage);
        
         } else {
             for (let i = 0; i< resultsArray.length; i++){
                
                let searchCard = document.createElement("div");
         searchCard.classList.add("card")

         const audioTag = resultsArray[i].previewUrl;
         const songTag = document.createElement("audio");
         songTag.src = audioTag;
         songTag.controls = true;
         searchCard.appendChild(songTag);
         
         const trackName = resultsArray[i].trackName;
         const songTitle = document.createElement("h3");
         songTitle.innerText = trackName;
         searchCard.appendChild(songTitle);
         
         const trackNumber = resultsArray[i].trackNumber;
         const trackList = document.createElement("h3");
         trackList.innerText = trackNumber;
         searchCard.appendChild(trackList);
         
         const imageBox = document.createElement("img");
         imageBox.classList.add("album");
         imageBox.src = resultsArray[i].artworkUrl100;
         searchCard.appendChild(imageBox);
         // created div/for each item needed artists name, albutm, track number and whatever parameters.
          results.appendChild(searchCard); 
                }
         }
        
            })
            


 
      })
    
