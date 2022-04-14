import Image from "next/image";
import React from "react";
import wheelIcon from "../../public/wheel.svg";
import informationIcon from "../../public/informationIcon.svg";
import summaryIcon from "../../public/summaryIcon.svg";
import diagnosisIcon from "../../public/coloredDiagnosisIcon.svg";
import Link from "next/link";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <nav className="sticky top-0 left-0 w-screen bg-white z-50 border-b shadow-sm border-gray-200" >
      <div className="flex justify-center items-center h-20">
        <div
          className="flex items-center justify-between"
          style={{ width: "420px" }}
        >
          <h1 className="align-middle">Unicorn</h1>
          <div className="flex">
            <Link href="/track">
              <div className="ml-8 hover:cursor-pointer">
                <Image src={summaryIcon} height={20} width={20} />
              </div>
            </Link>
            <Link href="/form">
              <div className="ml-8 hover:cursor-pointer">
                <Image src={diagnosisIcon} height={20} width={20} />
              </div>
            </Link>
            <Link href="/data">
            <div className="ml-8 hover:cursor-pointer">
              <Image src={informationIcon} height={20} width={20} />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
