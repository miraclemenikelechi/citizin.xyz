import "./top-nav.scss";
import { Link } from "react-router-dom";
import { DashboardIcon, Logo, NavDropDown} from "../../assets/icons/";


const TopNav = () => {
    const

        NavbarLink = ({ to, children }) => {
            return (
                <Link to={to}>
                    <span>{children}</span>
                    <span><NavDropDown /></span>
                </Link>
            );
        },

        links = [
            { to: "/", text: "all proposals" },
            { to: "/", text: "all DAO's" },
            { to: "/", text: "delegations" },
        ];



    return (
        <section className="topNav">
            <div>

                <div className="logo">
                    <Link>
                        <span><Logo /></span>
                        <span>citizin.xyz</span>
                    </Link>
                </div>

                <nav>
                    {
                        links.map((link, index) => {
                            const { to, text } = link;
                            return (
                                <NavbarLink key={index} to={to}>{text}</NavbarLink>
                            );
                        })
                    }
                </nav>

                <div className="right">
                    <button>
                        <span><DashboardIcon /> </span>
                        <span>dashboard</span>
                    </button>

                    <hr />

                    <div>
                        <span>
                            <img src="/profile_pic.jpg" alt="" />
                        </span>

                        <div>
                            <span>Jehee.eth</span>
                            <span>0x63736hgv393...</span>
                        </div>

                        <span>
                            <NavDropDown />
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopNav;