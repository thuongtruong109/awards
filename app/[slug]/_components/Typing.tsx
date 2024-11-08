import { FC, useEffect, useState } from "react";

type Props = {
  text: string;
  delay?: number;
  className?: string;
};

const Typewriter: FC<Props> = ({
  text,
  delay = 100,
  className,
}: Props) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

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
