import Navbar from "../components/Navbar";
import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Targeting", description: "Designed by Good Goods, Inc." },
  {
    name: "Customization",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const tiers = [
  {
    name: "UserGuiding",
    href: "#",
    priceMonthly: 9,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Appcues",
    href: "#",
    priceMonthly: 29,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Userflow",
    href: "#",
    priceMonthly: 59,
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
  },
];
const sections = [
  {
    name: "Features",
    features: [
      {
        name: "No-code Implementation",
        tiers: { Basic: true, Essential: false, Premium: true },
      },
      {
        name: "Text-bubble Walkthroughs",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Audio-visual Walkthroughs",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Tooltips",
        tiers: { Essential: "Up to 20 users", Premium: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Adipiscing.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Eget risus integer.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Gravida leo urna velit.", tiers: { Premium: true } },
      {
        name: "Elementum ut dapibus mi feugiat cras nisl.",
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Sit dignissim.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Congue at nibh et.", tiers: { Essential: true, Premium: true } },
      {
        name: "Volutpat feugiat mattis.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Tristique pellentesque ornare diam sapien.",
        tiers: { Premium: true },
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function compare() {
  return (
    <div className="bg-white">
      <Navbar />
      <Seo title="Compare User Onboarding Tools - - UserOnboarding.Academy" description="Compare best user onboarding tools in details. Decide which one is suitable for you." />

      <div className="bg-indigo-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">UserGuiding vs Appcues</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/userguiding-vs-appcues">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
        </div>
          </div>

       <div className="bg-indigo-30">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">UserGuiding vs Userflow</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/userguiding-vs-userflow">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
        </div>
       </div>

       <div className="bg-indigo-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">UserGuiding vs Userlane</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/userguiding-vs-userlane">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
        </div>
       </div>


       <div className="bg-indigo-30">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Userlane vs Userflow</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/userlane-vs-userflow">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
         </div>
       </div>


       <div className="bg-indigo-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Userlane vs Appcues</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/userlane-vs-appcues">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
        </div>
       </div>


     <Footer />

    </div>
  );
}
