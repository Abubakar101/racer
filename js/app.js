window.onload = function () {
  /* write your code here */
  // select the button, the cars and assign them their functions
  // when click on button, ready-time starts and then the race-time starts
  // press keys to move the cars
  // when the cars reach finish line, the game stops and the timer log on of the race
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  const raceCars = document.querySelectorAll(".raceCars");
  const firstCar = document.querySelector("#first");
  const secondCar = document.querySelector("#second");
  let winningTime = true;
  button.addEventListener("click", function () {
    // count-down-timer starts i.e., 5,4,3,2,1
    const countDownTimer = document.querySelector(".timer");
    let countDown = 5;
    const timer = setInterval(function () {
      countDownTimer.style.visibility = "visible";
      countDownTimer.innerHTML = countDown;
      countDown--;
      if (countDown == -1) {
        countDownTimer.innerHTML = "Start!";
        clearInterval(timer);
        body.addEventListener("keyup", carRacing);
      }
    }, 1000); // giving 0 for test(1000)
    // game-starts /able to move cars/ and race-timer starts // finish line
    let marginPushFirst = 10;
    let marginPushSecond = 10;

    function carRacing(e) {
      // Counting the Winning Time
      if (winningTime) {
        const winner = document.querySelector(".winner");
        let raceTime = Date.now();
        interval = setInterval(function () {
          let time = Date.now() - raceTime;
          winner.style.visibility = "visible";
          winner.innerHTML = (time / 1000).toFixed(2);
        }, 100);
        winningTime = false;
      }
      // Keys A/S
      if (e.keyCode === 65 || e.keyCode === 83) {
        firstCar.style.marginLeft = marginPushFirst + "px";
        marginPushFirst += 10;
      }
      // Keys Left/Right
      else if (e.keyCode === 37 || e.keyCode === 39) {
        secondCar.style.marginLeft = marginPushSecond + "px";
        marginPushSecond += 10;
      }
      //Finish Line
      if (firstCar.style.marginLeft === "700px") {
        clearInterval(interval);
        countDownTimer.innerHTML = `First Car Won!`;
        body.removeEventListener("keyup", carRacing);

      } else if (secondCar.style.marginLeft === "700px") {
        clearInterval(interval);
        countDownTimer.innerHTML = `Second Car Won!`;
        body.removeEventListener("keyup", carRacing);


      }
    }
  });
};