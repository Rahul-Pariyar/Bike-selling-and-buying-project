import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BikeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);

  const onSubmit =async (data) => {
    console.log(data)
    try{
      // const response=await axios.post('')
    }catch(err){

    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Create Ad</h2>
        <p className="text-gray-600 text-center mb-6">
          Fill out the form below to list your bike for sale.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Brand Input */}
          <div>
            <input
              type="text"
              placeholder="Brand"
              {...register("brand", { required: "Required" })}
              className={`${errors.brand ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
          </div>

          {/* Model Input */}
          <div>
            <input
              type="text"
              placeholder="Model"
              {...register("model", { required: "Required" })}
              className={`${errors.model ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
          </div>

          {/* Make Year Input */}
          <div>
            <input
              type="number"
              placeholder="Make Year"
              {...register("year", { required: "Required" })}
              className={`${errors.year ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
          </div>

          {/* Kilometers Input */}
          <div>
            <input
              type="number"
              placeholder="Kilometers"
              {...register("kilometers", { required: "Required" })}
              className={`${errors.kilometers ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.kilometers && <p className="text-red-500 text-sm">{errors.kilometers.message}</p>}
          </div>

          {/* Condition Dropdown */}
          <div>
            <select
              {...register("condition", { required: "Required" })}
              className={`${errors.condition ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full sm:w-full md:w-full lg:w-full xl:w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
              defaultValue=""
            >
              <option value="" disabled >Condition</option>
              <option value="used">Used</option>
              <option value="like_new">Like New</option>
              <option value="brand_new">Brand New</option>
            </select>
            {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message}</p>}
          </div>

          {/* Description Textarea */}
          <div>
            <textarea
              placeholder="Description"
              {...register("description", { required: "Required" })}
              className={`${errors.description ? "border-2 border-red-400 focus:ring-red-400" : "border-gray-300"} w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          {/* File Upload (Image Only) */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Upload Bike Image</label>
            <label className="flex items-center justify-center w-full p-3 border border-gray-300 rounded cursor-pointer bg-gray-200 hover:bg-gray-300">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                {...register("file", { required: "Required" })}
                className="hidden"
                onChange={handleFileChange}
                
              />
              <span className="text-gray-700">Choose File</span>
            </label>
            {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
          </div>

          {/* Preview Image */}
          {preview && (
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Preview:</p>
              <img src={preview} alt="Bike Preview" className="w-full h-40 object-cover mt-2 rounded-md shadow-md" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Ad
          </button>
        </form>
      </div>
    </div>
  );
};

export default BikeForm;

