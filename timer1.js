function setAlarm(time) {
  setTimeout(() => {
    process.stdout.write('\x07'); // Beep!
  }, time * 1000);
}

// Get command line arguments excluding the first two (node command and script file)
const args = process.argv.slice(2);

// Set alarms
args.forEach((arg) => {
  const time = parseInt(arg);
  if (isNaN(time) || time < 0) {
    return;
  } 
  setAlarm(time);
  console.log(`Beep at ${time} seconds.`);

});

if (args.length === 0) {
  return;
};



