"using strict";
let ok = true;
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
if (sessionStorage.getItem("message") == "true") {
  document.querySelector(".next").classList.add("not-visible");
}
if (sessionStorage.getItem("refresh") == null) {
  sessionStorage.setItem("refresh", "lol");
  window.location.reload();
}
document.querySelector(".next").addEventListener("click", function () {
  document.querySelector(".next").classList.add("not-visible");
  sessionStorage.setItem("message", "true");
  window.location.reload();
});
const para1 =
  "woman empowerment is crucial to achieve gender equality and create a world where women have the same opportunities and rights as men women should have the freedom to make their own choices and pursue their passions without being held back by societal expectations or gender stereotypes women are powerful and capable of achieving great things and we need to support and uplift them in every way possible women face numerous challenges including discrimination gender based violence and unequal pay and it is up to all of us to stand up against these injustices and fight for change we must empower women by providing access to education healthcare and economic opportunities and by creating a safe and supportive environment where women can thrive and succeed through woman empowerment we can create a brighter future for all and build a more equal and just society where women are valued and respected as equal members of society";
const para2 =
  "in todays technology driven world we are constantly surrounded by screens and devices we rely on our smartphones tablets laptops and other gadgets to stay connected informed and entertained while technology has undoubtedly improved our lives in many ways it has also created a culture of constant connectivity and information overload this is where digital detoxification comes in a process of taking a break from digital devices and technology to reset recharge and find balance in our lives digital detoxification is a term used to describe the digital disconnection for a period of time it is a of disconnecting from technology and digital devices it is a of the taking a break from the constant stream of information and stimulation that surrounds us and reconnecting with the world around us digital detoxification can take many forms from simply turning off your smartphone for a few hours to going completely off the grid for a week or more the benefits of digital detoxification are numerous firstly it helps to reduce stress and anxiety when we are constantly connected to technology we are bombarded with notifications emails and messages which can cause us to feel overwhelmed and stressed taking a break from technology can help us to experience less stress and greater peace of mind secondly digital detoxification can help improve sleep quality blue light emitted by screens can disrupt our sleep patterns and lead to sleep disturbances and insomnia taking a break from screens can help us to sleep better thirdly digital detoxification can help improve relationships when we are constantly connected to technology we are often physically present but mentally distracted from the present moment taking a break from technology can help us to be more present and engaged in our relationships with family and friends and finally digital detoxification can help us to be more productive when we are constantly multitasking and checking notifications we are unable to focus on any one activity for an extended period of time by taking a break from technology we are able to focus better and be more productive which can lead to a better quality of work and life";
const para3 =
  "hinduism is one of the oldest religions in the world it originated in india and is practiced by millions of people today it is a diverse and complex religion with a vast array of beliefs and practices hindus believe in a single supreme being called brahman who is the ultimate reality and source of all existence they also believe in multiple deities who represent various aspects of the supreme being and are worshipped in temples and at home hinduism has a rich history and literature including the vedas upanishads puranas and epics such as the ramayana and mahabharata hindus follow a code of conduct called dharma which includes virtues such as honesty compassion and self control hinduism also includes a system of caste which divides society into four main groups based on occupation and social status hindus believe in reincarnation and karma which is the law of cause and effect based on ones actions in this life hindus strive to attain liberation from the cycle of reincarnation and merge with the supreme being through spiritual practice and devotion to god ";
const para4 =
  "hinduism is an ancient religion that has a rich and diverse set of practices it is often referred to as sanatana dharma which means eternal law or eternal truth the religion has no single founder no single scripture and no single set of beliefs rather it is a complex and diverse tradition that has evolved over thousands of years some of the key practices followed in hinduism include the worship of deities the performance of rituals the observance of fasts and festivals the practice of yoga and meditation and the study of sacred texts the worship of deities is central to hinduism and there are countless gods and goddesses that are worshipped across india and beyond each deity represents a different aspect of the divine and devotees often choose a particular deity to focus their worship on the performance of rituals is also an important part of hinduism and there are many different types of rituals that are performed for various purposes such as to seek blessings or to purify oneself fasting is another common practice in hinduism and there are many different types of fasts that are observed for various reasons such as to seek the blessings of a deity or to purify oneself festivals are also an important part of hinduism and there are many different festivals that are celebrated throughout the year each with its own unique customs and traditions yoga and meditation are also important practices in hinduism and are believed to help individuals connect with the divine and achieve spiritual growth finally the study of sacred texts such as the vedas the upanishads and the bhagavad gita is also an important part of hinduism and is believed to help individuals gain knowledge and wisdom about the nature of reality and the self";
