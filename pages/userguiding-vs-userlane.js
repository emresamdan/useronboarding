import Navbar from "../components/Navbar";
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import Footer from "../components/Footer";

const plans = [
    {
        title: 'UserGuiding',
        featured: true,
        description: 'Userguiding is software businesses use for product adoption and onboarding users.',
        priceMonthly: 99,
        priceYearly: 82,
        mainFeatures: [
            { id: 1, value: 'Easy ease of use, setup, and integration' },
            { id: 2, value: 'Simple Analytics, Segmentation and Targeting' },
            { id: 3, value: 'Great Customization' },
            { id: 4, value: 'Affordable Price ' },
            { id: 5, value: 'Multilingual User Onboarding' },
            { id: 6, value: 'Excellent Customer Support' },
        ],
    },
    {
        title: 'Userlane',
        featured: true,
        description: 'Userlane is an effective software for teams that want to accelerate their user onboarding. Well designed with good UX and UI.',
        priceMonthly: "Custom Pricing",
        priceYearly: "Custom Pricing",
        mainFeatures: [
            { id: 1, value: 'Not so easy to use and setup' },
            { id: 2, value: 'No downloadable Analytics Report' },
            { id: 3, value: 'Good UX and UI' },
            { id: 4, value: 'No Pricing Model for starters with only a few end-users' },
            { id: 5, value: 'Multilingual User Onboarding' },
            { id: 6, value: 'Good Customer Support' },
        ],
    },


]
const features = [
    {
        title: 'Onboarding tours',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
        ],
    },
    {
        title: 'Tooltips ',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Survey ',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'NPS',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Checklists',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
           
        ],
    },
    {
        title: 'Resource Center',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: false },
            
        ],
    },
    {
        title: 'Hotspots',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Help Center',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'In-app messaging',
        tiers: [
            { title: 'userguiding', value: false },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'In-app surveys',
        tiers: [
            { title: 'userguiding', value: false },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
]
const perks = [
    {
        title: 'HTTP API Access',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Segment',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: false },
            
        ],
    },
    {
        title: 'Analytics Tools',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Zendesk',
        tiers: [
            { title: 'userguiding', value: false },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
    {
        title: 'Zapier',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: false },
            
        ],
    },
    {
        title: 'Intercom',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: false },
            
        ],
    },
    {
        title: 'Mixpanel',
        tiers: [
            { title: 'userguiding', value: true },
            { title: 'userlane', featured: true, value: false },
            
        ],
    },
    {
        title: 'KnowledgeOwl ',
        tiers: [
            { title: 'userguiding', value: false },
            { title: 'userlane', featured: true, value: true },
            
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


/* This example requires Tailwind CSS v2.0+ */
export default function popupsmartvssleeknote() {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">User Onboarding Comparison</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        UserGuiding vs Userlane
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Let's compare   <b>UserGuiding</b> and <b>Userlane</b> and also cover some of the best features that offer better value for money.
                    </p>
                </div>
            </div>






            <div className="bg-gray-50">
                <div className="relative bg-indigo-600">
                    {/* Overlapping background */}
                    <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

                    <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            <span className="block lg:inline">Simple pricing,</span>
                            <span className="block lg:inline">no commitment.</span>
                        </h1>
                        <p className="mt-4 text-xl text-indigo-100">
                            Everything you need, nothing you don't. Pick a plan that best suits your business.
                        </p>
                    </div>

                    <h2 className="sr-only">Plans</h2>



                    {/* Cards */}
                    <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                        {/* Decorative background */}
                        <div
                            aria-hidden="true"
                            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-600 rounded-tl-lg rounded-tr-lg lg:block"
                        />

                        <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:space-x-10">
                            {plans.map((plan) => (
                                <div
                                    key={plan.title}
                                    className={classNames(
                                        plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
                                        'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                                    )}
                                >
                                    <div>
                                        <h3
                                            className={classNames(
                                                plan.featured ? 'text-indigo-600' : 'text-white',
                                                'text-sm font-semibold uppercase tracking-wide'
                                            )}
                                        >
                                            {plan.title}
                                        </h3>
                                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                                            <div className="mt-3 flex items-center">
                                                <p
                                                    className={classNames(
                                                        plan.featured ? 'text-indigo-600' : 'text-white',
                                                        'text-4xl font-extrabold tracking-tight'
                                                    )}
                                                >
                                                    ${plan.priceMonthly}
                                                </p>
                                                <div className="ml-4">
                                                    <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                                                        USD / mo
                                                    </p>
                                                    <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                                                        Billed yearly (${plan.priceYearly})
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className={classNames(
                                                    plan.featured
                                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                                        : 'bg-white text-indigo-600 hover:bg-indigo-50',
                                                    'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                                                )}
                                            >
                                                Buy {plan.title}
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="sr-only">Features</h4>
                                    <ul
                                        role="list"
                                        className={classNames(
                                            plan.featured
                                                ? 'border-gray-200 divide-gray-200'
                                                : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                                            'mt-7 border-t divide-y lg:border-t-0'
                                        )}
                                    >
                                        {plan.mainFeatures.map((mainFeature) => (
                                            <li key={mainFeature.id} className="py-3 flex items-center">
                                                <CheckIcon
                                                    className={classNames(
                                                        plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                                                        'w-5 h-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span
                                                    className={classNames(
                                                        plan.featured ? 'text-gray-600' : 'text-white',
                                                        'ml-3 text-sm font-medium'
                                                    )}
                                                >
                                                    {mainFeature.value}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feature comparison (up to lg) */}
                <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                    <h2 id="mobile-comparison-heading" className="sr-only">
                        Feature comparison
                    </h2>

                    <div className="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
                        {plans.map((plan, mobilePlanIndex) => (
                            <div key="plan.title" className="border-t border-gray-200">
                                <div
                                    className={classNames(
                                        plan.featured ? 'border-transparent' : 'border-transparent',
                                        '-mt-px pt-6 border-t-2 sm:w-1/2'
                                    )}
                                >
                                    <h3 className={classNames(plan.featured ? 'text-gray-900' : 'text-gray-900', 'text-sm font-bold')}>
                                        {plan.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                </div>
                                <h4 className="mt-10 text-sm font-bold text-gray-900">Features</h4>

                                <div className="mt-6 relative">
                                    {/* Fake card background */}
                                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                        <div
                                            className={classNames(
                                                plan.featured ? 'shadow-md' : 'shadow',
                                                'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                                            )}
                                        />
                                    </div>

                                    <div
                                        className={classNames(
                                            plan.featured ? 'ring-1 ring-black ring-opacity-5 shadow' : 'ring-1 ring-black ring-opacity-5 shadow',
                                            'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                                        )}
                                    >
                                        <dl className="divide-y divide-gray-200">
                                            {features.map((feature) => (
                                                <div
                                                    key={feature.title}
                                                    className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                                                >
                                                    <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                                                    <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                        {typeof feature.tiers[mobilePlanIndex].value === 'string' ? (
                                                            <span
                                                                className={classNames(
                                                                    feature.tiers[mobilePlanIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                                                    'text-sm font-medium'
                                                                )}
                                                            >
                                                                {feature.tiers[mobilePlanIndex].value}
                                                            </span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[mobilePlanIndex].value === true ? (
                                                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                                ) : (
                                                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                                                                </span>
                                                            </>
                                                        )}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>

                                    {/* Fake card border */}
                                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                        <div
                                            className={classNames(
                                                plan.featured ? 'ring-1 ring-black ring-opacity-5' : 'ring-1 ring-black ring-opacity-5',
                                                'absolute right-0 w-1/2 h-full rounded-lg'
                                            )}
                                        />
                                    </div>
                                </div>

                                <h4 className="mt-10 text-sm font-bold text-gray-900">Integrations</h4>

                                <div className="mt-6 relative">
                                    {/* Fake card background */}
                                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                        <div
                                            className={classNames(
                                                plan.featured ? 'shadow-md' : 'shadow',
                                                'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                                            )}
                                        />
                                    </div>

                                    <div
                                        className={classNames(
                                            plan.featured ? 'ring-1 ring-black ring-opacity-5 shadow' : 'ring-1 ring-black ring-opacity-5 shadow',
                                            'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                                        )}
                                    >
                                        <dl className="divide-y divide-gray-200">
                                            {perks.map((perk) => (
                                                <div key={perk.title} className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                                                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                                                    <dd className="text-center sm:px-4">
                                                        {perk.tiers[mobilePlanIndex].value === true ? (
                                                            <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                        ) : (
                                                            <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        )}

                                                        <span className="sr-only">{perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}</span>
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>

                                    {/* Fake card border */}
                                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                        <div
                                            className={classNames(
                                                plan.featured ? 'ring-1 ring-black ring-opacity-5' : 'ring-1 ring-black ring-opacity-5',
                                                'absolute right-0 w-1/2 h-full rounded-lg'
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feature comparison (lg+) */}
                <section aria-labelledby="comparison-heading" className="hidden lg:block">
                    <h2 id="comparison-heading" className="sr-only">
                        Feature comparison
                    </h2>

                    <div className="max-w-7xl mx-auto py-24 px-8">
                        <div className="w-full border-t border-gray-200 flex items-stretch">
                            <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                                <h3 className="mt-auto text-sm font-bold text-gray-900">Features</h3>
                            </div>
                            {plans.map((plan, planIdx) => (
                                <div
                                    key={plan.title}
                                    aria-hidden="true"
                                    /* Feature comparison center align with flex-1 */
                                    className={classNames(planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4 flex-1 ' )}
                                >
                                    <div
                                        className={classNames(plan.featured ? 'border-transparent' : 'border-transparent', 'py-6 border-t-2' )}
                                    >
                                        <p className={classNames(plan.featured ? 'text-gray-900' : 'text-gray-900', 'text-sm font-bold')}>
                                            {plan.title}
                                        </p>
                                        <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            {/* Fake card backgrounds */}
                            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                                <div className="w-1/4 pr-4" />
                                {/* Fake card backgrounds center align with flex-1*/}
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                                </div>
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                                </div>
                                
                            </div>

                            <table className="relative w-full">
                                <caption className="sr-only">Business feature comparison</caption>
                                <thead>
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">Feature</span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">{plan.title} plan</span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {features.map((feature) => (
                                        <tr key={feature.title}>
                                            {/* Table center align with w-1/6 */}
                                            <th scope="row" className="w-1/6 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                                                {feature.title}
                                            </th>
                                            {feature.tiers.map((tier, tierIdx) => (
                                                <td
                                                    key={tier.title}
                                                    className={classNames(
                                                        tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                        'relative w-1/4 py-0 text-center'
                                                    )}
                                                >
                                                    <span className="relative w-full h-full py-3">
                                                        {typeof tier.value === 'string' ? (
                                                            <span
                                                                className={classNames(
                                                                    tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                                                    'text-sm font-medium'
                                                                )}
                                                            >
                                                                {tier.value}
                                                            </span>
                                                        ) : (
                                                            <>
                                                                {tier.value === true ? (
                                                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                                ) : (
                                                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                                            </>
                                                        )}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Fake card borders */}
                            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                                <div className="w-1/4 pr-4" />
                                {/* Fake card border center align with flex-1*/}
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5 " />
                                </div>
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5 " />
                                </div>
                                
                            </div>
                        </div>

                        <h3 className="mt-10 text-sm font-bold text-gray-900">Integrations</h3>

                        <div className="mt-6 relative">
                            {/* Fake card backgrounds */}
                            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                                <div className="w-1/4 pr-4 " />
                                {/* Fake card background center align with flex-1*/}
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full bg-white rounded-lg shadow" />
                                </div>
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                                </div>                         
                            </div>

                            <table className="relative w-full">
                                <caption className="sr-only">Perk comparison</caption>
                                <thead>
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">Perk</span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">{plan.title} plan</span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {perks.map((perk) => (
                                        <tr key={perk.title}>
                                            {/* Table row center by w-1/6 */}
                                            <th scope="row" className="w-1/6 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                                                {perk.title}
                                            </th>
                                            {perk.tiers.map((tier, tierIdx) => (
                                                <td
                                                    key={tier.title}
                                                    className={classNames(
                                                        tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                        'relative w-1/4 py-0 text-center'
                                                    )}
                                                >
                                                    <span className="relative w-full h-full py-3">
                                                        {tier.value === true ? (
                                                            <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                        ) : (
                                                            <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        )}

                                                        <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Fake card borders */}
                            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                                <div className="w-1/4 pr-4" />
                                {/* Fake card background center align with flex-1*/}
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                </div>
                                <div className="w-1/4 px-4 flex-1">
                                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>















            <Footer />





        </div>
    )
}