import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SidebarLink = ({ Icon, text, link, num }) => {
    return (
        <Link to={link}>
            <div className="rounded-full text-xl p-4 flex text-slate-200 hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer">
                {Icon}
                <span className="hidden md:inline lg:inline xl:inline ml-2">{text}</span>

                {num > 0 && (
                <button className="hidden md:inline lg:inline xl:inline ml-2 bg-sky-300 ml-2 rounded-full text-black w-8 h-8">
                    {num}
                </button>
                )}
            </div>
        </Link>
    );
};

SidebarLink.propTypes = {
    Icon: PropTypes.node, // Node for rendering any valid React node
    text: PropTypes.string,
    link: PropTypes.string,
    num: PropTypes.number,
};

export default SidebarLink;
