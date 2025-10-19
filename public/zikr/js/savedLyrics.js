$(document).ready(function() {

    var reciter = "";
    $("#heading").html("<center>"+reciter+"</center>")
    var nouhaOption = "";
    var searchOption = "<option></option>";


    var year =  "";
    mirnoha = {};
    localStorage = window.localStorage;
 
  jsonObject = JSON.parse(localStorage.getItem("SAVED_LYRICS"))
  console.log(jsonObject)
  if(jsonObject == null){
    console.log("1 St adding")
    jsonObject = {};
  }
  count = 0
  console.log(jsonObject)
  for(var key in jsonObject){
      count = count+1;
      mirnoha[count] = key;
  }
  console.log(mirnoha)
  for(var nouha in mirnoha){
      
      nouhaOption+="<div class = \"nouhasbg\"><span class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</span><span class=\"delete\" id = \""+mirnoha[nouha]+"\">&#10006;</span></div>";
  
  }
  
$("#nouhas").html(nouhaOption);	


$(document).on("click",".nouhas",function() {
    
    var id = this.id;
    
    var url =id;

    window.location.href="NewlyAddedXLNouhaLyrics.html?SAVED_LYRICS/"+url;

});


$(document).on("click",".delete",function() {
    jsonObject = JSON.parse(localStorage.getItem("SAVED_LYRICS"))
    delete jsonObject[this.id];
    localStorage.setItem( "SAVED_LYRICS",JSON.stringify(jsonObject));
    location.reload()
});


});

