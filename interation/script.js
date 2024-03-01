let textInput = document.getElementById("input__text");
let outInput = document.getElementById("outinput__text");


function btnResult(){
    let bntCopy = document.querySelector(".retangulo__resultado__botao");
    bntCopy.classList.remove("invisible");
    let image = document.querySelector(".retangulo__resultado__img");
    image.classList.add("invisible");
    const textEncrypt = encrypt(textInput.value);
    outInput.value = textEncrypt;
    textInput.value = "";
    
}

function encrypt(parametroEncrypt){

    let textResult = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    parametroEncrypt = parametroEncrypt.toLowerCase();

    for(let i = 0; i < textResult.length; i++) {
        if(parametroEncrypt.includes(textResult[i][0])){
            parametroEncrypt = parametroEncrypt.replaceAll(textResult[i][0], textResult[i][1]);
        }
        return parametroEncrypt;
    }
}

function btnDecrypt(){
    const textDecrypt = decrypt(textInput.value);
    outInput.value = textDecrypt;
    textInput.value = "";
    let bntCopy = document.querySelector(".retangulo__resultado__botao");
    bntCopy.classList.remove("invisible");
    let image = document.querySelector(".retangulo__resultado__img");
    image.classList.add("invisible");
}

function decrypt(parametroDecrypt){

    let textResult = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    parametroDecrypt = parametroDecrypt.toLowerCase();

    for(let i = 0; i < textResult.length; i++) {
        if(parametroDecrypt.includes(textResult[i][1])){
            parametroDecrypt = parametroDecrypt.replaceAll(textResult[i][1], textResult[i][0]);
        }
        return parametroDecrypt;
    }
}

function copy(){
    outInput.select();
    navigator.clipboard.writeText(outInput.value);
    outInput.value = "";
    let image = document.querySelector(".retangulo__resultado__img");
    image.classList.remove("invisible");
    let bntCopy = document.querySelector(".retangulo__resultado__botao");
    bntCopy.classList.add("invisible");
}
