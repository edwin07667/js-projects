let ab=[{
    question:"Popular programming languages",
    An1:"java",
    An2:"c#",
    An3:"js",
    correct:"An3"
},
{}];
let c=document.getElementById("quizes");
let a1=document.querySelector(".label1");
let a2=document.querySelector(".label2");
let a3=document.querySelector(".label3");
let answer_check=document.querySelectorAll(".Answer1");
let b=ab[0].question;
let ab1=ab[0].An1;
let ab2=ab[0].An2;
let ab3=ab[0].An3;
c.innerText=b;
a1.innerHTML=ab1;
a2.innerHTML=ab2;
a3.innerHTML=ab3;
let sub=document.getElementById("submit");
function Answer_s(){
sub.addEventListener("click",function(event){
    event.preventDefault()
    let ans_update = answer()
    if(ans_update === ab[0].correct)
     {
      alert("correct");
    }
    else{
    alert("wrong");
    }
})
}
function answer(){
    let id_s;
    answer_check.forEach(function(answers){
     if(answers.checked === true){
        id_s=answers.id;
        }

    })
    return id_s
}
Answer_s()