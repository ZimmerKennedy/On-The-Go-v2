import React from 'react'

const Alert = ({isAlertShown, setIsAlertShown}) => {
  return (
    <>
    {isAlertShown && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Error:</strong>
          <span className="ml-1 block sm:inline">
            Please fill in all the required fields before searching.
          </span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setIsAlertShown(false)}
            >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.641 3.641a.5.5 0 1 1-.707.707L10 10.707l-3.641 3.641a.5.5 0 1 1-.707-.707L9.293 10 5.652 6.359a.5.5 0 0 1 .707-.707L10 9.293l3.641-3.641a.5.5 0 0 1 .707 0z"
                />
            </svg>
          </span>
        </div>
      )}
      </>
  )
}

export default Alert