import { memo } from "react";

const BgGradient = () => {
  return (
    <div className="fixed left-0 top-0 w-full">
      <div className="absolute right-0 top-0 z-0 h-screen w-1/4 bg-gradient-to-l from-blue-600/10"></div>
      <div className="absolute left-0 top-0 z-0 h-screen w-1/4 bg-gradient-to-r from-green-600/10"></div>
    </div>
  );
};

export default memo(BgGradient);
