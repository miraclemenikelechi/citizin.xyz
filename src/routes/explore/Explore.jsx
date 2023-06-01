import './explore.scss';
import { ArrowRight } from '../../assets/icons';
import { cards } from '../../assets/data';

const

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