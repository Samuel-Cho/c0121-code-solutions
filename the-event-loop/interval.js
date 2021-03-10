let count = 3;

const countdown = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  } else {
    console.log(count);
    count--;
  }
};

let intervalID = setInterval(countdown, 1000);
