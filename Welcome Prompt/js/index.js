let failed;
let passed;
let total;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;

function result(){
    passed = Number(a+c+e+g+i);
    failed = Number(b+d+f+h+j);
    Total = Number(a+c+e+g+i) *20;
    document.getElementById("failed").innerHTML = "Number of questions incorrect:" + "" + failed;
    document.getElementById("passed").innerHTML = "Number of questions correct:" + "" + passed;
    document.getElementById("Total").innerHTML = "Total Score :" + "" + Total + "%";
    }
    

function check1(){
    let q1;
    q1 = document.getElementById("question2").checked;

    if (q1 == true ){
        document.getElementById("qst1").innerHTML = " &#10004 Correct!.";
        document.getElementById("qst1").style.color ="green";
        a=1;
    }
    else{
        document.getElementById("qst1").innerHTML="&#10060 Incorrect!.";
        document.getElementById("qst1").style.color="#f00";
        b=1;

    }

}
function check2(){
    let q2;
    q2 = document.getElementById("question8").checked;

    if(q2 == true){
        document.getElementById("qst2").innerHTML ="&#10004 Correct!.";
        document.getElementById("qst2").style.color ="green";
        c=1;

    }

    else{
        document.getElementById("qst2").innerHTML ="&#10060 Incorrect!.";
        document.getElementById("qst2").style.color ="#f00";
        d=1;
    }

}

function check3(){
    let q3
    q3 = document.getElementById("question11").checked;

    if (q3== true ){
        document.getElementById("qst3").innerHTML = " &#10004 Correct!.";
        document.getElementById("qst3").style.color ="green";
        e=1;
    }
    else{
        document.getElementById("qst3").innerHTML="&#10060 Incorrect!.";
        document.getElementById("qst3").style.color="#f00";
        f=1;

    }

}
function check4(){
    let q4
    q4 = document.getElementById("question27").checked;

    if (q4 == true ){
        document.getElementById("qst4").innerHTML = " &#10004 Correct!.";
        document.getElementById("qst4").style.color ="green";
        g=1;
    }
    else{
        document.getElementById("qst4").innerHTML="&#10060 Incorrect!.";
        document.getElementById("qst4").style.color="#f00";
        h=1;

    }

}
function check5(){
    let q5
    q5 = document.getElementById("question22").checked;

    if (q5 == true ){
        document.getElementById("qst5").innerHTML = " &#10004 Correct!.";
        document.getElementById("qst5").style.color ="green";
        i=1;
    }
    else{
        document.getElementById("qst5").innerHTML="&#10060 Incorrect!. ";
        document.getElementById("qst5").style.color="#f00";
        j=1;

    }

}
 