$(document).ready(function() {

    var reciter = "";
    $("#heading").html("<center>"+reciter+"</center>")
    var nouhaOption = "";
    var searchOption = "<option></option>";


    var year =  "Newly Added Lyrics";
    nouhaOption+="<h4>"+year+"</h4>";
    mirnoha = {};
    localStorage = window.localStorage;
    var URL = 'https://sheets.googleapis.com/v4/spreadsheets/1EU1DJLtMG5GL1Izw7ABgMoiRW9y1E2-Tq0xjaSYD3GM/values/A%3AB?key=AIzaSyBg2vrWSUjAdPS4gFAfXIl4yt-tWNIAjHc';
$.get(URL, function(data, status){
  
jsonObject = {};
for(var url in data.values){
  var value = (data.values[url])
  jsonObject[value[0]]=value[1].replace(/\n/g, "</br>");
}

  
  localStorage.setItem("NEW_LYRICS",JSON.stringify(jsonObject));
  count = 0
  
  for(var key in jsonObject){
      count = count+1;
    
    mirnoha[count] = key;
  }
  console.log(mirnoha)
  for(var nouha in mirnoha){
      
      nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
  
  }
  
$("#nouhas").html(nouhaOption);	


$(document).on("click",".nouhas",function() {
    
    var id = this.id;
    
    var url =id;

    window.location.href="NewlyAddedXLNouhaLyrics.html?NEW_LYRICS/"+url;

});


}).fail(function(status){alert("you are offline, to get latest lyrics turn on mobile data ");
jsonObject = {};
jsonObject = JSON.parse(localStorage.getItem("NEW_LYRICS"))
  

    count = 0
    
    for(var key in jsonObject){
        count = count+1;
      
      mirnoha[count] = key;
    }
    console.log(mirnoha)
    for(var nouha in mirnoha){
        
        nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
    
    }
    
  $("#nouhas").html(nouhaOption);	
  
  
  $(document).on("click",".nouhas",function() {
      
      var id = this.id;
      
      var url =id;
  
      window.location.href="NewlyAddedXLNouhaLyrics.html?NEW_LYRICS/"+url;
  
  });
});
 


});

