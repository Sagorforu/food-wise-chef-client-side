import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ColorRing } from "react-loader-spinner";

const UserDetails = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);

  if (loading) {
    return (
      <div className="flex justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  if (!user) {
    return (
      <h1 className="text-[#383838] text-center font-bold text-3xl lg:text-4xl">
        No user found
      </h1>
    );
  }

  return (
    <div className="lg:px-36 px-2 ">
      <div className="background-color text-center pb-8 lg:pt-12 pt-4">
        <h2 className="text-[#383838] font-bold text-3xl lg:text-4xl">
          User Information
        </h2>
      </div>
      <div className="mt-8">
        <img className="mx-auto w-4/12 rounded-xl" src={user.photoURL} alt="" />
        <h2 className="text-center text-[#383838] mt-6 mb-2 font-bold text-2xl">
          {user.displayName}
        </h2>
        <h2 className="text-center text-[#383838] mb-6 font-semibold text-xl">
          {user.email}
        </h2>
      </div>
    </div>
  );
};

export default UserDetails;
