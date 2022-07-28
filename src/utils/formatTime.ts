import { format, intervalToDuration } from 'date-fns';

export const arrivalTime = (date: string, duration: number): string => {
  return format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
};

export const allTime = (data: string, duration: number): string => {
  const interval = intervalToDuration({
    start: new Date(data),
    end: new Date(new Date(data).getTime() + duration * 60000),
  });
  return `${interval.hours}ч ${interval.minutes}`;
};

export const transferNumber = (data: number): string => {
  if (data === 0) {
    return 'пересадок';
  }
  if (data === 1) {
    return 'пересадка';
  }
  return 'пересадки';
};
