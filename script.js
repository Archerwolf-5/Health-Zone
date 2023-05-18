document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var lastPeriod = document.getElementById('lastPeriod').value;
  var cycleLength = parseInt(document.getElementById('cycleLength').value);

  var nextPeriod = calculateNextPeriod(lastPeriod, cycleLength);
  var averageCycleLength = calculateAverageCycleLength(cycleLength);

  document.getElementById('nextPeriod').textContent = nextPeriod;
  document.getElementById('averageCycleLength').textContent = averageCycleLength;

  document.getElementById('result').classList.remove('hidden');
});

function calculateNextPeriod(lastPeriod, cycleLength) {
  var startDate = new Date(lastPeriod);
  var nextPeriodDate = new Date(startDate.getTime() + (cycleLength * 24 * 60 * 60 * 1000));
  var nextPeriodFormatted = nextPeriodDate.toDateString();
  return nextPeriodFormatted;
}

function calculateAverageCycleLength(cycleLength) {
  return cycleLength;
}
