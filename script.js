
let result = document.querySelector("h1");

function quizApp(name) {

    let randomNumber = parseInt(Math.random() * 11);

    if (randomNumber === 1) {
        result.innerHTML = name + "You are very Intelligent"
    } else if (randomNumber === 2) {
        result.innerHTML = name + "You are quite Impressive"
    } else if (randomNumber === 3) {
        result.innerHTML = name + "You are very Creative"
    } else if (randomNumber === 4) {
        result.innerHTML = name + "You are very Sharp"
    } else if (randomNumber === 5) {
        result.innerHTML = name + "You are very Keen"
    } else if (randomNumber === 6) {
        result.innerHTML = name + "You are very Smart"
    } else if (randomNumber === 7) {
        result.innerHTML = name + "You are very Retard"
    } else if (randomNumber === 8) {
        result.innerHTML = name + "You are very Penetreting"
    } else if (randomNumber === 9) {
        result.innerHTML = name + "You are very Dumb"
    } else if (randomNumber === 10) {
        result.innerHTML = name + "You are very Idiot"
    }

}
document.querySelector("button").addEventListener('click',function(){
    quizApp(document.querySelector("input").value);
    document.querySelector("input").value = "";
})