import React from "react";

type Props = {
  text: string;
  delay?: number;
  className?: string;
};

const Typewriter: React.FC<Props> = ({
  text,
  delay = 100,
  className,
}: Props) => {
  const [currentText, setCurrentText] = React.useState<string>("");
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  React.useEffect(() => {
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
