import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PopupGrid from "../components/Popups/PopupsGrid";
import { getAllPopups } from "../lib/PopupApi";

export default function ReallyGood({ allPopups }) {
  const [filteredAllPopups, setFilteredAllPopups] = useState(allPopups);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([
    {
      value: "objects",
      label: "Objects",
    },
  ]);
  const [numbers, setNumbers] = useState({ 0: 3, 1: 3 });
  const [filters, setFilters] = useState([
    {
      id: "category",
      name: "Category",
      options: [
        { value: 1, label: "User Onboarding", checked: true },
        { value: 2, label: "Welcome Flow", checked: true },
        { value: 3, label: "Checklists", checked: true },
      ],
    },
    {
      id: "product",
      name: "Product",
      options: [
        { value: 1, label: "Userguiding", checked: true },
        { value: 2, label: "Appcues", checked: true },
        { value: 3, label: "Userflow", checked: true },
      ],
    },
  ]);

  const checkboxOnChange = (e, sectionIdx, optionIdx) => {
    const a = (filters[sectionIdx].options[optionIdx].checked = e);
    setFilters(filters);
    const length = filters[sectionIdx].options.filter(function (s) {
      return s.checked;
    }).length;
    setNumbers((prev) => ({ ...prev, [sectionIdx]: length }));
    console.log(allPopups);

    // category filter
    const ffc = filters.map((f) => {
      return f.options.filter((o) => o.checked);
    });
    const asd = ffc[sectionIdx].map((x) => {
      return sectionIdx === 0
        ? allPopups.filter((e) => e.category === x.value).shift()
        : allPopups.filter((e) => e.product === x.value).shift();
    });
    setFilteredAllPopups(asd);
  };

  return (
    <div className="bg-gray-50">
      <Seo
        title="Really Good User Onboarding"
        description="Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out."
      />
      <Navbar />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 sm:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
               
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                #ReallyGoodUserOnboardings
              </h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Our thoughtfully designed workspace objects are crafted in
                limited runs. Improve your productivity and organization with
                these sale items before we run out.
              </p>
            </div>
          </div>

          
          
          <PopupGrid popups={filteredAllPopups} filters={filters} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPopups = getAllPopups([
    "title",
    "description",
    "popupImage",
    "popupImageAlt",
    "popupImage2",
    "popupImage2Alt",
    "videoId",
    "slug",
    "product",
    "category",
    "bullets",
  ]);

  return {
    props: { allPopups },
  };
}
