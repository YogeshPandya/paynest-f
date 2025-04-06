import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiEffect = ({ trigger }) => {
  const [showConfetti, setShowConfetti] = useState(trigger);

  useEffect(() => {
    if (trigger) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [trigger]);

  return showConfetti ? <Confetti width={window.innerWidth} height={window.innerHeight} /> : null;
};

export default ConfettiEffect;
