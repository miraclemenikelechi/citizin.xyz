import "./landing.scss";
import { LogoDark, LandingArrow } from "../../assets/icons";
import { Link } from "react-router-dom";

const Landing = () => {

    const links = [
        {
            text: "Explore",
            href: "/explore",
        },
        {
            text: "Products",
            href: "/products",
        },
        {
            text: "About",
            href: "/about",
        },
        {
            text: "Features",
            href: "/features",
        },
        {
            text: "Proposals",
            href: "/proposals",
        },
        {
            text: "Communities",
            href: "/communities",
        },
        {
            text: "Contact",
            href: "/contact",
        },
    ];

    return (
        <section className="landing">
            <div className="navigation">

                <div className="logo">
                    <span><LogoDark /></span>
                    <span>citizin</span>
                </div>

                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="cta">
                    <button>
                        <span>connect</span>
                    </button>
                </div>

            </div>

            <div className="header">

                <div>
                    <div className="rectangles">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                    </div>

                    <div className="content">
                        <h1>
                            on chain decision making made easy, vote
                            on proposals and DAO  governance
                        </h1>

                        <div>
                            <span>
                                <span><LandingArrow /></span>
                            </span>

                            <p>
                                Promoting community engagement in DAO governance and
                                decision making on-chain, transparent voting and delegations.
                                citizin is a decentralized and multichain access platform .
                            </p>
                        </div>
                    </div>

                    <div className="small-icons">
                        <figure><img src="/glassy.png" /></figure>
                        <figure><img src="/glassy.png" /></figure>
                        <figure><img src="/glassy.png" /></figure>
                    </div>
                </div>

            </div>

            <div className="footer">

                <figure><img src="/left-glassy.png" /></figure>

                <div>
                    <button>
                        <Link to={"/explore"}>
                            enter dapp
                        </Link>
                    </button>

                    <p>
                        explore, monitor and vote on
                        proposals, participate actively
                        in DAO governance
                    </p>

                    <div>
                        <div className="left">
                            <span>
                                <img src="/mg.png" />
                            </span>
                            <span>
                                <img src="/multidao.png" />
                            </span>
                            <span>
                                <img src="/bnb.png" />
                            </span>
                            <span>
                                <img src="/moonbeam.jpg" />
                            </span>
                            <span>
                                <img src="/nd.png" />
                            </span>
                            <span>
                                <img src="/black.png" />
                            </span>
                        </div>
                        <div className="right">
                            <span>540+</span>
                            <span>Active communities</span>
                        </div>
                    </div>

                    <p>
                        Over 540k communities use citizin to manage their DAO
                        decision making, we have onboarded over 564k active users
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Landing;