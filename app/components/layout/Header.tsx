import { useLocation } from "@remix-run/react";
import { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils/utils";

const regularUrls = {
  Pricing: "/pricing",
  Login: "/login",
  "Get started": "/signup",
};

const authenticatedUrls = {
  Pricing: "/pricing",
  Dashboard: "/dashboard",
  Settings: "/settings",
};

export default function Header({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean;
}) {
  const location = useLocation();

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            price tracker
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {Object.entries(
              isAuthenticated ? authenticatedUrls : regularUrls,
            ).map(([label, url]) => (
              <li key={label}>
                <a
                  href={url}
                  className={
                    location.pathname === url
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      : "block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0"
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
