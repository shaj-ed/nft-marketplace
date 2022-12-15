const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const auctionText = document.querySelector(".auction__title");

const date = new Date();

function remainsTime() {
  const present = new Date();
  let deadlineTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() + 1,
    date.getMinutes() + 10,
    date.getSeconds() + 10
  );
  const timeDiff = deadlineTime.getTime() - present.getTime();

  //   convert to miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const remainHours = zeroFormat(Math.floor((timeDiff % oneDay) / oneHour));
  const remainMinutes = zeroFormat(
    Math.floor((timeDiff % oneHour) / oneMinute)
  );
  const remainSeconds = zeroFormat(Math.floor((timeDiff % oneMinute) / 1000));

  hour.innerText = `${remainHours}:`;
  minute.innerText = `${remainMinutes}:`;
  second.innerText = remainSeconds;

  if (timeDiff < 0) {
    clearInterval(counting);
    hour.innerText = "0:";
    minute.innerText = "0:";
    second.innerText = 0;
    auctionText.innerText = "Auctions over!";
  }

  //   console.log(remainHours, remainMinutes, remainSeconds);
}

// Zero format
function zeroFormat(value) {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
}

const counting = setInterval(remainsTime, 1000);

remainsTime();
