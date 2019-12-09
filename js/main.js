

let header = document.querySelector('header');
let section = document.querySelector('section');


let requestURL = "https://kirillman200.github.io/Project3-JSON/js/weird.json";


let request = new XMLHttpRequest(); 


request.open('GET', requestURL);



request.responseType = 'json';



request.send();

 alert("Sorry for inconvenience. If you dont see maps, try to reload page couple times. They definetly are working :) ")

request.onload = function() {
   
  let weird = request.response; 
  console.log(weird);
  populateHeader(weird); 
  topWeird(weird); 
    ready(weird);
}


function populateHeader(jsonObj) {
 
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);
  
  
  
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}



function topWeird(jsonObj) {
  
  
  let topWeird = jsonObj['topWeird'];
    var counter = 0;
     
  for (let i = 0; i < topWeird.length; i++) {
      
  
    
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    let div = document.createElement('div');
    let divBorder = document.createElement('div');
    
    
    img.setAttribute('src', 'https://kirillman200.github.io/Project3-JSON/images/' + topWeird[i].image);
    img.setAttribute('alt', topWeird[i].image );
    img.setAttribute('class', 'images' );
   divBorder.setAttribute('class', 'border');
      
      //if statamets to assign differt map id for different map locations
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
      
  
    h2.textContent = topWeird[i].name; 
    p1.textContent = 'Price: ' + topWeird[i].price;
    p2.textContent = 'Description: ' + topWeird[i].description;
    
    let features = topWeird[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = features[j];
      list.appendChild(listItem); 
    }
    
  
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
//ready function to load it only after page loads
function ready(){
    //Map API functions for different locations
   function mapInit() {
// setting variable of  latitude and longitude 
  var myLatLng = new google.maps.LatLng(52.525595, 13.393085);
 //setting position of zoom and center map
  var mapProps = {
    zoom: 8,
    center: myLatLng
  }
// creating map in the div element with assigned id
  var map = new google.maps.Map(document.getElementById("map"), mapProps);
//creating marker on the map       
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
    //loads map
    google.maps.event.addDomListener(window, 'load', mapInit);
    google.maps.event.addDomListener(window, 'load', mapInit1);
    google.maps.event.addDomListener(window, 'load', mapInit2);
    google.maps.event.addDomListener(window, 'load', mapInit3);
    google.maps.event.addDomListener(window, 'load', mapInit4);
};
 document.addEventListener("DOMContentLoaded", ready);

