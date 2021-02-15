const text = document.getElementById("text_animation");

// Σπάω το text σε spans ανά γράμμα
const splitted = text.textContent.split("");
text.textContent = "";
splitted.forEach((element) => {
    text.innerHTML += "<span>" + element + "</span>";
});
// Συντομογραφικά σε μία γραμμή
// text.innerHTML = text.textContent.replace(/./g, "<span>$&</span>");

// Προσθέτω class διαδοχικά σε κάθε γράμμα
let counter = 0;
let timer = setInterval(addClass, 80);

function addClass() {
    const word = text.querySelectorAll("span")[counter];
    word.classList.add("word_effect");
    counter++;
    if (counter === splitted.length) {
        clearInterval(timer);
    }
}
