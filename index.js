import getCalendarDetails from "./handlers/getCalendarDetails.mjs";

export const handler = getCalendarDetails;

// UNCOMMENT FOR TEST
//console.log(await handler({dayNumber: 4}))