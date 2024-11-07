import React from "react";

const BgGradient: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 w-full">
      <div className="absolute right-0 top-0 -z-10 h-screen w-1/4 bg-gradient-to-l from-blue-600/10"></div>
      <div className="absolute left-0 top-0 -z-10 h-screen w-1/4 bg-gradient-to-r from-green-600/10"></div>
    </div>
  );
};

export default React.memo(BgGradient);
