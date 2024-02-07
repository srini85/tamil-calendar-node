import constants from "../lib/constants.js";
import calendar from "../data/calendar.js";

export default async function (event, context) {
    console.log("=== Executing Function Handler: getCalendarDetails ===");           
    const dayNumber = event.dayNumber;
    const tamilCalendarObj = calendar.find(x=>x.DayIndex == dayNumber)
    console.log(tamilCalendarObj);
    let mnth = constants.TMonth[tamilCalendarObj.TamilMonth];
    mnth = mnth.trim();
    let cal = `${constants.Varsha[tamilCalendarObj.TamilYear]} ${mnth} ${tamilCalendarObj.TamilDay} ${constants.Paksha[tamilCalendarObj.Paksha]} `;
    if (tamilCalendarObj.Tithi1 !== tamilCalendarObj.Tithi2) cal += `${constants.Tithi[tamilCalendarObj.Tithi1]}/${constants.Tithi[tamilCalendarObj.Tithi2]} `;
    else cal += `${constants.Tithi[tamilCalendarObj.Tithi1]} `;

    if (tamilCalendarObj.Nakshatra1 !== tamilCalendarObj.Nakshatra2) cal += `${constants.Nakshtra[tamilCalendarObj.Nakshatra1]}/${constants.Nakshtra[tamilCalendarObj.Nakshatra2]}`;
    else cal += `${constants.Nakshtra[tamilCalendarObj.Nakshatra1]}`;    
    return cal;
}
