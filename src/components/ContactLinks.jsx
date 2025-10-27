import React from "react";

export default function ContactLinks() {
  return (
    <ul>
      {/* Email */}
      <li className="mt-11">
        <a
          href="mailto:putu@jhonarendra.com"
          title="putu@jhonarendra.com"
          className="group flex items-center"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 opacity-50 group-hover:opacity-100 text-center transition ease-in-out flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="pl-4 text-sm leading-7">putu@jhonarendra.com</span>
        </a>
      </li>

      {/* GitHub */}
      <li className="mt-4">
        <a
          href="https://github.com/jhonarendra"
          title="https://github.com/jhonarendra"
          className="group flex items-center"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 opacity-50 group-hover:opacity-100 text-center transition ease-in-out flex items-center justify-center">
            <svg
              fill="currentColor"
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              />
            </svg>
          </div>
          <span className="pl-4 text-sm leading-7">github.com/jhonarendra</span>
        </a>
      </li>

      {/* LinkedIn */}
      <li className="mt-4">
        <a
          href="http://linkedin.com/in/putu-jhonarendra-490b66139"
          title="http://linkedin.com/in/putu-jhonarendra-490b66139"
          className="group flex items-center"
        >
          <div className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 opacity-50 group-hover:opacity-100 text-center transition ease-in-out flex items-center justify-center">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-6 h-6 text-white"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" />
            </svg>
          </div>
          <span className="pl-4 text-sm leading-7">Putu Jhonarendra</span>
        </a>
      </li>
    </ul>
  );
}
