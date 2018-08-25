const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "./audio/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "./audio/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "./audio/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "./audio/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "./audio/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "./audio/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "./audio/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "./audio/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "./audio/Cev_H2.mp3"
  }
];

var displayText = document.querySelector(".text");

var drumKit = document.querySelectorAll(".btn");
var Audio = document.createElement("audio");
var powerButton = document.querySelector(".select");
var checkTrue = true;
function playDrum(e) {
  var key = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  for (var i = 0; i < bankOne.length; i++) {
    if (e.keyCode == bankOne[i].keyCode || e.target.id == bankOne[i].id) {
      var text = bankOne[i].id;
      displayText.textContent = text;
      var Audio = document.createElement("audio");
      Audio.currentTime = 0;
      Audio.src = bankOne[i].url;
      Audio.play();
      key.classList.add("active");
      setTimeout(function() {
        key.classList.remove("active");
        checkTrue = false;
      }, 250);
    }
  }
}

function addClass(e) {
  e.target.classList.add("active");
  setTimeout(function() {
    e.target.classList.remove("active");
  }, 250);
}

function startPlayingDrum() {
  this.classList.add("active");

  if (this.classList.contains("active")) {
    drumKit.forEach(buttons => buttons.addEventListener("click", playDrum));
    window.addEventListener("keydown", playDrum);
    drumKit.forEach(buttons => buttons.addEventListener("click", addClass));
  } else {
    this.classList.toggle("active");
  }
}

powerButton.addEventListener("click", startPlayingDrum);
