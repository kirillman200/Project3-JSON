// JavaScript Document

//Step One - create variables that store a reference to header and section elements 
let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Two - create a variable to store request URL 
let requestURL = "https://kirillman200.github.io/Project3-JSON/js/iscream.json";

// Step Three - create a new XHR object 
let request = new XMLHttpRequest(); 

//Step Four - open a new request, using the open method 
request.open('GET', requestURL);

//Step Five - set up the request to accept JSON

request.responseType = 'json';

//Step Six - send the request using the send method 

request.send();


// Step Seven - adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
  let iScreamInc = request.response; 
  console.log(iScreamInc);
  populateHeader(iScreamInc); 
  topFlavours(iScreamInc);  
}

// Step Eight - set up populateHeader function to fill in the header function 
function populateHeader(jsonObj) {
  
  // grab the company name from JSON object and then create a new element, adding text and appending to the header
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);
  
  //grab the company info and established date and add a new paragraph to your HTML that displays this info 
  
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the topflavours function to show the flavours

function topFlavours(jsonObj) {
  
  //bind top flavours object to a variables 
  let topFlavours = jsonObj['topFlavours'];
    var counter = 0;
  for (let i = 0; i < topFlavours.length; i++) {
      
  
    //create a few different elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    let div = document.createElement('div');
   
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://kirillman200.github.io/Project3-JSON/images/' + topFlavours[i].image);
    img.setAttribute('alt', topFlavours[i].image );
   
      
      if(counter == 0){
    div.setAttribute('id', 'map');
      }
      
        if(counter == 1){
       div.setAttribute('id', 'map1');
 
      }
      
  // The marker, positioned at Uluru
    h2.textContent = topFlavours[i].name; 
    p1.textContent = 'price: ' + topFlavours[i].price;
    p2.textContent = 'description: ' + topFlavours[i].description;
    
    let features = topFlavours[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = features[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    article.appendChild(div); 
    section.appendChild(article); 
  
      
    counter++; 
  }
    
    function mapInit() {
  
  var myLatLng = new google.maps.LatLng(52.525595, 13.393085);
  
  var mapProps = {
    zoom: 8,
    center: myLatLng
  }

  var map1 = new google.maps.Map(document.getElementById("map"), mapProps);
  var map2 = new google.maps.Map(document.getElementById("map1"), mapProps);
  var map3 = new google.maps.Map(document.getElementById("map3"), mapProps);
};

google.maps.event.addDomListener(window, 'load', mapInit);

}

