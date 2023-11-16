const musicUrl = "https://itunes.apple.com/search?term=";
let searchTerm = document.getElementById("search");
let searchForm = document.getElementById("searchForm");
let button = document.getElementById("submitButton");
let results = document.getElementById("results");

searchForm.addEventListener("submit", (e) => {
   e.preventDefault()

   let searchBox = document.getElementById('searchBox')
   console.log(searchBox.value)

    fetch(musicUrl + value, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    
    })
    
        
    .then((response)) => {
                if (response.status === 200){
            return response.json();
        }
        else {console.log("Invalid Request")}
    })

     .then((parsedJson)) => {
        console.log(parsedJson);
        let res = document.createElement('div');
        res.innerText = parsedJson.results[''],
        searchResults.appendchild(res);
     }
 



    // https.proxyitunes.glitch   --- append string to approp url 
    // console.log()
    // display.innerText += e.target.innerText

// fetch request, get button, add event listeners, searchfield searchfield results pull information from itunes. audio tag has src and

/* <link rel="icon" type="image/x-icon" href="your-favicon-name.png" /> */