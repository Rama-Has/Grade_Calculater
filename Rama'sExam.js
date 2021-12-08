"use strict";

(function(){

    window.addEventListener('load', initial);

    let compute = document.getElementById("compute");
    let clear = document.getElementById("clear");
    let earned = document.getElementsByClassName("earned");
    let realMark = document.getElementsByClassName("max");
    let resultArea = document.getElementById("resultArea");
    let curve  = document.getElementById("curve");
    let earnTotal=0;
    let maxTotal = 0 ;
    let per = 0;

    function initial(){
        compute.addEventListener('click', percentage);
        curve.addEventListener('click',curveByFive);
        clear.addEventListener('click', clearAll);
    }

    function percentage(){
        for( let i=0; i< earned.length; i++){
           earnTotal = earnTotal + Number(earned[i].value);
        }
        
        for( let i=0; i< realMark.length; i++){
            maxTotal = maxTotal + Number(realMark[i].value);
        }

        per = (earnTotal/maxTotal)*100;
        let resultDiv = document.createElement('div');
        let re = document.createElement('p');
        re.innerHTML = per;
        if(per >= 60){
            resultDiv.className = "pass";
        }else{
            resultDiv.className = "fail";  
        }
        resultDiv.appendChild(re);
        resultArea.appendChild(resultDiv);
        maxTotal = 0;
        earnTotal = 0;
    }
    
    function curveByFive(){
        per = per +5;
        let resultDiv = document.createElement('div');
        let re = document.createElement('p');
        re.innerHTML = per;
        if(per >= 60){
            resultDiv.className = "pass";
        }else{
            resultDiv.className = "fail";  
        }
        resultDiv.appendChild(re);
        resultArea.appendChild(resultDiv);
    }

    $(document).ready(function(){
        $("#clear").click(function(){
         $("#resultArea div").hide();
        });
      });
})();