function generateText() {
  const randomPara = Math.trunc(Math.random(0) * 4 + 1);
  let contentString;
  if (randomPara == 1) {
    contentString = para1.split(" ");
  } else if (randomPara == 2) {
    contentString = para2.split(" ");
  } else if (randomPara == 3) {
    contentString = para3.split(" ");
  } else {
    contentString = para4.split(" ");
  }
  const endString = contentString.length - 25;
  const randomSentance = Math.trunc(Math.random(0) * endString + 1);
  const getArray = contentString.slice(randomSentance, randomSentance + 25);
  return getArray;
}
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    const placeText = generateText().join(" ");
    document.querySelector(".type-section").textContent = placeText;
    window.location.reload();
  }
});
document.querySelector(".profilePic").addEventListener("click", function (e) {
  const placeText = generateText().join(" ");
  document.querySelector(".type-section").textContent = placeText;
  window.location.reload();
});
//

let textData = document.querySelector(".type-section");
const textInput = 0; //note
let textDataString = generateText().join(" ");
textData.textContent = "";
let textDataSplit = textDataString.split(" ");
let textDataSplitFilter1 = textDataSplit.filter(function (n) {
  return n != "" && n != "\n";
});
let chars = textDataSplitFilter1.length;
let individualLetters = textDataSplitFilter1.join(" ");
let individualLettersFinal = individualLetters.split("");
let last = individualLettersFinal.length;
individualLettersFinal.forEach((letter, index) => {
  let create = document.createElement("a");
  create.classList.add(`letter${String(index + 1)}`);
  create.textContent = letter;
  textData.appendChild(create);
});
window.addEventListener("resize", function () {
  window.location.reload();
});
let a = 0;
console.log(a++);
//cursor
// const textDataCursor = document.querySelector(".type-cursor");
// const textDataStringCursor = textDataCursor.textContent;
// textDataCursor.textContent = "";
// const textDataSplitCursor = textDataStringCursor.split(" ");
// const textDataSplitFilter1Cursor = textDataSplitCursor.filter(function (n) {
//   return n != "" && n != "\n";
// });

// const individualLettersCursor = textDataSplitFilter1Cursor.join(" ");
// const individualLettersFinalCursor = individualLettersCursor.split("");
// individualLettersFinalCursor.forEach((letter, index) => {
//   const create = document.createElement("a");
//   create.classList.add(`cursor${String(index + 1)}`);
//   create.textContent = letter;
//   textDataCursor.appendChild(create);
// });

let indexLetter = 1;
let cont = 0;
let written = "";
const fixPosition = document
  .querySelector(`.letter1`)
  .getBoundingClientRect().left;
const fixPositiontop = document
  .querySelector(`.letter1`)
  .getBoundingClientRect().top;
document.querySelector(".type-cursor").style.left = `${fixPosition - 6}px`;
document.querySelector(".type-cursor").style.top = `${fixPositiontop}px`;

const showCurn = function (indexLetter) {
  if (1) {
    const fixPosition = document
      .querySelector(`.letter${indexLetter}`)
      .getBoundingClientRect().left;
    const fixPositiontop = document
      .querySelector(`.letter${indexLetter}`)
      .getBoundingClientRect().top;
    document.querySelector(".type-cursor").style.left = `${fixPosition + 6}px`;
    document.querySelector(".type-cursor").style.top = `${fixPositiontop}px`;
  }
};
const rank = document.querySelector(".rank");
if (localStorage.getItem("score") != null) {
  let calcRank = localStorage
    .getItem("score")
    .split(" + ")
    .reduce(function (total, cur) {
      return total < Number(cur) ? (total = Number(cur)) : (total = total);
    }, 0);
  if (calcRank > 45 && calcRank <= 60) {
    rank.textContent = "S";
  } else if (calcRank > 60 && calcRank <= 80) {
    rank.textContent = "G";
  } else if (calcRank > 80) {
    rank.textContent = "P";
  } else {
    rank.textContent = "L";
  }
}

