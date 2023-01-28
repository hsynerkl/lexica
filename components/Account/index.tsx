import { useState } from "react";

const AccountComponent = () => {
  const [plans, setPlans] = useState(1);

  const handleSetPlans = () => {
    // setPlans();
  };
  return (
    <section className="pt-24 pb-16 container mx-auto flex items-center flex-col max-w-6xl px-5 mb-32 sm:mb-0 text-zinc-200">
      <h1 className="text-center text-6xl ">Memberships</h1>
      <h2 className="text-center text-sm mt-3">
        Choose a plan that works for you.
      </h2>

      <div className="relative bg-black-50 rounded-lg w-fit mt-12 flex p-1.5">
        <p className="absolute right-2 -top-6 text-sm">Save 20%</p>
        <p
          className={`py-2 px-7 text-white text-sm cursor-pointer rounded-md ${
            plans === 1 && "bg-black-100"
          }`}
        >
          Monthly plans
        </p>
        <p
          className={`py-2 px-7 text-white text-sm cursor-pointer rounded-lg ${
            plans === 2 && "bg-black-100"
          }`}
        >
          Yearly plans
        </p>
      </div>
    </section>
  );
};

export default AccountComponent;
