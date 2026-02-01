import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import funnyDog from "../src/assets/funny picture with dog.jpg";
import oydek from "../src/assets/öydek.jpg";
import dogi from "../src/assets/Dogi.jpg";
import screenshot from "../src/assets/Screenshot 2026-02-01 130711.png";
import meme from "../src/assets/Meme.jpg";
import perrito from "../src/assets/Perrito triste (1).jpg";
import jajajaja from "../src/assets/Jajajaja.jpg";
import mePhone from "../src/assets/Me_ “when someone removes my phone ku charger”.jpg";
import funCat from "../src/assets/the fun cat.jpg";
import Happydog from "../src/assets/Happy dog.jpg";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "40px", left: "120px" });

  const images = [
    funnyDog,
    oydek,
    dogi,
    screenshot,
    meme,
    perrito,
    jajajaja,
    mePhone,
    funCat,
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
        gravity: 0.3, // float slower
        decay: 0.92, // shrink slower
        ticks: 300, // last longer
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
        ticks: 300,
      });
    }
  };

  if (accepted) {
    return (
      <div className="final">
        <img src={ Happydog } />
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
