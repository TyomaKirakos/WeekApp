const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weeksBlock = document.querySelector('.weeks-block');
let currentDay = new Date().getDay();

week.forEach((day) => {
    let weekDay = document.createElement('p');
    if (day == week[currentDay - 1]){
        weekDay.className = "currDay";
    } else if (day == "Saturday" || day == "Sunday"){
        weekDay.className = "weekend";
    } else {
        weekDay.className = "justDay";
    }
    weekDay.textContent = day;
    weeksBlock.append(weekDay);
})