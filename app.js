

const timerF = function () {
    const fimBozo = new Date('January 01 2023 00:00:00');
    const now = new Date();
    const diff = fimBozo - now;

    const timerDays = Math.floor(diff/1000/60/60/24);
    const timerHours = Math.floor(diff/1000/60/60) % 24;
    const timerMinutes = Math.floor(diff/1000/60) % 60;
    const timerSeconds = Math.floor(diff/1000) % 60;

    // const second = 1000
    // const minute = second * 60
    // const hour = minute * 60
    // const day = hour * 24

    // const distance = fimBozo - now;
    // const timerDays = Math.floor((distance / day) - 31);
    // const timerHours = Math.floor(distance % day / hour);
    // const timerMinutes = Math.floor(distance % hour / minute);
    // const timerSeconds = Math.floor(distance % minute / second)
    const timer = `Faltam ${timerDays} dias, \n${timerHours} ${timerHours === 1 ? 'hora' : 'horas'}, \n${timerMinutes} ${timerMinutes === 1 ? 'minuto' : 'minutos'} e \n${timerSeconds} ${timerSeconds === 1 ? 'segundo' : 'segundos'} \npara o fim do governo Bolsonaro.`

    //Write text on DOM
    document.querySelector('.text').innerText = timer;

    //Adjust bg color
    document.body.style.backgroundColor = `rgb(255,${timerDays+timerDays/2},${timerDays+timerDays/2})`; 
}

timerF();
setInterval(timerF, 1000)

// const dayColor = function () {
//     const fimBozo = new Date('January 01 2023 00:00:00');
//     const now = new Date();
//     const diff = fimBozo - now;

//     const timerDays = Math.floor(diff/1000/60/60/24);
//     // const second = 1000
//     // const minute = second * 60
//     // const hour = minute * 60
//     // const day = hour * 24;

//     // const distance = fimBozo - now;
//     return timerDays;
// }

