function formatNumbers(number) {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixIndex = 0;
  number = typeof number === "number" ? number : Number(number);
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    suffixIndex++;
    number /= 1000;
  }
  return number.toFixed(1) + suffixes[suffixIndex];
}
export default formatNumbers;
