import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import s from "../public/circle.svg";
import setting from "../public/wheel.svg";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import useWindowDimensions from "./hooks/useWindowDimensions";
import DesktopNav from "./components/DesktopNav";
import MobileTopMenu from "./components/MobileTopMenu";
import MobileBottomNav from "./components/MobileBottomNav";
import Link from "next/link";
import { useState } from "react";

const data = [
  { time: 1, weight: 60 },
  { time: 2, weight: 60 },
  { time: 3, weight: 57 },
  { time: 4, weight: 57 },
];

const topMenu = (isDesktop: boolean) => {
  return isDesktop ? <DesktopNav /> : <MobileTopMenu />;
};

//TO-DO: hello
const Result: NextPage = () => {
  const { height, width, isDesktop } = useWindowDimensions();
  const [step, setStep] = useState(0);

  return (
    <div>
      {topMenu(isDesktop)}
      <div className="flex justify-center bg-gray-100">
        <div className="bg-gray-100 min-h-screen flex flex-col items-center max-w-3xl justify-center">
          <main className="w-11/12">
            {step === 0 && (
              <section>
                <p className="mt-8">Result</p>
                <article className="rounded-xl bg-white p-8 shadow-md">
                  <p className="mt-8">
                    You are probably having Allergic rhinitis.
                  </p>
                  <p className="mt-8">
                    If your condition is mild, you can also help reduce the
                    symptoms by taking over-the-counter medications, such as
                    non-sedating antihistamines, and by regularly rinsing your
                    nasal passages with a salt water solution to keep your nose
                    free of irritants.
                  </p>
                  <p className="mt-8">
                    See a GP for advice if you have tried taking these steps and
                    they have not helped. They may prescribe a stronger
                    medication, such as a nasal spray containing
                    corticosteroids.
                  </p>
                </article>

                <button
                  className="bg-white py-2 px-8 mt-8"
                  style={{ borderRadius: "50px" }}
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              </section>
            )}
            {step === 1 && (
              <section>
                <p>Result</p>
                <article className="rounded-xl bg-white p-8 shadow-md">
                    Estimated Medical Cost: 20,000
                </article>
              </section>
            )}
          </main>

          {isDesktop ? null : <MobileBottomNav />}
        </div>
      </div>
    </div>
  );
};

export default Result;
