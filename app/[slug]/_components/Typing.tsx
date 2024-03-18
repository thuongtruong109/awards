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
  const [currentText, setCurrentText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

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

export default React.memo(Typewriter);
