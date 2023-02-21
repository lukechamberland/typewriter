const sentence = "hello there from lighthouse labs\n";

let timeout = 50;
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  }, timeout);
  timeout += 50;
}