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

 alert("Sorry for inconvenience. If you dont see maps, try to reload page couple times. They definetly are working :) ")
// Step Seven - adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
   
  let iScreamInc = request.response; 
  console.log(iScreamInc);
  populateHeader(iScreamInc); 
  topFlavours(iScreamInc); 
    ready(iScreamInc);
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
    let divBorder = document.createElement('div');
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://kirillman200.github.io/Project3-JSON/images/' + topFlavours[i].image);
    img.setAttribute('alt', topFlavours[i].image );
    img.setAttribute('class', 'images' );
   divBorder.setAttribute('class', 'border');
      
      if(counter == 0){
 
        div.setAttribute('id', 'map');
      }
      
        if(counter == 1){
        
       div.setAttribute('id', 'map1');
 
      }
          if(counter == 2){
    div.setAttribute('id', 'map2');
      }
      
        if(counter == 3){
       div.setAttribute('id', 'map3');
 
      }
      
        
        if(counter == 4){
       div.setAttribute('id', 'map4');
 
      }
      
  // The marker, positioned at Uluru
    h2.textContent = topFlavours[i].name; 
    p1.textContent = 'Price: ' + topFlavours[i].price;
    p2.textContent = 'Description: ' + topFlavours[i].description;
    
    let features = topFlavours[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = features[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    
  
    article.appendChild(h2);  
    article.appendChild(img);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    article.appendChild(div); 
    article.appendChild(divBorder); 
    section.appendChild(article); 
    
  
      
    counter++; 
  }
    
 

}
function ready(){
    
   function mapInit() {
  var myLatLng = new google.maps.LatLng(52.525595, 13.393085);

  var mapProps = {
    zoom: 8,
    center: myLatLng
  }

  var map = new google.maps.Map(document.getElementById("map"), mapProps);

  var marker = new google.maps.Marker({position: myLatLng, map: map});

};
     function mapInit1() {
  var myLatLng1 = new google.maps.LatLng(44.525595, -79.393085);

   var mapProps1 = {
    zoom: 8,
    center: myLatLng1
  }


  var map1 = new google.maps.Map(document.getElementById("map1"), mapProps1);

  var marker1 = new google.maps.Marker({position: myLatLng1, map: map1});

};

       function mapInit2() {
 
  var myLatLng2 = new google.maps.LatLng(50.4501, 30.5234);

    var mapProps2 = {
    zoom: 8,
    center: myLatLng2
  }



  var map2 = new google.maps.Map(document.getElementById("map2"), mapProps2);

  var marker2 = new google.maps.Marker({position: myLatLng2, map: map2});

};
      function mapInit3() {
  
  var myLatLng3 = new google.maps.LatLng(13.7563, 100.5018);
  

     var mapProps3 = {
    zoom: 8,
    center: myLatLng3
  }



  var map3 = new google.maps.Map(document.getElementById("map3"), mapProps3);

  var marker3 = new google.maps.Marker({position: myLatLng3, map: map3});
};
      function mapInit4() {


  var myLatLng4 = new google.maps.LatLng(27.9881, 86.9250);
  

      var mapProps4 = {
    zoom: 8,
    center: myLatLng4
  }


  var map4 = new google.maps.Map(document.getElementById("map4"), mapProps4);

  var marker4 = new google.maps.Marker({position: myLatLng4, map: map4});
};    
    google.maps.event.addDomListener(window, 'load', mapInit);
    google.maps.event.addDomListener(window, 'load', mapInit1);
    google.maps.event.addDomListener(window, 'load', mapInit2);
    google.maps.event.addDomListener(window, 'load', mapInit3);
    google.maps.event.addDomListener(window, 'load', mapInit4);
};
 document.addEventListener("DOMContentLoaded", ready);

