import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#2d2d2d] text-white py-5 mt-5 rounded-t-xl">
            <div className="container mx-auto px-4 grid sm:grid-cols-1 gap-1 justify-center text-center items-center">
                <div className="flex space-x-3 justify-center">
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
                <p className="text-sm">
                    &copy; 2024 CountryDetails. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
