import React from "react";

const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
}) => {
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        localStorage.setItem("search", e.target.value);
    };

    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
        localStorage.setItem("filter", e.target.value);
    };

    const sortCountry = (order) => {
        const sortedCountry = [...countries].sort((a, b) => {
            if (order === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else {
                return b.name.common.localeCompare(a.name.common);
            }
        });
        setCountries(sortedCountry);
    };
    return (
        <section className="p-5 flex justify-between">
            <div className="relative flex items-center max-w-sm">
                <input
                    type="text"
                    placeholder="Search Country"
                    value={search}
                    onChange={handleInputChange}
                    className="border border-[#545454c4] rounded-lg p-2 pr-10 w-full text-black"
                />
                {search && (
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:font-bold"
                        onClick={() => {
                            setSearch("");
                            localStorage.removeItem("search");
                        }}
                    >
                        X
                    </button>
                )}
            </div>

            <div className="flex gap-3 items-center">
                <div>
                    <button
                        className="border border-[#545454c4] rounded-lg py-1 px-3 bg-white text-black hover:bg-[#b8b8b8] active:bg-white"
                        onClick={() => {
                            sortCountry("asc");
                        }}
                    >
                        Asc
                    </button>
                </div>
                <div>
                    <button
                        className="border border-[#545454c4] rounded-lg py-1 px-3 bg-white text-black hover:bg-[#b8b8b8] active:bg-white"
                        onClick={() => {
                            sortCountry("des");
                        }}
                    >
                        Des
                    </button>
                </div>
                <select
                    className="border border-[#545454c4] rounded-lg py-[7px] px-3 text-black"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Asia">Asia</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilter;
