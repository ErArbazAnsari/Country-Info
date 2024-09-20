import contacts from "../api/ContactSectionData.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
const iconComponents = {
    IoCallSharp: IoCallSharp,
    MdPlace: MdPlace,
    TbMailPlus: TbMailPlus,
};

const ContactSection = () => {
    return (
        <section className="container mx-auto mt-5 p-8 bg-[#2d2d2d] rounded-xl shadow-lg">
            <div className="text-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 place-items-center">
                {contacts.map(({ id, icon, title, details }) => {
                    const IconComponent = iconComponents[icon];
                    return (
                        <div
                            key={id}
                            className="flex flex-col items-center p-6 bg-white text-blue-950 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {IconComponent && (
                                    <IconComponent className="text-4xl" />
                                )}
                                <h2 className="text-xl font-semibold">
                                    {title}
                                </h2>
                            </div>
                            <p className="text-center text-lg">{details}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ContactSection;
