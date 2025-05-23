//your JS code here. If required.
const output = document.getElementById('output');

// Record start times for each promise
const startTimes = [performance.now(), performance.now(), performance.now()];

const hey = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

const world = new Promise((resolve) => {
  setTimeout(() => {
    resolve("World");
  }, 2000);
});

const fuckOff = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fuckoff");
  }, 3000);
});

const allStart = performance.now();

Promise.all([
  hey.then(() => (performance.now() - startTimes[0]) / 1000),
  world.then(() => (performance.now() - startTimes[1]) / 1000),
  fuckOff.then(() => (performance.now() - startTimes[2]) / 1000)
]).then(times => {
  const total = (performance.now() - allStart) / 1000;
  output.innerHTML = "";

  // Promise 1
  let row = document.createElement("tr");
  row.innerHTML = `<td>Promise 1</td><td>${times[0].toFixed(3)}</td>`;
  output.appendChild(row);

  // Promise 2
  row = document.createElement("tr");
  row.innerHTML = `<td>Promise 2</td><td>${times[1].toFixed(3)}</td>`;
  output.appendChild(row);

  // Promise 3
  row = document.createElement("tr");
  row.innerHTML = `<td>Promise 3</td><td>${times[2].toFixed(3)}</td>`;
  output.appendChild(row);

  // Total
  row = document.createElement("tr");
  row.innerHTML = `<td>Total</td><td>${total.toFixed(3)}</td>`;
  output.appendChild(row);
});