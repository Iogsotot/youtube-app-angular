import { CardColorEnum } from 'src/app/models/cardColor.models';

export const getColorByDate = (inputDate: string | Date): CardColorEnum => {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(inputDate);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInDays = Math.ceil((currentDate.getTime() - targetDate.getTime()) / oneDay);
  const diffInMonths =
    (currentDate.getFullYear() - targetDate.getFullYear()) * 12 +
    (currentDate.getMonth() - targetDate.getMonth());

  if (diffInDays <= 7) {
    return CardColorEnum.BLUE;
  }
  if (diffInDays <= 30) {
    return CardColorEnum.GREEN;
  }
  if (diffInDays <= 180 || diffInMonths < 6) {
    return CardColorEnum.YELLOW;
  }
  return CardColorEnum.RED;
};
