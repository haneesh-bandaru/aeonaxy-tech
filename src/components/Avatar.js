import React from "react";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center">
      <label className="text-lg font-bold mb-2">Add an avatar</label>
      <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mb-4">
        <span className="text-gray-500">Preview</span>
      </div>
      <input type="file" accept="image/*" className="mb-2" />
      <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        Choose Image
      </button>
    </div>
  );
};

export default Avatar;
