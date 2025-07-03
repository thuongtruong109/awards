import Image from "next/legacy/image";
import React from "react";

const Snow: React.FC = () => {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="snowflakes" aria-hidden="true">
      {numbers.map((i) => (
        <div className="snowflake" key={i}>
          <Image
            src="/icons/details/apricot_blossom.png"
            alt="apricot blossom img"
            width={20}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Snow);
