setInterval(function () {
    const fimBozo = new Date(2023, 1, 1);
    // console.log(fimBozo)
    const now = new Date();

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const distance = fimBozo - now;
    const timerDays = Math.floor(distance / day);
    const timerHours = Math.floor(distance % day / hour);
    const timerMinutes = Math.floor(distance % hour / minute);
    const timerSeconds = Math.floor(distance % minute / second)
    const timer = `Faltam ${timerDays} dias, \n${timerHours} horas, \n${timerMinutes} minutos e \n${timerSeconds} segundos \npara o fim do governo Bolsonaro.`

    document.querySelector('.text').innerText = timer;
}, 1000)