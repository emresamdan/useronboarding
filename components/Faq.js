/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is User Onboarding?",
    answer:
      "User onboarding is an ever-ongoing process in which you help users find the value you offer to them and try to get them to their 'Aha!' moments by explaining the specifics and how-tos of your product.",
  },
  {
    question: "What makes User Onboarding good?",
    answer:
      "A great user onboarding is always user-centric, interactive, and quick to show the functionalities of the product.",
  },
  {
    question: "Why is User Onboarding important?",
    answer:
      "Onboarding is your first chance to make a great impression, which can end up in higher retention and conversion rates.",
  },
  {
    question: "Why should you use User Onboarding Tools?",
    answer:
      "Your product is precious, and spending so much developer time to build elements for your user onboarding might harm your business more than you think; use onboarding tools to avoid starting from scratch.",
  },
  {
    question: "What Are Product Walkthroughs?",
    answer:
      "Product Walkthroughs are interactive experiences that take the user through the steps they need to take in order to complete key tasks within the product. Product walkthroughs can be highly effective when done well.",
  },
  {
    question: "What is a product tour?",
    answer:
      "A Product Tour is virtually guiding your users through the basics and necessary features of your product. Product tours are meant to be definitive, clear, and simple so that the user reaches the 'Aha!' moment quickly, without being overwhelmed.",
  },
  {
    question: "What is product adoption?",
    answer:
      "Product adoption, by definition, is a process by which customers hear about a new product or a service and become recurring users of it.",
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
