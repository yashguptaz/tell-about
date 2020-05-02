function parseISOString(s) {
  var b = s.split(/\D+/);
  const dateObj = new Date(
    Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]),
  );
  newDate = dateObj.toDateString();
  return newDate;
}

module.exports = parseISOString;
