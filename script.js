
let result = document.querySelector("h1");
let intelligence = [
    " Very Intelligent",
    "Quite Impressive",
    "Very Creative",
    "Very Sharp",
    "Very Keen",
    "Very Smart",
    "Very Penetreting",
    "Very Dumb",
    "Very Idiot"
];
function quizApp(name) {

    let randomNumber = parseInt(Math.random() * 11);
    result.innerHTML = "Dear " + name + " You are" + intelligence[randomNumber];


}
document.querySelector("button").addEventListener('click', function () {
    quizApp(document.querySelector("input").value.toUpperCase());
    document.querySelector("input").value = "";
})