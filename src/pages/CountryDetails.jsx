import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryDetails } from "../api/postApi";
import Loader from "../components/UI/Loader";

const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        startTransition(async () => {
            const response = await getCountryDetails(params.name);
            setCountry(response.data[0]);
        });
    }, [params.name]);

    if (isPending || !country) return <Loader />;

    return (
        <div className="min-h-screen">
            <div className="text-center my-10">
                <NavLink to={"/country"}>
                    <button className="bg-blue-500 py-2 px-5 rounded-lg hover:bg-blue-600 active:bg-blue-500">
                        Go Back
                    </button>
                </NavLink>
            </div>
            <div className="max-w-4xl mx-auto bg-[#2d2d2d] shadow-lg rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center mb-6">
                    <img
                        src={country.flags.png}
                        alt={
                            country.flags.alt ||
                            `Flag of ${country.name.common}`
                        }
                        className="w-48 md:w-64 rounded shadow-md mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold  mb-2">
                            {country.name.common}{" "}
                            <span className="">({country.cca2})</span>
                        </h1>
                        <p className="text-lg ">{country.name.official}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#4a4a4a] p-4 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">
                            General Info
                        </h2>
                        <p>
                            <strong>Capital:</strong> {country.capital?.[0]}
                        </p>
                        <p>
                            <strong>Population:</strong>{" "}
                            {country.population.toLocaleString()}
                        </p>
                        <p>
                            <strong>Area:</strong>{" "}
                            {country.area.toLocaleString()} km²
                        </p>
                        <p>
                            <strong>Continents:</strong>{" "}
                            {country.continents.join(", ")}
                        </p>
                    </div>

                    <div className="bg-[#4a4a4a] p-4 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">
                            Languages & Currency
                        </h2>
                        <p>
                            <strong>Languages:</strong>{" "}
                            {Object.values(country.languages).join(", ")}
                        </p>
                        <p>
                            <strong>Currency:</strong>{" "}
                            {Object.keys(country.currencies)
                                .map(
                                    (curr) =>
                                        `${curr} (${country.currencies[curr].name}, ${country.currencies[curr].symbol})`
                                )
                                .join(", ")}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#4a4a4a] p-4 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">
                            Additional Info
                        </h2>
                        <p>
                            <strong>Driving Side:</strong> {country.car.side}
                        </p>
                        <p>
                            <strong>FIFA Code:</strong> {country.fifa}
                        </p>
                    </div>

                    <div className="bg-[#4a4a4a] p-4 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Maps</h2>
                        <p>
                            <a
                                href={country.maps.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View on Google Maps
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={country.coatOfArms.png}
                        alt={`Coat of Arms of ${country.name.common}`}
                        className="w-64 mt-4 rounded bg-white p-5"
                    />
                </div>
            </div>
            <div className="text-center my-10">
                <NavLink to={"/country"}>
                    <button className="bg-blue-500 py-2 px-5 rounded-lg hover:bg-blue-600 active:bg-blue-500">
                        Go Back
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default CountryDetails;
