const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    const celTofah = (cel) =>{
        // https://www.mathsisfun.com/temperature-conversion.html
        let fahrenheit = Math.round((cel * 9/5)+32);
        return fahrenheit; 
    }

    const fahTocel = (fah) => {
        // https://www.mathsisfun.com/temperature-conversion.html
        let celsius = Math.round((fah - 32) * 5/9);
        return celsius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}"faherient`;
    }
    else{
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}"celsius`;
    }
    }
