import { useFetcher } from "@remix-run/react";
import { plans } from "~/config";
import SubmitButton from "./submitButton";

export default function Pricing() {
  const fetcher = useFetcher();

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-800">
            One price fits all
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Fair, transparent pricing.
          </p>
        </div>
        <div className="flex flex-row items-center">
          {plans.map((plan: any) => (
            <div
              className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-800 bg-white border border-gray-100 rounded-lg shadow xl:p-8"
              key={plan.price_id}
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg">
                {plan.description}
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.benefits.map((benefit: string) => {
                  return (
                    <li className="flex items-center space-x-3" key={benefit}>
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  );
                })}
              </ul>
              <fetcher.Form method="POST" action="/pay">
                <input type="hidden" name="price_id" value={plan.price_id} />
                <SubmitButton label="Get started" />
              </fetcher.Form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
