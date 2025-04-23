import { DatePipe } from "@angular/common"

const datePipe = new DatePipe('en-US');
export const currentDate = datePipe.transform(new Date(), "yyyy-MM-dd");

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);
export const futureDateFormatted = datePipe.transform(futureDate, "yyyy-MM-dd");

