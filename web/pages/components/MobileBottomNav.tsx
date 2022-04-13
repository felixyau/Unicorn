import React from "react";
import s from "../../public/circle.svg";
import Image from "next/image";

type Props = {};

const MobileBottomNav = (props: Props) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white">
      <div className="w-4/12 inline-block">
        <span className="flex justify-center max-w-full">
          <Image src={s} height={35} width={35} />
        </span>
      </div>
      <div className="w-4/12 inline-block">
        <span className="flex justify-center max-w-full">
          <Image src={s} height={35} width={35} />
        </span>
      </div>
      <div className="w-4/12 inline-block">
        <span className="flex justify-center max-w-full">
          <Image src={s} height={35} width={35} />
        </span>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
