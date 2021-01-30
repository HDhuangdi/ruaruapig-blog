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

const timeFormater2 = (fmt: string, date: Date) => {
  let ret;
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      );
    }
  }
  return fmt;
};

export { timeFormater1, timeFormater2 };
