import getCalendarDetails from "./handlers/getCalendarDetails.mjs";

export const handler = getCalendarDetails;

console.log(await handler({dayNumber: 4}))