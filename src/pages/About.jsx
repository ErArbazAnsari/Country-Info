import React from "react";
import CountryData from "../api/CountryApi.json"; // Assuming you have the JSON data here

const About = () => {
    return (
        <div>
            <h2 className="text-5xl text-center">
                Here are the Interesting Facts <br /> we're proud of
            </h2>
            <div className="flex flex-wrap justify-center p-5">
                {CountryData.map((country) => (
                    <div
                        key={country.id}
                        className="bg-[#1a1a1a] text-white rounded-lg shadow-lg m-4 p-6 w-80 hover:bg-[#3f3f3f9a] hover:cursor-pointer"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            {country.countryName}
                        </h2>
                        <p className="text-gray-400">
                            <span className="font-semibold text-white">
                                Capital:
                            </span>{" "}
                            {country.capital ? country.capital : "No Capital"}
                        </p>
                        <p className="text-gray-400">
                            <span className="font-semibold text-white">
                                Population:
                            </span>{" "}
                            {country.population
                                ? country.population.toLocaleString()
                                : "Null"}
                        </p>
                        <p className="text-gray-400">
                            <span className="font-semibold text-white">
                                Interesting Fact:
                            </span>{" "}
                            {country.interestingFact}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
