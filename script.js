
let languages = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "C",
    "C++",
    "JAVA",
    "PYTHON",
    "PHP",
    "REACT JS"
]
// console.log(languages.length)
index = 0;
setInterval(()=>{
    if(index >= languages.length-1){
        index=0;
    }
    document.getElementsByClassName("heading3-animation")[0].innerText = languages[index];
    index++;
    // document.getElementsByClassName("heading3-animation")[0].style.animation = "opacity 1.5s ease 1s 1 alternate-reverse;";

},2000);

