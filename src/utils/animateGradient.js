export function animateGradient(newValue, currentValue, callback) {
  let temp = currentValue;

  if (currentValue < newValue) {
    let interval = setInterval(() => {
      temp++;

      callback(temp);

      if (temp >= newValue) {
        clearInterval(interval);
      }
    });
  } else if (currentValue > newValue) {
    let interval = setInterval(() => {
      temp--;

      callback(temp);

      if (temp <= newValue) {
        clearInterval(interval);
      }
    });
  }
}
