type timeFormater1Option = {
  day?: boolean;
  hour?: boolean;
  min?: boolean;
  sec?: boolean;
};

const timeFormater1 = (
  startTime: number,
  nowTime: number,
  option: timeFormater1Option
): string => {
  let diffTime = nowTime - startTime;
  let day = Math.floor(diffTime / 1000 / 3600 / 24);
  let hour = Math.floor((diffTime - 24 * 3600 * 1000 * day) / 1000 / 3600);
  let min = Math.floor(
    (diffTime - 24 * 3600 * 1000 * day - 3600 * 1000 * hour) / 1000 / 60
  );
  let sec = Math.floor(
    (diffTime - 24 * 3600 * 1000 * day - 3600 * 1000 * hour - 1000 * 60 * min) /
      1000
  );
  if (option.day && !option.hour && !option.min && !option.sec) {
    return `${day} 天`;
  }
  if (option.day && option.hour && !option.min && !option.sec) {
    return `${day} 天 ${hour} 时`;
  }
  if (option.day && option.hour && option.min && !option.sec) {
    return `${day} 天 ${hour} 时 ${min} 分`;
  }
  if (option.day && option.hour && option.min && option.sec) {
    return `${day} 天 ${hour} 时 ${min} 分 ${sec} 秒`;
  }
  return '';
};

export { timeFormater1 };
