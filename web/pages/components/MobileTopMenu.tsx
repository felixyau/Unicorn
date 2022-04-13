import React from 'react'
import Image from "next/image";
import s from "../../public/circle.svg";

type Props = {}

const MobileTopMenu = (props: Props) => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50">
    <div className="flex justify-center items-center h-20">
      <h1>Health Data</h1>
      <div className="absolute right-8">
        <Image src={s} height={35} width={35} />
      </div>
    </div>
  </header>
  )
}

export default MobileTopMenu