import React, { useState, useRef, useEffect } from "react";
import avatar from "../assets/images/default.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [disable, setDisable] = useState(true);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Reference to the file input element
  const fileInputRef = useRef(null);

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Check if a file is selected
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to trigger file input when button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Effect to update disable state when selectedImage or location changes
  useEffect(() => {
    if (selectedImage !== null && location.trim() !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [selectedImage, location]);

  return (
    <div className="flex">
      <div className="w-2/5">Dribble</div>
      <div className="container mx-auto my-auto pt-20 p-8 overflow-hidden">
        <h1 className="text-3xl font-bold mb-2">
          Welcome! Let’s create your profile
        </h1>
        <p className="text-sm font-light mb-12">
          Let others get to know you better! You can do these later
        </p>
        <h2 className="text-xl font-semibold mb-4">Add an avatar</h2>
        <div className="mb-8 flex gap-12">
          <div className="flex flex-row items-center justify-center bg-gray-200 w-32 h-32 rounded-full mb-4">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="avatar-input"
          />
          <div className="flex flex-col">
            <button
              onClick={handleButtonClick}
              className="cursor-pointer  h-fit w-fit text-black  font-semibold py-2 px-4 rounded-lg  border focus:outline-none focus:shadow-outline"
            >
              Choose image
            </button>
            <button className="text-slate-500 mt-6">
              {"> "} Or choose one of our defaults
            </button>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Add your location</h2>
          <input
            className="appearance-none border-b-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder={location || "Enter a location"}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col w-fit">
          <button
            disabled={disable}
            className={`bg-pink-500 text-white  font-semibold py-2 px-20 rounded-lg ${
              disable
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pink-700 focus:outline-none focus:shadow-outline"
            }`}
            onClick={() => {
              navigate("/questionnaire");
            }}
          >
            Next
          </button>
          {!disable && (
            <p className="text-sm text-center text-slate-500 font-semibold">
              or Press RETURN
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
