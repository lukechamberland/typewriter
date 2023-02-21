const alarm = function(qty) {
setTimeout(function() {
process.stdout.write('\x07');
}, qty * 1000);
  
}

alarm(3);