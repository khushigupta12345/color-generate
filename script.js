const getColor = () => {
    //(16)hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    //clickboard(automatically copy the color-code u can peste anywhere)
    navigator.clipboard.writeText(randomCode);
}
//event call(clickelable)
document.getElementById("btn").addEventListener("click", getColor)

//initial call (jaise hi page load hoga)
getColor();