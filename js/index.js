
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";






function scrambleText(event){

    let iterations = 0;
    let codenameLength = event.target.dataset.value.length;

    const interval = setInterval(() =>{
    let codename = event.target.innerText.split("").map((letter,index) =>{
        if(index <= iterations ) {
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];

    } );
    event.target.innerText = codename.join("");
    console.log ("updated codename is: " + codenameLength);

    if(iterations > codenameLength) clearInterval(interval);
    iterations += 1/5;

}, 30 );

}


document.querySelector("#codename").onmouseover = scrambleText;
