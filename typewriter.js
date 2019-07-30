const sentence = "hello there from lighthouse labs";


const typewriter = function(inputStr) {
  let newSent = inputStr.split("")
  let timer = 0
  let newlineTimer = newSent.length

  for (const char of newSent) {
    setTimeout(() => {
    process.stdout.write(char);
    }, timer * 50)
    timer ++
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, newlineTimer * 50)
}

typewriter(sentence);