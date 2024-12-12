// import React, { useEffect } from "react";
// import { Input2, Button } from "../components";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUserDetails } from "../Store/Slices/authSlice";
// function EditPersonalInfo() {
//     const {
//         handleSubmit,
//         register,
//         formState: { errors },
//         setValue,
//     } = useForm();
//     const dispatch = useDispatch();
//     const auth = useSelector((state) => state.auth?.userData);
//     useEffect(() => {
//         setValue("fullName", auth?.fullName);
//         setValue("email", auth?.email);
//     }, [auth, setValue]);
//     const saveChanges = (data) => {
//         dispatch(updateUserDetails(data));
//     };
//     const reset = (e) => {
//         e.preventDefault();
//         setValue("fullName", auth?.fullName);
//         setValue("email", auth?.email);
//     };
//     return (
//         <>
//             <div className="w-full text-white flex justify-center items-center mt-5">
//                 <div className="bg-transparent p-5 border rounded shadow-lg w-full max-w-md">
//                     <h2 className="text-lg font-bold mb-4">
//                         Personal Information
//                         <p className="font-light text-xs">
//                             Update your personal details here.
//                         </p>
//                     </h2>
//                     <form
//                         onSubmit={handleSubmit(saveChanges)}
//                         className="space-y-4"
//                     >
//                         <div className="flex flex-col">
//                             <Input2
//                                 label="Full Name"
//                                 type="text"
//                                 className="rounded"
//                                 {...register("fullName", {
//                                     required: "FullName is required",
//                                 })}
//                             />
//                             {errors.fullName && (
//                                 <span className="text-sm text-red-500">
//                                     {errors.fullName?.message}
//                                 </span>
//                             )}
//                         </div>
//                         <div className="flex flex-col">
//                             <Input2
//                                 label="Email Address"
//                                 type="email"
//                                 className="rounded"
//                                 {...register("email", {
//                                     required: "Email is required",
//                                 })}
//                             />
//                             {errors.email && (
//                                 <span className="text-sm text-red-500">
//                                     {errors.email?.message}
//                                 </span>
//                             )}
//                         </div>
//                         <div className="flex justify-between mt-4">
//                             <Button
//                                 onClick={(e) => reset(e)}
//                                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                             >
//                                 Reset
//                             </Button>
//                             <Button
//                                 type="submit"
//                                 className="bg-purple-500 text-white px-4 py-2 rounded"
//                             >
//                                 Save Changes
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default EditPersonalInfo;

import React, { useEffect, useState } from "react";
import { Input2, Button } from "../components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../Store/Slices/authSlice";

function EditPersonalInfo() {
    const [isEditing, setIsEditing] = useState(false);  // State to toggle edit mode
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth?.userData);
    const loading = useSelector((state) => state.auth?.loading);
    
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    // Set initial form values when user data is available
    useEffect(() => {
        if (auth) {
            setValue("fullName", auth?.fullName);
            setValue("email", auth?.email);
        }
    }, [auth, setValue]);

    // Handle saving changes
    const saveChanges = (data) => {
        dispatch(updateUserDetails(data));
        setIsEditing(false);  // Switch off editing mode after save
    };

    // Handle reset (cancel editing)
    const cancelEdit = () => {
        reset();  // Reset the form to the initial state
        setIsEditing(false);  // Disable edit mode
    };

    return (
        <div className="w-full text-white flex justify-center items-center mt-5">
            <div className="bg-transparent p-5 border rounded shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">
                    Personal Information
                    <p className="font-light text-xs">
                        Update your personal details here.
                    </p>
                </h2>

                <form
                    onSubmit={handleSubmit(saveChanges)}
                    className="space-y-4"
                >
                    <div className="flex flex-col">
                        <Input2
                            label="Full Name"
                            type="text"
                            className="rounded"
                            {...register("fullName", {
                                required: "Full Name is required",
                            })}
                            disabled={!isEditing}  // Make field editable when in edit mode
                        />
                        {errors.fullName && (
                            <span className="text-sm text-red-500">
                                {errors.fullName?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <Input2
                            label="Email Address"
                            type="email"
                            className="rounded"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            disabled={!isEditing}  // Make field editable when in edit mode
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-between mt-4">
                        {isEditing && (
                            <Button
                                onClick={cancelEdit}  // Cancel editing and reset the form
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            type="submit"
                            className="bg-purple-500 text-white px-4 py-2 rounded"
                            disabled={loading}  // Disable button while loading
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>
                    </div>
                </form>

                {/* Toggle between Edit and View */}
                {!isEditing && (
                    <Button
                        onClick={() => setIsEditing(true)}  // Activate edit mode
                        className="bg-blue-500 text-white mt-4 px-4 py-2 rounded"
                    >
                        Edit Details
                    </Button>
                )}
            </div>
        </div>
    );
}

export default EditPersonalInfo;
