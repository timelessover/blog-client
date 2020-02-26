export const timestampToTime = (
  timestamp: Date | any,
  dayMinSecFlag: boolean
) => {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D =
    date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
  const h =
    date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
  const m =
    date.getMinutes() < 10
      ? "0" + date.getMinutes() + ":"
      : date.getMinutes() + ":";
  const s =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (!dayMinSecFlag) {
    return Y + M + D;
  }
  return Y + M + D + h + m + s;
};

export const getDateDiff = (timestamp: number): string => {
  const dateTimeStamp = new Date(timestamp).getTime();
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  let monthC =  diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  let result;
  if (monthC >= 1) {
    result = `${Math.floor(monthC)}月前`;
  } else if (weekC >= 1) {
    result = `${Math.floor(weekC)}周前`;
  } else if (dayC >= 1) {
    result = `${Math.floor(dayC)}天前`;
  } else if (hourC >= 1) {
    result = `${Math.floor(hourC)}小时前`;
  } else if (minC >= 1) {
    result = `${Math.floor(minC)}分钟前`;
  } else result = "刚刚";
  return result;
};
