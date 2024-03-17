import Image from "next/legacy/image";
import { memo } from "react";

const Snow = () => {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="snowflakes" aria-hidden="true">
      {numbers.map((i) => (
        <div className="snowflake" key={i}>
          <Image
            src="/assets/apricot_blossom.png"
            alt="apricot blossom img"
            width={20}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(Snow);
