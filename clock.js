function buildTimer(probs = {
}){

    if(probs.timerID == undefined) probs.timerID = 'timer';
    if(probs.setFont == undefined) probs.setFont = 'Arial';
    if(probs.setFontSize == undefined) probs.setFontSize = '20px';
    if(probs.setFontColor == undefined) probs.setFontColor = '#FFF';
    if(probs.setBackgroundColor == undefined) probs.setBackgroundColor = '#333';
    if(probs.setSpaceBetweenTimeAndDate == undefined) probs.setSpaceBetweenTimeAndDate = '40px';
    if(probs.withShadow == undefined) probs.withShadow = false;

    let timer = document.getElementById(probs.timerID);

    let uhrzeit = document.createElement('div');
    uhrzeit.id = 'uhrzeit';
    uhrzeit.style.marginRight   = probs.setSpaceBetweenTimeAndDate;

    let datum = document.createElement('div');
    datum.id = 'datum'

    timer.appendChild(uhrzeit);
    timer.appendChild(datum);

    timer.style.fontFamily              = probs.setFont;
    timer.style.fontSize                = probs.setFontSize;
    timer.style.display                 = 'grid';
    timer.style.gridTemplateColumns     = '1fr 1fr';
    timer.style.gridColumnGap           = probs.setSpaceBetweenTimeAndDate;
    timer.style.color                   = probs.setFontColor;
    timer.style.background              = probs.setBackgroundColor; 
    timer.style.padding                 = '10px 20px';
    timer.style.borderTopLeftRadius     = '10px';
    timer.style.borderTopRightRadius    = '10px';

    if(probs.withShadow){
        timer.style.boxShadow = '0 0 10px rgba(0,0,0,0.8)'
    }

    setInterval(()=>{

        let myDate      = new Date();
        let day         = myDate.getDate();
        let monthNumber = myDate.getMonth();
        let year        = myDate.getFullYear();
        let hour        = myDate.getHours();
        let minut       = myDate.getMinutes();

        let dayStr      = day < 10 ? `0${day}` : day;
        let minStr      = minut < 10 ? `0${minut}` : minut;
        let stuStr      = hour < 10 ? `0${hour}` : hour;
        
        let monthName   = Ger_Month[monthNumber]

        uhrzeit.textContent = `${stuStr}:${minStr}`
        datum.textContent   = `${dayStr} ${monthName} ${year}`    

    },1000)

    let Ger_Month = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
}