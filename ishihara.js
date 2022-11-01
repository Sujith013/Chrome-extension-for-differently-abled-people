function calcScore(prm)
{
    var label = $("#ishId")[0].src;
    var lbl = label[label.length-7];
    var vl = $("#ishNum").val();

    if(lbl==vl)
    {
        if(prm==1)
        {
        chrome.storage.sync.get(["score1"], function(result) {
            var s = result.score1+1;
            chrome.storage.sync.set({score1:s}, function() {});    
        })
        }

        else
        {
        chrome.storage.sync.get(["score2"], function(result) {
            var s = result.score2+1;
            chrome.storage.sync.set({score2:s}, function() {});    
        })
        }
    }
}

function setVal(params)
{
    var max = 9;
    var min=0;

    var r = Math.random() * (max - min) + min;
    var b = Math.random() * (max - min) + min;

    var srcName = "data/"+params+"/"+Math.ceil(r)+"_"+Math.ceil(b)+".png";

    $("#ishId")[0].src = srcName;
}

$(document).ready(function(){
    
    $("#test1").click(function()
    {    
        setVal("red-green");
        chrome.storage.sync.set({ishNextVal:1}, function() {});
        chrome.storage.sync.set({score1:0}, function() {});
        chrome.storage.sync.set({score2:0}, function() {});

        $("#ishNum").focus();
    });

    $("#ishNext").click(function(){

        chrome.storage.sync.get(["ishNextVal"], function(result) {
            if(result.ishNextVal<10)
            {
                calcScore(1);
                setVal("red-green");
                q = result.ishNextVal+1;
                chrome.storage.sync.set({ishNextVal:q}, function() {});

                $("#ishNum").focus();
                $("#ishNum").val(null);
            }

            else if(result.ishNextVal>=10 && result.ishNextVal<20)
            {
                calcScore(2);
                setVal("blue-yellow");
                q = result.ishNextVal+1;
                chrome.storage.sync.set({ishNextVal:q}, function() {});

                $("#ishNum").focus();
                $("#ishNum").val(null);
            }

            else
            {
                calcScore(2);
                
                chrome.storage.sync.get(["score1","score2"], function(result) {

                    var displayMsg;

                    if(result.score1<5 && result.score2<5)
                    {
                        displayMsg="Sorry!!...You seem to have complete color blindness";
                    }

                    else if(result.score1<result.score2)
                    {
                        var prb = result.score1;

                        if(prb>=8)
                        {
                            displayMsg = "Your eyes are perfect. No worries!!"; 
                        }

                        else if(prb<8 && prb>=5)
                        {
                            displayMsg = "You have a mild red-green color blindness";
                        }

                        else
                        {
                            displayMsg = "Sorry!!..You have a severe red-green color blindness";
                        }
                    }

                    else
                    {
                        var prb = result.score2;

                        if(prb>=8)
                        {
                            displayMsg = " No worries!!...Your eyes are perfect."; 
                        }

                        else if(prb<8 && prb>=5)
                        {
                            displayMsg = "You have a mild blue-yellow color blindness";
                        }

                        else
                        {
                            displayMsg = "Sorry!!..You have a severe blue-yellow color blindness";
                        }
                    }

                    $("#ishihara").css("display","none");
                    $("#bldRes").html(displayMsg);
                    $("#bldRes1").css({"display":"flex","flex-direction":"column"});
                })
            }
        })
    });

});