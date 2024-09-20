import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { NavLink } from "react-router-dom";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState(localStorage.getItem("search") || "");
    const [filter, setFilter] = useState(
        localStorage.getItem("filter") || "all"
    );

    useEffect(() => {
        startTransition(async () => {
            const response = await getCountryData();
            setCountries(response.data);
        });
    }, []);

    if (isPending) return <Loader />;

    const searchCountry = (country) => {
        if (search) {
            return country.name.common
                .toLowerCase()
                .includes(search.toLowerCase());
        }
        return true;
    };

    const filterCountry = (country) => {
        if (filter === "all") {
            return country;
        }
        return country.region === filter;
    };

    const filteredCountries = countries.filter(
        (country) => searchCountry(country) && filterCountry(country)
    );

    return (
        <div>
            <div>
                <SearchFilter
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    countries={countries}
                    setCountries={setCountries}
                />
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-full">
                {filteredCountries.map((country, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-[#2d2d2d84] border border-[#54545484] rounded-lg shadow-md hover:bg-[#2d2d2dce] duration-100 ease-in-out"
                    >
                        <img
                            className="w-full h-40 object-cover rounded-t-lg"
                            src={country.flags.png}
                            alt={
                                country.flags.alt ||
                                `${country.name.common} Flag`
                            }
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {country.name.common}
                            </h3>
                            <p className="text-sm text-gray-600">
                                <strong>Region:</strong> {country.region}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Capital:</strong>{" "}
                                {country.capital?.[0] || "N/A"}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Population:</strong>{" "}
                                {country.population.toLocaleString()}
                            </p>
                            <NavLink to={`/country/${country.name.common}`}>
                                <button className="border border-[#545454c4] py-1 px-3 mt-3 rounded-lg hover:bg-[#2d2d2d] active:bg-[#2d2d2d84]">
                                    Read More
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Country;
