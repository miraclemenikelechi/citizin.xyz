import './explore.scss';
import { ArrowRight } from '../../assets/icons';

const

    cards = [
        {
            id: 0,
            img: "/multidao.png",
            company: "Multichain",
            title: `MultiBTC Adoption Prop...`,
            text: `A decentralized autonomous organization building multichain verse merging for all ecosystem and blockchains. We are the lea...`,
            status: {
                active: true,
                days: 6
            },
            vote: {
                count: 800,
                red: 5,
                green: 79,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-2.jpg",
                    "/profile-3.jpg",
                    "/profile-4.jpg",
                ]
            }
        },

        {
            id: 1,
            img: "/wireshape.png",
            company: "Wireshape DAO",
            title: `Treasury Proposa...`,
            text: `Modern product information standard to drive the creation of the new generation of decentralized ecommecers through open sou...`,
            status: {
                active: false,
                days: null
            },
            vote: {
                count: 950,
                red: 15,
                green: 85,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 2,
            img: "/nd.png",
            company: "Archimedes",
            title: `Chain Validators Prop...`,
            text: `Archimedes selects battle tested yield bearing stable coins and leverages them up to 10x, producing a top of market Apy, posit...`,
            status: {
                active: true,
                days: 2
            },
            vote: {
                count: 765,
                red: null,
                green: 80,
                blue: 3,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 3,
            img: "/peeq.png",
            company: "Peaq Network",
            title: `Physical Infrastruct...`,
            text: `Through peaq control your web3 machine command and control center, you can link your raspberry Pi’s with peaq testnet and use ...`,
            status: {
                active: true,
                days: 13
            },
            vote: {
                count: 45,
                red: null,
                green: "7",
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 4,
            img: "/moonbeam.jpg",
            company: "Mooonbeam",
            title: `Grants and Sponsors...`,
            text: `Moonbeam is more than an EVM implementation, it’s a highly specialized layer1 chain that mirrors ethereum’s web3 RPC, ac...`,
            status: {
                active: true,
                days: 9
            },
            vote: {
                count: 321,
                red: null,
                green: 25,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 5,
            img: "/bnb.png",
            company: "Bnb chain",
            title: `Allow Defi Boilerpl...`,
            text: `For boilerplates related to defi tools and dapp development, the templates should contain minimum required tools already confi...`,
            status: {
                active: false,
                days: null
            },
            vote: {
                count: 874,
                red: 30,
                green: 70,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 6,
            img: "/mg.png",
            company: "Metaguild",
            title: `Metaverse propos...`,
            text: `Metaverse guild that maximizes your gaming rewards, earn weekly by participating in competitions and game beta test...`,
            status: {
                active: true,
                days: 3
            },
            vote: {
                count: 540,
                red: 16,
                green: 48,
                blue: 4,
                images: [
                    "/profile-12.jpg",
                    "/profile-11.jpg",
                    "/profile-10.png",
                    "/profile-7.png",
                    "/profile-5.jpg",
                    "/profile-3.jpg",
                ]
            }
        },

        {
            id: 7,
            img: "/chainlink.png",
            company: "Chainlink",
            title: `Data Providers ...`,
            text: ` Chainlink is the industry-standard web3 services platform connecting the people, business, and data of today with the ...`,
            status: {
                active: true,
                days: 8
            },
            vote: {
                count: 882,
                red: null,
                green: 77,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

        {
            id: 9,
            img: "/multidao.png",
            company: "Bankless DAO",
            title: `Allocation Of Air...`,
            text: ` Bankless is a movement for pioneers seeking liberation from the tyranny of the traditional financial system, going ... `,
            status: {
                active: true,
                days: 3
            },
            vote: {
                count: 956,
                red: null,
                green: 91,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                    "/profile-1.jpg",
                ]
            }
        },

    ],

    Card = ({ img, company, title, text, status: { active, days }, vote: { count, red, green, blue, images } }) => {

        return (
            <article className='card'>

                <div className='top'>
                    <span>
                        <img src={img} />
                    </span>

                    <span>
                        {company}
                    </span>

                    <span>
                        {active ? "active" : "ended"}
                    </span>
                </div>

                <div className='center'>
                    <span>
                        {title}
                    </span>

                    <span>
                        {text}
                    </span>
                </div>

                <div className='bottom'>

                    <div>
                        <span style={{ width: `${green}%` }}></span>
                        {red && <span style={{ width: `${red}%` }}></span>}
                        {blue && <span style={{ width: `${blue}%` }}></span>}
                    </div>

                    <div>
                        <div className="left">
                            <span>
                                <b>{count}</b> votes
                            </span>

                            <div className="images">
                                {
                                    images.map((image, index) => {
                                        return (
                                            <img src={image} key={index} />
                                        );
                                    })
                                }
                            </div>
                        </div>

                        {active ?
                            <div className="right">
                                {days} days left
                            </div>
                            : null
                        }
                    </div>

                </div>
            </article>
        );
    },

    Explore = () => {
        return (
            <section className="explore">
                <div>

                    <div className="top">
                        <span>
                            <img src="/glossy.svg" />
                        </span>

                        <h2>Explore Proposals and contribute</h2>

                        <div>
                            <span>view all</span>
                            <span><ArrowRight /></span>
                        </div>
                    </div>

                    <div className="bottom">
                        {
                            cards.map((card) => {
                                return (
                                    <Card {...card} key={card.id} />
                                );
                            })
                        }
                    </div>

                </div>
            </section>
        );
    };

export default Explore;