/*
   ----- Start 1. FUNCTION FOR ANIMATION PAGE -----
*/
function showList(effName) {
    //toggle previous element
    var effId = document.querySelector('.content-hidden.show').id;
    var elPrev = document.getElementById(effId);
    elPrev.classList.toggle("hidden");
    elPrev.classList.toggle("show");

    //toggle selected element
    var elNext = document.getElementById(effName);
    elNext.classList.toggle("hidden");
    elNext.classList.toggle("show");
}

const buttons = document.querySelectorAll("[data-copy-id]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        var resetCopy = document.getElementsByClassName('effect-sample');
        // var resetCopy = document.querySelectorAll(".effect-sample");
        for (let i = 0; i < resetCopy.length; i++) {
            resetCopy[i].classList.remove("success");
        }

        const copyId = button.dataset.copyId;
        // console.log('copy-id: ', copyId);

        navigator.clipboard.writeText(copyId);
        // alert("'" + copyId + "' copied to clipboard")
        
        const copyMsg = document.querySelector("[data-copy-id='" + copyId + "']")
        copyMsg.classList.toggle("success");
        // copyMsg.style.display = "block";

        window.setTimeout(function () {
            copyMsg.classList.remove("success");
        }, 10000);
    })
})

/*
   ----- End of 1. FUNCTION FOR ANIMATION PAGE -----
*/