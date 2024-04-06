import React, { useState } from "react";
import designer_work from "../assets/images/designer_work.png";
import hire_designer from "../assets/images/hire_designer.png";
import design_inspiration from "../assets/images/design_inspiration.png";
import { useNavigate } from "react-router-dom";

function OptionComponent({ image, alt, description, isSelected, onSelect }) {
  return (
    <label
      className={`relative text-center items-center justify-center p-8 rounded-lg border border-gray-200 cursor-pointer transition duration-300 hover:border-pink-500 ${
        isSelected ? "border-pink-500" : ""
      }`}
    >
      <input
        type="radio"
        name="option"
        checked={isSelected}
        onChange={() => onSelect(description)}
        className="hidden"
      />
      <div className="w-64 h-56 relative text-center flex flex-col mb-3 items-center">
        <img
          src={image}
          alt={alt}
          className={`mx-auto mb-2 ${isSelected ? "-mt-[5.5rem]" : ""}`}
        />
        <p className="text-lg font-semibold text-center mb-2">{description}</p>
        {isSelected && (
          <p className="mb-7 text-slate-500">
            With over 7 million shots from a vast community of designers,
            Dribble is the leading source for design inspiration.
          </p>
        )}
      </div>
      {isSelected && (
        <div className="w-6 h-6 border border-gray-300 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4 absolute"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.293 5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 12.586l6.293-6.293a1 1 0 011.414 0z"
              fill="white"
              strokeWidth="2"
              stroke="white"
            />
          </svg>
        </div>
      )}
    </label>
  );
}

// Questionnaire component rendering the OptionComponent for each option
function Questionnaire() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (description) => {
    setSelectedOption(description);
  };

  const navigate = useNavigate();

  return (
    <div className="w-screen">
      <div className="w-fit text-center mx-auto bg-white p-8 rounded-lg ">
        <h1 className="text-3xl font-bold mb-8">
          What brings you to Dribbble?
        </h1>
        <p className="text-sm pb-20 text-center text-slate-500 font-semibold">
          Select the option that best describes you. Don't worry, you can
          explore options later.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <OptionComponent
            image={designer_work}
            alt="Designer Looking to Share My Work"
            description="I'm a designer looking to share my work"
            isSelected={
              selectedOption === "I'm a designer looking to share my work"
            }
            onSelect={handleSelect}
          />
          <OptionComponent
            image={hire_designer}
            alt="Looking to Hire a Designer"
            description="I'm looking to hire a designer"
            isSelected={selectedOption === "I'm looking to hire a designer"}
            onSelect={handleSelect}
          />
          <OptionComponent
            image={design_inspiration}
            alt="Looking for Design Inspiration"
            description="I'm looking for design inspiration"
            isSelected={selectedOption === "I'm looking for design inspiration"}
            onSelect={handleSelect}
          />
        </div>
        <p className="font-bold mb-4">Anything else? You can select multiple</p>
        <button
          disabled={!selectedOption}
          className={`bg-pink-500 text-white font-semibold py-2.5 px-20 rounded-lg  ${
            !selectedOption
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-pink-700 focus:outline-none focus:shadow-outline"
          }`}
          onClick={() => {
            navigate("/login");
          }}
        >
          Finish
        </button>
        <p className="text-sm text-center text-slate-500 font-semibold">
          or Press RETURN
        </p>
      </div>
    </div>
  );
}

export default Questionnaire;
