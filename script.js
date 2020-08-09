function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var b = 'stop';

async function demo() {
  
  b = 'stop';
  
  document.getElementById("clickme").hidden = true;

  document.getElementById("winner").hidden = false;
  
  document.getElementById("redo").hidden = true;

  document.getElementById("winner").innerHTML =
    "<span style='font-size: 0.7em'>Let me thonk 🤔</span>";

  let array = ["sam", "amogh", "chris", "vera", "sarthak"];

  await sleep(2000);

  const randomElement = array[Math.floor(Math.random() * array.length)];

  console.log(randomElement);

  document.getElementById("winner").innerHTML = randomElement;

  let a = baffle(document.getElementById("winner"), {
    // default options
    characters: "abcdefghijklmnopqrstuvwxyz",
    speed: 950 // animation speed
  });

  a.once();

  a.reveal(50000);
  
  var b = '';

  

  function checkFlag() {
    if (document.getElementById("winner").innerHTML != randomElement) {
      window.setTimeout(
        checkFlag,
        100
      ); /* this checks the flag every 100 milliseconds*/
    } else {
      confettiOverload();
      document.getElementById("redo").hidden = false;
    }
  }
  checkFlag();
}


function confettiOverload() {
  var duration = 15 * 500;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    );
  }, 250);
}
