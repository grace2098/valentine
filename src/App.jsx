import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "40px", left: "120px" });

  const images = [
    "../public/funny picture with dog.jpg",
    "../public/öydek.jpg",
    "../public/Dogi.jpg",
    "../public/Screenshot 2026-02-01 130711.png",
    "../public/Meme.jpg",
    "../public/Perrito triste (1).jpg",
    "../public/Jajajaja.jpg",
    "../public/Me_ “when someone removes my phone ku charger”.jpg",
    "../public/the fun cat.jpg",
  ];

  const messages = [
    "Will you be my Valentine? ",
    "YES?",
    "Why na? ",
    "So you want me to beg you?",
    "Oya please…",
    "Are you sure? ",
    "This is getting painful ",
    "I’m begging ",
    "Just say yes already",
  ];

  const index = Math.min(noCount, images.length - 1);
  const message = messages[Math.min(noCount, messages.length - 1)];

  const moveNo = () => {
    const maxX = 240;
    const maxY = 120;

    setNoPos({
      left: Math.random() * maxX + "px",
      top: Math.random() * maxY + "px",
    });
  };

  const handleNo = () => {
    if (noCount >= 9) return;

    setNoCount(noCount + 1);
    setYesScale(yesScale + 0.25);
    moveNo();
  };

  const handleYes = () => {
    setAccepted(true);
    shootCanyonLong();
  };

 
const shootCanyonLong = () => {
  for (let i = 0; i < 3; i++) {
    // left corner
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 1 },
      scalar: 1.5,
      gravity: 0.3,  // float slower
      decay: 0.92,   // shrink slower
      ticks: 300     // last longer
    });

    // right corner
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 1 },
      scalar: 1.5,
      gravity: 0.3,
      decay: 0.92,
      ticks: 300
    });
  }
};

  if (accepted) {
    return (
      <div className="final">
        <img src="../public/Happy dog.jpg" alt="" />
        <h1>YAYYYYYY!!!!!!!!! Kiss Kiss</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={images[index]} alt="reaction" />
      <h1>{message}</h1>
      <div className="buttons">
        <button
          className="yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={handleYes}
        >
          Yes
        </button>

        <button
          className={`no ${noCount > 0 ? "moving" : ""}`}
          style={noCount > 0 ? noPos : {}}
          onClick={noCount < 9 ? handleNo : undefined}
          onMouseEnter={noCount >= 9 ? moveNo : undefined}
        >
          {noCount >= 9 ? "Say yes" : "No"}
        </button>
      </div>
    </div>
  );
}

export default App;
