

const timerF = function () {
    const fimBozo = new Date(2023, 1, 1);
    // console.log(fimBozo)
    console.log(fimBozo.getDate())
    const now = new Date();

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const distance = fimBozo - now;
    const timerDays = Math.floor((distance / day) - 31);
    console.log(distance/day)
    const timerHours = Math.floor(distance % day / hour);
    const timerMinutes = Math.floor(distance % hour / minute);
    const timerSeconds = Math.floor(distance % minute / second)
    const timer = `Faltam ${timerDays} dias, \n${timerHours} ${timerHours === 1 ? 'hora' : 'horas'}, \n${timerMinutes} ${timerMinutes === 1 ? 'minuto' : 'minutos'} e \n${timerSeconds} ${timerSeconds === 1 ? 'segundo' : 'segundos'} \npara o fim do governo Bolsonaro.`

    document.querySelector('.text').innerText = timer;

    return timerDays;
}

timerF();
setInterval(timerF, 1000)

const dayColor = function () {
    const fimBozo = new Date(2023, 1, 1);
    
    const now = new Date();

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24;

    const distance = fimBozo - now;
    return Math.floor(distance / day);
}

document.body.style.backgroundColor = `rgb(255,${dayColor()},${dayColor()})`; 