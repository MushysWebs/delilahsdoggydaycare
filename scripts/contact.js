// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.querySelector("#submit-button").addEventListener("click", clickFunction);

function clickFunction() {
    let contactPage = document.querySelector("#contact-page");   /*assinging the selected value to contactPage*/
    contactPage.innerHTML = "<p> Thank you for your message </p>";    /*assinging the new print statement when clicked*/
    contactPage.querySelector("p").style.fontSize = "24px";     /*changing the font to 24*/
}

