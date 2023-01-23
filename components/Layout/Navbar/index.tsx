import CustomButton from "@/components/common/CustomButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <nav className="h-14 flex justify-between bg-black-50 items-center px-8 fixed top-0 w-screen backdrop-blur">
      <svg
        viewBox="0 0 112 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 md:h-5 "
      >
        <path
          d="M6.64774 31H0.977744V2.9335H6.64774V31ZM4.66324 31V30.4735H16.8942V31H4.66324ZM33.2749 23.386H38.6209C38.1889 24.979 37.4464 26.383 36.3934 27.598C35.3404 28.813 34.0579 29.758 32.5459 30.433C31.0609 31.081 29.4139 31.405 27.6049 31.405C25.4179 31.405 23.4604 30.9325 21.7324 29.9875C20.0044 29.0425 18.6409 27.733 17.6419 26.059C16.6429 24.358 16.1434 22.4275 16.1434 20.2675C16.1434 18.0805 16.6429 16.15 17.6419 14.476C18.6409 12.802 20.0044 11.4925 21.7324 10.5475C23.4604 9.6025 25.4179 9.13 27.6049 9.13C29.3869 9.13 31.0204 9.454 32.5054 10.102C34.0174 10.75 35.2999 11.668 36.3529 12.856C37.4059 14.017 38.1484 15.394 38.5804 16.987H33.2344C33.0724 15.826 32.7619 14.692 32.3029 13.585C31.8709 12.451 31.2634 11.5195 30.4804 10.7905C29.7244 10.0345 28.7659 9.6565 27.6049 9.6565C26.4709 9.6565 25.4584 10.0615 24.5674 10.8715C23.7034 11.6545 23.0149 12.829 22.5019 14.395C22.0159 15.961 21.7729 17.9185 21.7729 20.2675C21.7729 22.3735 21.9889 24.223 22.4209 25.816C22.8799 27.409 23.5414 28.651 24.4054 29.542C25.2964 30.433 26.3629 30.8785 27.6049 30.8785C29.0359 30.8785 30.2509 30.2575 31.2499 29.0155C32.2759 27.7465 32.9509 25.87 33.2749 23.386ZM18.2089 16.987V16.4605H36.9199V16.987H18.2089ZM39.597 9.535H45.2265L56.4855 31H50.856L39.597 9.535ZM47.535 20.1055L47.94 20.632L41.217 31H40.5285L47.535 20.1055ZM48.5475 20.632L48.1425 20.1055L54.987 9.535H55.6755L48.5475 20.632ZM65.4136 31H59.9461V9.535H65.4136V31ZM62.7001 6.295C61.8091 6.295 61.0666 5.998 60.4726 5.404C59.9056 4.81 59.6221 4.081 59.6221 3.217C59.6221 2.353 59.9056 1.6375 60.4726 1.0705C61.0666 0.476499 61.8091 0.179498 62.7001 0.179498C63.5641 0.179498 64.2796 0.476499 64.8466 1.0705C65.4406 1.6375 65.7376 2.353 65.7376 3.217C65.7376 4.081 65.4406 4.81 64.8466 5.404C64.2796 5.998 63.5641 6.295 62.7001 6.295ZM85.8746 23.5075H91.2206C90.7886 25.0735 90.0461 26.4505 88.9931 27.6385C87.9671 28.8265 86.7116 29.758 85.2266 30.433C83.7416 31.081 82.1081 31.405 80.3261 31.405C78.1391 31.405 76.1816 30.9325 74.4536 29.9875C72.7256 29.0425 71.3621 27.733 70.3631 26.059C69.3641 24.358 68.8646 22.4275 68.8646 20.2675C68.8646 18.0805 69.3641 16.15 70.3631 14.476C71.3621 12.802 72.7256 11.4925 74.4536 10.5475C76.1816 9.6025 78.1391 9.13 80.3261 9.13C82.1081 9.13 83.7416 9.454 85.2266 10.102C86.7116 10.75 87.9671 11.668 88.9931 12.856C90.0461 14.017 90.7886 15.394 91.2206 16.987H85.8746C85.7126 15.799 85.4156 14.6515 84.9836 13.5445C84.5516 12.4105 83.9576 11.479 83.2016 10.75C82.4456 10.021 81.4871 9.6565 80.3261 9.6565C79.1921 9.6565 78.1796 10.0615 77.2886 10.8715C76.4246 11.6545 75.7361 12.829 75.2231 14.395C74.7371 15.961 74.4941 17.9185 74.4941 20.2675C74.4941 22.3735 74.7101 24.223 75.1421 25.816C75.6011 27.409 76.2626 28.651 77.1266 29.542C78.0176 30.433 79.0841 30.8785 80.3261 30.8785C81.3791 30.8785 82.2836 30.5545 83.0396 29.9065C83.7956 29.2315 84.4166 28.3405 84.9026 27.2335C85.3886 26.1265 85.7126 24.8845 85.8746 23.5075ZM111.286 31H105.819V27.7195V24.9655V22.2115V14.5975C105.819 12.7075 105.535 11.4115 104.968 10.7095C104.401 10.0075 103.686 9.6565 102.822 9.6565C102.282 9.6565 101.782 9.8185 101.323 10.1425C100.864 10.4665 100.5 11.0065 100.23 11.7625C99.9596 12.4915 99.8246 13.504 99.8246 14.8C99.8246 15.07 99.8246 15.3535 99.8246 15.6505C99.8516 15.9475 99.8786 16.2175 99.9056 16.4605H94.3166C94.3166 15.0025 94.6811 13.7335 95.4101 12.6535C96.1661 11.5465 97.1921 10.6825 98.4881 10.0615C99.7841 9.4405 101.229 9.13 102.822 9.13C104.442 9.13 105.886 9.454 107.155 10.102C108.424 10.723 109.423 11.6275 110.152 12.8155C110.908 13.9765 111.286 15.367 111.286 16.987V31ZM99.8651 31.405C98.4881 31.405 97.2731 31.135 96.2201 30.595C95.1941 30.055 94.3976 29.326 93.8306 28.408C93.2636 27.463 92.9801 26.41 92.9801 25.249C92.9801 23.98 93.2771 22.873 93.8711 21.928C94.4921 20.956 95.3156 20.2135 96.3416 19.7005C97.3946 19.1605 98.5691 18.8905 99.8651 18.8905H107.074L106.993 19.417H102.822C101.499 19.417 100.446 19.93 99.6626 20.956C98.9066 21.955 98.5286 23.251 98.5286 24.844C98.5286 26.302 98.8391 27.49 99.4601 28.408C100.081 29.326 100.972 29.785 102.133 29.785C102.862 29.785 103.497 29.5825 104.037 29.1775C104.604 28.7725 105.036 28.2055 105.333 27.4765C105.657 26.7475 105.819 25.9105 105.819 24.9655H106.386C106.386 26.9365 105.792 28.5025 104.604 29.6635C103.443 30.8245 101.863 31.405 99.8651 31.405Z"
          fill="white"
        ></path>
      </svg>

      <ul className="[&>li]:text-white flex gap-2">
        <li
          className={`h-14 flex items-center border-b-[3px] border-b-transparent text-sm hover:border-b-purple-50 cursor-pointer transition-all duration-150 ${
            router.pathname === "/"
              ? "!border-b-purple-50"
              : router.pathname === "home"
              ? "!border-b-purple-50"
              : "border-b-transparent"
          }`}
        >
          <p
            className={`py-2 px-4 transition-all duration-150 hover:bg-black-100 rounded-md ${
              router.pathname === "/"
                ? "text-white"
                : router.pathname === "home"
                ? "text-white"
                : "text-black-50 opacity-80"
            }`}
          >
            Home
          </p>
        </li>

        <li
          className={`h-14 flex items-center border-b-[3px] text-sm hover:border-b-transparent cursor-pointer transition-all duration-150 ${
            router.pathname === "generate"
              ? "!border-b-purple-50"
              : "border-b-transparent"
          }`}
        >
          <p
            className={`text-[#3f3f46] hover:text-white py-2 px-4 transition-all duration-150 hover:bg-black-100 rounded-md ${
              router.pathname === "generate" ? "text-white" : "text-black-50"
            }`}
          >
            Generate
          </p>
        </li>

        <li
          className={`h-14 flex items-center border-b-[3px] text-sm hover:border-b-transparent cursor-pointer transition-all duration-150 ${
            router.pathname === "history"
              ? "!border-b-purple-50"
              : "border-b-transparent"
          }`}
        >
          <p
            className={`text-[#3f3f46] hover:text-white py-2 px-4 transition-all duration-150 hover:bg-black-100 rounded-md ${
              router.pathname === "history" ? "text-white" : "text-black-50"
            }`}
          >
            History
          </p>
        </li>

        <li
          className={`h-14 flex items-center border-b-[3px] text-sm hover:border-b-transparent cursor-pointer transition-all duration-150 ${
            router.pathname === "likes"
              ? "!border-b-purple-50"
              : "border-b-transparent"
          }`}
        >
          <p
            className={`text-[#3f3f46] hover:text-white py-2 px-4 transition-all duration-150 hover:bg-black-100 rounded-md ${
              router.pathname === "likes" ? "text-white" : "text-black-50"
            }`}
          >
            Likes
          </p>
        </li>

        <li
          className={`h-14 flex items-center border-b-[3px] text-sm hover:border-b-transparent cursor-pointer transition-all duration-150 ${
            router.pathname === "account"
              ? "!border-b-purple-50"
              : "border-b-transparent"
          }`}
        >
          <p
            className={`text-[#3f3f46] hover:text-white py-2 px-4 transition-all duration-150 hover:bg-black-100 rounded-md ${
              router.pathname === "account" ? "text-white" : "text-black-50"
            }`}
          >
            Account
          </p>
        </li>
      </ul>

      <CustomButton text="Get started" />
    </nav>
  );
};

export default Navbar;
