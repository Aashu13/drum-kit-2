const bankOne = [
  {
    keyCode: 81,
    id: "Heater-1",
    url: "./audio/Heater-1.mp3",
    triggerKey: "q"
  },
  {
    keyCode: 87,
    id: "Heater-2",
    url: "./audio/Heater-2.mp3",
    triggerKey: "w"
  },
  {
    keyCode: 69,
    id: "Heater-3",
    url: "./audio/Heater-3.mp3",
    triggerKey: "e"
  },
  {
    keyCode: 65,
    id: "Heater-4",
    url: "./audio/Heater-4_1.mp3",
    triggerKey: "a"
  },
  {
    keyCode: 83,
    id: "Clap",
    url: "./audio/Heater-6.mp3",
    triggerKey: "s"
  },
  {
    keyCode: 68,
    id: "Open-HH",
    url: "./audio/Dsc_Oh.mp3",
    triggerKey: "d"
  },
  {
    keyCode: 90,
    id: "Kick-n'-Hat",
    url: "./audio/Kick_n_Hat.mp3",
    triggerKey: "z"
  },
  {
    keyCode: 88,
    id: "Kick",
    url: "./audio/RP4_KICK_1.mp3",
    triggerKey: "x"
  },
  {
    keyCode: 67,
    id: "Closed-HH",
    url: "./audio/Cev_H2.mp3",
    triggerKey: "c"
  }
];

var bankTwo = [
  {
    keyCode: 81,
    id: "Chord-1",
    url: "./audio/Chord_1.mp3",
    triggerKey: "q"
  },
  {
    keyCode: 87,
    id: "Chord-2",
    url: "./audio/Chord_2.mp3",
    triggerKey: "w"
  },
  {
    keyCode: 69,
    id: "Chord-3",
    url: "./audio/Chord_3.mp3",
    triggerKey: "e"
  },
  {
    keyCode: 65,
    id: "Shaker",
    url: "./audio/Give_us_a_light.mp3",
    triggerKey: "a"
  },
  {
    keyCode: 83,
    id: "Open-HH",
    url: "./audio/Dry_Ohh.mp3",
    triggerKey: "s"
  },
  {
    keyCode: 68,
    id: "Closed-HH",
    url: "./audio/Bld_H1.mp3",
    triggerKey: "d"
  },
  {
    keyCode: 90,
    id: "Punchy-Kick",
    url: "./audio/punchy_kick_1.mp3",
    triggerKey: "z"
  },
  {
    keyCode: 88,
    id: "Side-Stick",
    url: "./audio/side_stick_1.mp3",
    triggerKey: "x"
  },
  {
    keyCode: 67,
    id: "Snare",
    url: "./audio/Brk_Snr.mp3",
    triggerKey: "c"
  }
];

var displayText = document.querySelector(".text");

var volumeBtn = document.getElementById("Volume");
var drumKit = document.querySelectorAll(".btn");

var Audio = document.createElement("audio");
var powerButton = document.querySelector(".select");

var powerBank = document.querySelector("#select-2");
var checkTrue = true;

function playDrum(e) {
  key = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  for (var i = 0; i < bankOne.length; i++) {
    if (
      e.keyCode == bankOne[i].keyCode ||
      e.target.id == bankOne[i].triggerKey
    ) {
      var text = bankOne[i].id;
      displayText.textContent = text;

      Audio.currentTime = 0;
      Audio.src = bankOne[i].url;
      Audio.play();
      addBtnClass();
    }
    // check if bank has a active class the change the src of audio and text
    if (powerBank.classList.contains("active")) {
      updateAudioSrc(e);
    }
  }
}

function addBtnClass() {
  key.classList.add("active");
  setTimeout(function() {
    key.classList.remove("active");
  }, 250);
}

function addClass(e) {
  e.target.classList.add("active");
  setTimeout(function() {
    e.target.classList.remove("active");
  }, 250);
}

function startPlayingDrum() {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    drumKit.forEach(buttons => buttons.addEventListener("click", playDrum));
    window.addEventListener("keydown", playDrum);
  }
}

function updateVolume() {
  Audio.volume = volumeBtn.value / 100;
  console.log(Audio.volume);
}

function updateAudioSrc(e) {
  for (var j = 0; j <= bankTwo.length; j++) {
    if (
      e.keyCode === bankTwo[j].keyCode ||
      e.target.id === bankTwo[j].triggerKey
    ) {
      key.classList.remove("active");
      var Soundname = bankTwo[j].id;
      Audio.src = bankTwo[j].url;
      Audio.currentTime = 0;
      displayText.textContent = Soundname;
      Audio.play();
      addBtnClass();
    }
  }
}

function changeAudioSrc() {
  this.classList.toggle("active");
  // if (this.classList.contains("active")) {
  //   window.addEventListener("keydown", updateAudioSrc);
  // }
}

powerButton.addEventListener("click", startPlayingDrum);
volumeBtn.addEventListener("change", updateVolume);
powerBank.addEventListener("click", changeAudioSrc);

drumKit.forEach(buttons => buttons.addEventListener("click", addClass));
