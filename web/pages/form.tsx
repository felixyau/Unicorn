import { NextPage } from "next";
import { useState } from "react";
import { Formik } from "formik";
import ButtonGroup from "./components/ButtonGroup";
import Questions from "./question";
import FormControl from "./components/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import img from "../public/cover.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

interface MyFormValues {
  firstName: string;
}

const goesUp = "opacity-0 translate-y-n-screen absolute w-full";
const goesDown = "opacity-0 translate-y-screen absolute w-full";
const present = "opacity-1 translate-y-0";

const getClassName = (activeStep: number, questionNumber: number) => {
  if (activeStep === questionNumber) return present;
  if (activeStep > questionNumber) return goesUp;
  else return goesDown;
};

const Form = (props: Props) => {
  const totalStep = Questions.length;

  const initialValues: MyFormValues = { firstName: "" };
  const [step, setStep] = useState(1);

  const nextStep = () => setTimeout(() => setStep((step) => step + 1), 500);

  return (
    <main>
      <div className="h-screen pl-8 pr-8 bg-secondary overflow-hidden">
        <Formik
          initialValues={initialValues}
          onSubmit={(props) => {
            console.log("props:", props);
          }}
        >
          {() => (
            <form className="w-full lg:ml-16 relative top-1/2 -translate-y-1/2">
              {Questions.map((question, index) => (
                <FormControl
                  label={Questions[index].q}
                  number={(index + 1).toString()}
                  className={getClassName(step, index + 1)}
                >
                  <ButtonGroup
                    options={Questions[index].options}
                    nextStep={nextStep}
                  />
                </FormControl>
              ))}
              {step === Questions.length+1 && <Link href="/result">
                <div className="w-3/12 mb-4 rounded-xl bg-white p-4 shadow-md transition duration-100 active:scale-75 active:shadow-lg">
                  Submit the Form
                </div>
              </Link>}
            </form>
          )}
        </Formik>

        <div className="flex items-end justify-between fixed bottom-4 left-0 right-0 w-full pr-8 pl-8">
          <div>
            <p>{Math.floor(((step - 1) / totalStep) * 100)}% completed</p>
            <div className="bg-gray-400 w-72 h-1 mb-6">
              <div
                className="h-1 bg-gray-800"
                style={{ width: `${(step / totalStep) * 100}%` }}
              ></div>
            </div>
          </div>
          <div>
            <button
              className="bg-black w-14 h-14 rounded-l-md"
              onClick={() => setStep((step) => step - 1)}
            >
              <FontAwesomeIcon
                className="text-white"
                icon={faArrowUp}
                style={{fontSize:"18px", maxWidth:"100%"}}
              />
            </button>
            <button
              className="bg-gray-800 w-14 h-14 rounded-r-md"
              onClick={() => setStep((step) => step + 1)}
            >
              <FontAwesomeIcon
                className="text-white"
                icon={faArrowDown}
                style={{fontSize:"18px", maxWidth:"100%"}}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
