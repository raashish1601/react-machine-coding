import { MULTILEVEL_DROPDOWN_DATA } from "../../constants/constants";
import MenuItems from "./MenuItems";
import "./MultilevelDropdown.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus" > {
                MULTILEVEL_DROPDOWN_DATA.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                        <MenuItems
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    );
                })
            }
            </ul>
        </nav>
    );
};

export default Navbar;