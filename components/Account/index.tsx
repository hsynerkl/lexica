import { useState } from "react";
import CustomButton from "../common/CustomButton";

const AccountComponent = () => {
  const [plans, setPlans] = useState(2);

  const handleSetPlans = (value: number) => {
    setPlans(value);
  };

  return (
    <section className="md:pt-24 pt-10 sm:pb-16 h-screen overflow-y-auto">
      <div className="container max-w-6xl px-5 mb-32 sm:mb-0 text-zinc-200 mx-auto flex items-center flex-col">
        <h1 className="text-center text-4xl md:text-6xl logo-font">
          Memberships
        </h1>
        <h2 className="text-center mt-3">Choose a plan that works for you.</h2>

        <div className="relative bg-black-50 rounded-lg w-fit mt-12 flex p-1.5">
          <p className="absolute right-2 -top-6 text-sm">Save 20%</p>
          <p
            onClick={() => handleSetPlans(1)}
            className={`py-2 px-7 text-white whitespace-nowrap items-center flex text-sm cursor-pointer rounded-md ${
              plans === 1 && "bg-black-100"
            }`}
          >
            Monthly plans
          </p>
          <p
            onClick={() => handleSetPlans(2)}
            className={`py-2 px-7 text-white text-sm cursor-pointer items-center flex whitespace-nowrap rounded-lg ${
              plans === 2 && "bg-black-100"
            }`}
          >
            Yearly plans
          </p>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-8 md:gap-6 mt-6 md:mt-12 ">
          <div className="flex flex-col p-6 bg-black-50 rounded-xl">
            <p className="text-white text-xl font-semibold leading-6">
              Starter
            </p>
            <ul className="mt-3 py-1 text-zinc-300">
              <li>
                <p>- 1.000 fast generations per month.</p>
              </li>
              <li>
                <p>- No slow generations.</p>
              </li>
              <li>
                <p>- 2 parallel generations.</p>
              </li>
              <li>
                <p>- Commercial license (solo).</p>
              </li>
              <li>
                <p>- Images are public.</p>
              </li>
            </ul>
            <div className="pt-7">
              <p className="text-5xl font-medium">
                {plans === 2 ? "$8" : "$10"}
                <span className="text-base font-medium text-zinc-100">
                  / month
                </span>
              </p>
              <p
                className={`${
                  plans === 2 ? "visible" : "invisible"
                } text-zinc-200 mt-2 ml-1 text-sm`}
              >
                Billed annually at $96/year
              </p>
              <CustomButton
                text="Subscribe"
                className="w-full text-center mt-6 !py-3"
              />
            </div>
          </div>

          <div className="flex flex-col p-6 bg-black-50 rounded-xl relative">
            <div className="absolute -top-0 -translate-y-1/2 right-5 bg-red-700 px-4 py-2 rounded-full">
              <p className="text-white text-xs tracking-wider font-semibold leading-none">
                Most Popular
              </p>
            </div>
            <p className="text-white text-xl font-semibold leading-6">Pro</p>
            <ul className="mt-3 py-1 text-zinc-300">
              <li>
                <p>- 3.000 fast generations per month.</p>
              </li>
              <li>
                <p>- Unlimited slow generations.</p>
              </li>
              <li>
                <p>- 5 parallel generations.</p>
              </li>
              <li>
                <p>- Commercial license.</p>
              </li>
              <li>
                <p>- Images are public.</p>
              </li>
            </ul>
            <div className="pt-7">
              <p className="text-5xl font-medium">
                {plans === 2 ? "$24" : "$30"}
                <span className="text-base font-medium text-zinc-100">
                  / month
                </span>
              </p>
              <p
                className={`${
                  plans === 2 ? "visible" : "invisible"
                } text-zinc-200 mt-2 ml-1 text-sm`}
              >
                Billed annually at $268/year
              </p>
              <CustomButton
                text="Subscribe"
                className="w-full text-center mt-6 !py-3"
              />
            </div>
          </div>

          <div className="flex flex-col p-6 bg-black-50 relative rounded-xl">
            <div className="absolute -top-0 -translate-y-1/2 right-5 bg-gray-700 px-4 py-2 rounded-full">
              <p className="text-white text-xs tracking-wider font-semibold leading-none">
                Best Value
              </p>
            </div>
            <p className="text-white text-xl font-semibold leading-6">Max</p>
            <ul className="mt-3 py-1 text-zinc-300">
              <li>
                <p>- 7.000 fast generations per month.</p>
              </li>
              <li>
                <p>- Unlimited slow generations.</p>
              </li>
              <li>
                <p>- 10 parallel generations.</p>
              </li>
              <li>
                <p>- Commercial license.</p>
              </li>
              <li>
                <p>- Keep images private.</p>
              </li>
            </ul>
            <div className="pt-7">
              <p className="text-5xl font-medium">
                {plans === 2 ? "$48" : "$60"}
                <span className="text-base font-medium text-zinc-100">
                  / month
                </span>
              </p>
              <p
                className={`${
                  plans === 2 ? "visible" : "invisible"
                } text-zinc-200 mt-2 ml-1 text-sm`}
              >
                Billed annually at $576/year
              </p>
              <CustomButton
                text="Subscribe"
                className="w-full text-center mt-6 !py-3"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mt-10 ml-1 md:gap-10 gap-8">
          <div className="flex flex-col gap-2">
            <p className="mb-2">How does the plan limit work? </p>
            <p className="text-zinc-400">
              If you go over your limit we&apos;ll nicely ask you to upgrade.
              You are on the Free plan and have generated 28 of 100 images this
              month.
              <br></br>
              <br></br>
              Usage this month is calculated from January 1 - February 1.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">What are fast generations?</p>
            <p className="text-zinc-400">
              Every plan gets a set number of fast generations where your images
              are created using our fastest servers. On the Pro and Max plan you
              get unlimited generations, but we&apos;ll switch you over to our
              slower servers once you&apos;ve hit your limit.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Can I buy more fast generations?</p>
            <p className="text-zinc-400">
              Yes, you can buy fast generations for $0.01 per generation. These
              never expire, but you must have an active plan to use them.
              Perfect for months where you need to go beyond your plan&apos;s
              limit. Just click the &apos;Buy extra&apos; button on your plan
              above.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Can I upgrade or downgrade my plan?</p>
            <p className="text-zinc-400">
              You can change plans at any time by choosing a new plan above. If
              you upgrade you will be pro-rated (only pay the difference). If
              you downgrade you will have a discount applied to future months.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Do you make it easy to cancel my plan?</p>
            <p className="text-zinc-400">
              Of course! Cancel at any time by clicking the manage plan button
              above. You&apos;ll still have access until the end of your billing
              period.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Do you accept PayPal?</p>
            <p className="text-zinc-400">
              We don&apos;t currently accept PayPal. You&apos;ll see all
              available payment methods on the checkout page after choosing a
              plan.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Can I keep my images private?</p>
            <p className="text-zinc-400">
              Images created under the Starter and Pro plans will show up in our
              search engine. If you subscribe to the Max plan then all your
              images will be private unless you decide to share them.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Can I use images for commercial purposes?</p>
            <p className="text-zinc-400">
              You can use any image for personal use. For commercial use of
              images created with Lexica Aperture you must have a paid plan,
              with some restrictions on team size. If you&apos;re a team of 2-5
              people then you need the Pro plan. Teams of 5+ need the Max plan.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">
              What is the license for Stable Diffusion 1.5 images?
            </p>
            <p className="text-zinc-400">
              All images on Lexica that were created with the Stable Diffusion
              1.5 model are CC0 licensed and you are free to use them for both
              personal and commercial purposes, without credit. Click any image
              on the site to view its model info.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Do you offer custom plans?</p>
            <p className="text-zinc-400">
              If you need a higher limit or your company has special
              requirements please contact support@lexica.art
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Do you offer refunds?</p>
            <p className="text-zinc-400">
              If you&apos;ve used less than 1% of your monthly limit and
              aren&apos;t satisfied then we&apos;ll refund you. Please contact
              support@lexica.art.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">
              Can you give me a receipt or invoice for tax purposes?
            </p>
            <p className="text-zinc-400">
              Click the manage plan button above to access your receipts and
              invoices.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Where can I ask more questions?</p>
            <p className="text-zinc-400">
              Please join our{" "}
              <span className="underline cursor-pointer">
                Discord community.
              </span>{" "}
              We&apos;re usually online and happy to answer any questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountComponent;
