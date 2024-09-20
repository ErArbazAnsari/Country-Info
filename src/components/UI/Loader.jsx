import { Circles } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="min-h-screen flex justify-center items-center -mt-20">
            <div>
                <Circles
                    height="50"
                    width="50"
                    color="#fff"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loader;
