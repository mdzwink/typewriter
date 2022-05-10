const sentence = 'hello there from lighthouse labs\n';

let time = 1000;
for (let char of sentence) {
  console.log(char);
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 50;
}