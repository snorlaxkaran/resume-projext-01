import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image width={130} height={130} alt="Logo" src={"/logo.svg"} />
    </div>
  );
};

export default Logo;
