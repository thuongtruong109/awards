import { badgeColors } from "@/shared";
import { memo, useEffect, useState } from "react";

type Props = {
  text: string;
};

const Badge = (props: Props) => {
  const [badgeStyle, setBadgeStyle] = useState<string>(badgeColors[0]);

  useEffect(() => {
    setBadgeStyle(badgeColors[Math.floor(Math.random() * badgeColors.length)]);
  }, [props]);
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset ${badgeStyle}`}
    >
      {props.text}
    </span>
  );
};

export default memo(Badge);
