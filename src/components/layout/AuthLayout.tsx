import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-[100%] flex flex-col text-blue-950">
      <Outlet />

      <div className="flex-1" />

      <div className =  "w-full flex flex-col items-center">
        <div className="border-b w-[80%]  " />

        <div className =  "text-[13px] ">This project is built</div>
        <p className = "font-bold text-[14px] ">with you in mind!</p>
      </div>
    </div>
  );
};

export default AuthLayout;
