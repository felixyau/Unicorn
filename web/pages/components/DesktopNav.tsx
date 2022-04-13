import Image from "next/image";
import React from "react";
import wheelIcon from "../../public/wheel.svg";
import informationIcon from "../../public/informationIcon.svg";
import summaryIcon from "../../public/summaryIcon.svg";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <nav className="sticky top-0 left-0 w-screen bg-white z-50 border-b shadow-sm border-gray-200">
      <div className="flex justify-center items-center h-20">
        <h1 className="align-middle">Unicorn</h1>
        <div className="ml-8">
          <Image src={wheelIcon} />
        </div>
        <div className="ml-8 p-4">
          <Image src={wheelIcon} />
        </div>
        <div className="ml-8">
          <Image src={wheelIcon} />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
