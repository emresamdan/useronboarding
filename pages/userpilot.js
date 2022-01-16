import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";


import Airtable from "airtable";

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const base = new Airtable({ apiKey: "keytReU5ICIRZNgpg" }).base(
  "appx5oKfahgMZgKfy"
);

/* This example requires Tailwind CSS v2.0+ */

// CATEGORY TYPES
// category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
// category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
// category: { name: "Case Study", href: "#", color: "bg-green-100 text-green-800" },

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What is the pricing of Userpilot?",
    answer:
      "Userpilot costs $249/month for a growth plan and $749/month for an enterprise plan if paid annually. Userpilot also offers a 14-day free trial.",
  },
  {
    id: 2,
    question: "Does Userpilot have a chrome extension?",
    answer:
      "Yes, Userpilot has a chrome extension which makes it easier to create guides while you are viewing a product.",
  },
  {
    id: 3,
    question: "Does Userpilot offer a Demo?",
    answer:
      "Yes, you can contact Userpilot and schedule a demo if you want to be trained live.",
  },
  {
    id: 4,
    question: "What integrations does Userpilot have?",
    answer:
      "Userpilot has integrations with Google Analytics, Amplitude, Intercom, and Segment.",
  },
  {
    id: 5,
    question: "How do I install Userpilot?",
    answer:
      "To install Userpilot, you should first create a profile. Then, you should copy the provided JavaScript code and paste it into your product's code as instructed. You can contact their support channels if you need help.",
  },
  {
    id: 6,
    question: "What does Userpilot do?",
    answer:
      "Userpilot helps you create onboarding flows with elements such as hotspots, tooltips, interactive product tours, and checklists.",
  },
  {
    id: 7,
    question: "Where is Userpilot based?",
    answer: "Userpilot is based in San Francisco, California, USA.",
  },
  {
    id: 8,
    question: "Does Userpilot have an analytics feature?",
    answer:
      "Yes, userpilot allows you to track your end-users activities. The tool also offers integrations with analytics tools such as Google Analytics and Amplitude.",
  },
  {
    id: 9,
    question: "Is Userpilot better than Intercom?",
    answer:
      "Userpilot has more features than Intercom and can be more affordable if you don't already have an Intercom subscription. ",
  },
];

const pricing = {
  tiers: [
    {
      title: "Growth",
      price: 299,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "For only 2500 users with annual billing.",
        "Up to 5 Languages",
        "Up to 10 Seats",
        "Up to 25 Features",
        "Reporting, Targeting & Customization",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 749,
      frequency: "/month",
      description: "Custom quotation required for enterprise packages.",
      features: [
        "For only 2500 users with annual billing.",
        "Unlimited Languages",
        "Unlimited Seats",
        "Unlimited Features",
        "Security Audit & Compliance (SOC 2 Type 2 and GDPR)",
      ],
      cta: "Annually Billing",
      mostPopular: false,
    },
  ],
};

/* This example requires Tailwind CSS v2.0+ */
import heroicons from "@heroicons/react/outline";

const features = [
  {
    name: "Product Walkthroughs",
    description:
      "Interactive in-app tours that walk users through your product or a certain feature, to improve user training.",
  },
  {
    name: "In-app Messages",
    description:
      "Tooltips, hotspots, and announcement banners to improve feature adoption and user engagement.",
  },
  {
    name: "Interactive Checklists",
    description:
      "Checklists can be used as help centers and checkpoints to track onboarding flow.",
  },
  {
    name: "In-app Surveys",
    description:
      "NPS or short-form surveys to engage with your users and gather valuable feedback at the right time.",
  },
  {
    name: "Product Usage Tracking",
    description:
      "In-depth analytics of the performance of your interactive content and overall product usage.",
  },
];

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { format } from "date-fns";

export default function Example({ posts }) {
  return (
    <div>
      <Seo
        title="Userpilot - UserOnboarding.Academy"
        description="Userpilot is a user engagement tool that allows you to create interactive walkthroughs for your platform and onboard your end-users without friction. "
      />
      <Navbar />
      <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-20">
                <div>
                  <a rel="nofollow" href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                      What's new
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
                      <span>Just shipped version 0.1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Userpilot
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Userpilot is a user engagement tool that allows you to
                    create interactive walkthroughs for your platform and
                    onboard your end-users without friction. While not being the
                    most non-technical people-friendly feature adoption tool on
                    the market, Userpilot offers a wide range of features and
                    use cases.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="flex-shrink-0 flex pr-5">
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">
                        Rated 4.7 stars
                      </span>{" "}
                      by over{" "}
                      <a
                        rel="nofollow"
                        href="https://www.g2.com/products/userpilot/reviews"
                        target="_blank"
                      >
                        <span className="font-medium text-indigo-600">
                          77 G2 users
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="assets/reviews/userpilot.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Features
            </h2>
            <p className="mt-4 text-lg text-gray-500"></p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Pricing plans for teams of all sizes
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Userpilot has two different pricing plans. Pricing for each plan below
          scales with your monthly active users.
        </p>

        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-indigo-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="bg-indigo-800">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <div className="md:flex-shrink-0 w-12">
              <a
                rel="nofollow"
                href="https://www.g2.com/products/userpilot/reviews/userpilot-review-4307519"
                target="_blank"
              >
                <img
                  className="h-12"
                  src="assets/reviews/g2-logo.png"
                  alt="G2 Logo"
                />
              </a>
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  <b>
                    "Userpilot - A valuable addition to the SkillsTx Service
                    provision"
                  </b>
                  <p>
                    The functionality and price competitiveness. The ease of
                    setting up new Experiences and Checklists and the scope in
                    terms of what it can be used for. The UserPilot promptness
                    to replying and resolving any queries and issues.
                  </p>
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="assets/reviews/default-profile-photo.jpg"
                      alt="default profile photo"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Graham K.
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      Small-Business
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <div className="md:flex-shrink-0 w-40">
              <a
                rel="nofollow"
                href="https://www.capterra.com/p/179187/Userpilot/#reviews"
                target="_blank"
              >
                <img
                  className="h-12"
                  src="assets/reviews/capterra-logo.png"
                  alt="Capterra Logo"
                />
              </a>
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  <b>"Mediocre product, and awful customer service"</b>
                  <p>
                    Mediocre software that didn't provide my business with any
                    real value and it was a pain to cancel. Price is outrageous
                    and customer service is awful.
                  </p>
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="assets/reviews/default-profile-photo.jpg"
                      alt="default profile photo"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Darin H.
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      President
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/*Twitter posts*/}

      {/*<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recent tweets related to Userpilot
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>*/}

      <Footer />
    </div>
  );
}

{
  /*export async function getStaticProps() {
  const result = await base("Data")
    .select({
      view: "view",
    })
    .all();

  const posts = result.map((entry) => {
    return {
      title: entry.get("handle"),
      href: entry.get("tweetLink"),
      category: {
        name: "News",
        href: "#",
        color: "bg-indigo-100 text-indigo-800",
      },
      description: entry.get("text"),
      date: format(new Date(entry.get("tweetDate")), "MMM dd, yyyy"),
      datetime: format(new Date(entry.get("tweetDate")), "yyyy-MM-dd"),
      author: {
        name: entry.get("name"),
        href: entry.get("profileUrl"),
        imageUrl: `https://unavatar.io/twitter/${entry.get("handle")}`,
      },
      readingTime: "6 min",
    };
  });

  return {
    props: {
      posts,
    },
  };
}*/
}
