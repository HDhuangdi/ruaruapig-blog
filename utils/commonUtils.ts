const mapObject2QueryString = (object: object) => {
  let queryString = '?';
  for (const key in object) {
    queryString += key + '=' + object[key] + '&';
  }
  return queryString.slice(0, -1);
};

export { mapObject2QueryString };
