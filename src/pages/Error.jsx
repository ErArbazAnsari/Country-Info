import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const errorFound = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold mb-4">
                Oops! Something went wrong.
            </h1>
            <p className="text-lg  mb-4">
                We can't seem to find the page you're looking for.
            </p>
            {errorFound && (
                <div className="text-center">
                    <p className="text-xl text-red-500 mb-4">
                        <i>{errorFound.statusText || errorFound.message}</i>
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                        <strong>Error Code:</strong>{" "}
                        {errorFound.status || "Unknown"}
                    </p>
                </div>
            )}
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default Error;