// let cursorx = 1;
// let prevLetter = document.querySelector(`.cursor${1}`).textContent;
// document.querySelector(`.cursor${1}`).classList.add("show-cursor");
// document.querySelector(`.cursor${cursorx}`).textContent = "_";

// const showCur = (indexLetter, check) => {
//   const crr = document.querySelector(`.cursor${indexLetter}`);
//   if (check) {
//     document.querySelector(`.cursor${cursorx}`).classList.remove("show-cursor");
//     document.querySelector(`.cursor${cursorx}`).textContent = " <br>";
//     //console.log("hi" + prevLetter);
//     cursorx++;
//     const cdata = crr.textContent;
//     document.querySelector(`.cursor${cursorx}`).classList.add("show-cursor");
//     prevLetter = document.querySelector(`.cursor${cursorx}`).textContent;
//     document.querySelector(`.cursor${cursorx}`).textContent = "_";
//   } else {
//     document.querySelector(`.cursor${cursorx}`).classList.remove("show-cursor");
//     document.querySelector(`.cursor${cursorx}`).textContent = prevLetter;
//     cursorx++;
//     const cdata = crr.textContent;
//     document.querySelector(`.cursor${cursorx}`).classList.add("show-cursor");
//     prevLetter = document.querySelector(`.cursor${cursorx}`).textContent;
//     document.querySelector(`.cursor${cursorx}`).textContent = "_";
//   }
// };
// let timer = () => {
//   let cont = document.querySelector(".timer-count").textContent;
//   cont++;
//   document.querySelector(".timer-count").textContent = cont;
// };
// const setTimer = (checkTime) => {
//   setInterval(timer(), 1000);
//   if (!checkTime) {
//     timer = () => {};
//   }
// };
let calcSpeed = "";
let speedRecordString;
let speed = 0;
let ms = 0;
let s = 0;
errors = 0;
window.addEventListener("keydown", function (e) {
  if (
    (e.keyCode > 64 && e.keyCode < 91) ||
    e.keyCode == 8 ||
    (e.keyCode > 96 && e.keyCode < 123) ||
    e.key == " " ||
    e.key == "," ||
    e.key == "."
  ) {
    if (e.key === individualLettersFinal[cont]) {
      let kee = document.querySelector(`.letter${indexLetter}`).textContent;
      written = written + kee;
      let words = written.split(" ").length;
      let innerTime = document.querySelector(".timer-count").textContent;
      if (indexLetter == last) {
        speedRecordString = localStorage.getItem("score");
        accuracyRecordString = localStorage.getItem("acc");

        if (accuracyRecordString == null) {
          calcAcc = "" + `${100 - Math.floor((errors / last) * 100)}`;
          localStorage.setItem("acc", calcAcc);
        } else {
          calcAcc =
            accuracyRecordString +
            " + " +
            `${100 - Math.floor((errors / last) * 100)}`;
          localStorage.setItem("acc", calcAcc);
        }

        if (speedRecordString == null) {
          calcSpeed = "" + `${((words / innerTime) * 60).toFixed(1)}`;
          localStorage.setItem("score", calcSpeed);
        } else {
          calcSpeed =
            speedRecordString +
            " + " +
            `${((words / innerTime) * 60).toFixed(1)}`;
          localStorage.setItem("score", calcSpeed);
        }
      }
      if (words > 0) {
        document.querySelector(".typing-speed").textContent = `Speed : ${(
          (words / innerTime) *
          60
        ).toFixed(1)} WPM`;
      }
      if (cont == 0 || indexLetter == last) {
        setInterval(() => {
          if (cont < last) {
            ms++;
            if (ms > 9) {
              ms = 0;
              s++;
            }
            document.querySelector(".timer-count").textContent = `${s}.${ms}`;
          }
        }, 100);
      }
      cont++;
      const selected = document.querySelector(`.letter${indexLetter}`);
      showCurn(indexLetter);
      indexLetter++;
      selected.classList.add("right");
    } else {
      const selected = document.querySelector(`.letter${indexLetter}`);
      selected?.classList.add("wrong");
      errors++;
      const accuracy = Math.floor((errors / last) * 100);
      document.querySelector(".typing-accuracy").textContent = `Accuracy : ${
        100 - accuracy
      }%`;
      //
    }
  }
});
