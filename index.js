const translateBtn = document.querySelector("#translate-btn");

const input = document.querySelector("textarea");

const divOutput = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/minion.json";

const constructURL = (text) => {
    return `${url}?text=${text}`;
};

const translateHandler = () => {
    const text = input.value;

    fetch(constructURL(text))
        .then((response) => response.json())
        .then((translatedInput) => {
            console.log(translatedInput);
            divOutput.innerText = translatedInput.contents.translated;
        })
        .catch((error) => {
            console.log(error);
            alert("Please try again after some time");
        });
};

translateBtn.addEventListener("click", translateHandler);
