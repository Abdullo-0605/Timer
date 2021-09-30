// document.addEventListener("keypress", (data) => {
//     const inputTag = document.getElementById("input");
//     const inputValue = inputTag.value;
//     inputTag.value = inputValue + data.key;
//     // console.log(data);
// });

function onSubmitClicked() {
    clearInterval(interval); 
    console.log("submitted");
    const inputValue = document.getElementById("input-validation").value;

    try {
        validateInptut(inputValue);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("final");
    }
    validateInptut(inputValue);
}

// function validateInptut(inputValue) {
//     console.log(inputValue);
//     if(inputValue === ""){
//         throw "input not have to be empty";
//     }
//     if (inputValue === "0"){
//         throw "don't write 0";
//     }
// }

setTimeout( () => {
    console.log("time out");
}, 6000);

const interval = setInterval( () => {
    const date = new Date(Date.now());
    document.getElementById("second").innerHTML = date.getSeconds();
    console.log("interval");
}, 1000)

