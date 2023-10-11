import { useEffect, useState } from "react";

type Props = {
  text: string;
  delay?: number;
  className?: string;
};

const Typewriter = ({ text, delay = 100, className }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text?.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return (
    <p className={currentText.length > 0 ? className : ""}>{currentText}</p>
  );
};

export default Typewriter;
