$(document).ready(function(){

    $("#next").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#qsre").css({"display":"flex","flex-direction":"column"});
    });

    $(".back").click(function()
    {
      $("#bldRes1").css('display','none');    
      $("#qsre").css({"display":"flex","flex-direction":"column"});
    });

    $("#gotoSol").click(function()
    {
      $("#qsre").css('display','none');    
      $("#choose").css({"display":"flex","flex-direction":"column"});
    });

    $("#colorpick1").click(function()
    {
        chrome.storage.sync.set({color:"red-green"}, function() {});
    });

    $("#colorpick2").click(function()
    {
      chrome.storage.sync.set({color:"blue-yellow"}, function() {});
    });

    $("#colorpick3").click(function()
    {
      chrome.storage.sync.set({color:"complete"}, function() {});
    });

    $("#test1").click(function()
    {
      $("#qsre").css('display','none');    
      $("#ishihara").css({"display":"flex","flex-direction":"column"});
    });

    $("#test2").click(function()
    {
      $("#qsre").css('display','none');    
      $("#cct").css({"display":"flex","flex-direction":"column"});
    });

    $("#test3").click(function()
    {
      $("#qsre").css('display','none');    
      $("#hue").css({"display":"flex","flex-direction":"column"});
    });

    $("#finish").click(function()
    {
      chrome.action.setPopup({popup: ""});
      window.close();  
    }) 
}); 