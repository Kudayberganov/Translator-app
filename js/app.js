let inp1 = document.getElementById("textarea1");
let inp2 = document.getElementById("textarea2");
const btn = document.querySelector(".btn");
const exchange = document.querySelector(".exchange");
const option = document.querySelectorAll("select");
const select1 = document.querySelector(".options1");
const select2 = document.querySelector(".options2");
const copy1 = document.querySelector(".copy1")
const copy2 = document.querySelector(".copy2")

option.forEach((tag, id) => {
    for (const country_code in countries) {
        let selected;
        if (id == 0 && countries[country_code] == "en") {
            selected = "selected";
        } else if (id == 1 && countries[country_code] == "uz") {
            selected = "selected";
        }
        let option = `<option value="${countries[country_code]}" ${selected}>${country_code}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

btn.addEventListener("click", () => {
    let text = inp1.value
    let translateFrom = option[0].value
    let translateTo = option[1].value
    let api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`

    fetch(api).then(response => response.json()).then(data => {
        inp2.innerHTML = data.responseData.translatedText
    });
});

exchange.addEventListener('click', () => {
    let text = inp1.value
    inp1.value = inp2.value
    inp2.value = text;
    let lang = select1.value
    select1.value = select2.value
    select2.value = lang
})


// COPY PASTE SECTION 
// copy1.addEventListener("click", () => {
//     inp1.select();
//     inp1.setSelectionRange(0, 99999); 
//     navigator.clipboard.writeText(inp1.value);
// })

// copy2.addEventListener("click", () => {
//     inp2.select();
//     inp2.setSelectionRange(0, 99999); 
//     navigator.clipboard.writeText(inp2.value);
// })
