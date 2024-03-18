import { badgeColors } from "@/shared";
import React from "react";

type Props = {
  text: string;
};

const Badge: React.FC<Props> = (props: Props) => {
  const [badgeStyle, setBadgeStyle] = React.useState<string>(badgeColors[0]);

  React.useEffect(() => {
    setBadgeStyle(badgeColors[Math.floor(Math.random() * badgeColors.length)]);
  }, [props]);
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${badgeStyle}`}
    >
      {props.text}
    </span>
  );
};

export default React.memo(Badge);
