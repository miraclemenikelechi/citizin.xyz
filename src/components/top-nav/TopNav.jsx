import "./top-nav.scss";
import { Link } from "react-router-dom";
import { DashboardIcon, Logo, NavDropDown } from "../../assets/icons/";
import { useAccount } from "wagmi";
import { truncateWalletAddress } from "../../lib/truncate-address";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";

const TopNav = () => {
    const { address, isConnected } = useAccount();
    const { openAccountModal } = useAccountModal();
    const { openConnectModal } = useConnectModal();

    const NavbarLink = ({ to, children }) => {
            return (
                <Link to={to}>
                    <span>{children}</span>
                    <span>
                        <NavDropDown />
                    </span>
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
                        <span>
                            <Logo />
                        </span>
                        <span>citizin</span>
                    </Link>
                </div>

                <nav>
                    {links.map((link, index) => {
                        const { to, text } = link;
                        return (
                            <NavbarLink key={index} to={to}>
                                {text}
                            </NavbarLink>
                        );
                    })}
                </nav>

                <div className="right">
                    <button>
                        <span>
                            <DashboardIcon />{" "}
                        </span>
                        <span>dashboard</span>
                    </button>

                    <hr />

                    {isConnected ? (
                        <div onClick={openAccountModal}>
                            <span>
                                <img src="/profile_pic.jpg" alt="" />
                            </span>

                            <div>
                                <span>Jehee.eth</span>
                                {isConnected && (
                                    <span>
                                        {truncateWalletAddress(address)}
                                    </span>
                                )}
                            </div>

                            <span>
                                <NavDropDown />
                            </span>
                        </div>
                    ) : (
                        <div className="cta" onClick={openConnectModal}>
                            <button>
                                <span>connect</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopNav;
