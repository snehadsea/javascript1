const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
        //  console.log(counter);
    counter.innerHTML = 0;

   
    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof targetcount);

        const startingCount = Number(counter.innerHTML);
        
        const incr = targetCount /100;
    

        if(startingCount < targetCount)
        {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10)
        }else{
            counter.innnerHTML = targetcount;
        }

    }

    updateCounter();

    })
  

    // converting string to Number - there are several ways

    // 1.using unary plus operator
    // var n = +str;

    // 2.number constructor
    // var n = Number(str);

    // 3.parseFloat function
    // var n = parseFloat(str);