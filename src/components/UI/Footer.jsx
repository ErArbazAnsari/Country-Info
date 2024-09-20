import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#2d2d2d] text-white py-5 mt-5 rounded-t-xl">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-3xl cursor-pointer hover:text-[#b5b3b3] active:text-[#ffffff]">
                    CountryDetails
                </div>
                <p className="text-sm">
                    &copy; 2024 CountryDetails. All Rights Reserved.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#b5b3b3]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#b5b3b3]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#b5b3b3]"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
