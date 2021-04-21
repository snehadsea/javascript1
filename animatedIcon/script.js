// {/* <span id="temp" class="fa"></span> */}

//here we dont use themometer icon we will be using 
// thermometer unicode eg:&#x1F321 

const tempLoad = () => { 
  let temp = document.getElementById('temp1');
    temp.innerHTML = "&#xf2cb";
    // temp.innerHTML = "&#xf2c8";

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#f8b627";
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031"
    }, 4000);
}
  tempLoad();

    // again calling the function - infinite loops
  setInterval(tempLoad, 5000);