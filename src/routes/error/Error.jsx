import './error.scss';
import { E404 } from '../../assets/icons';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

const Error = () => {

    useEffect(() => {
        const one = new SplitType("#one");
        const two = new SplitType("#two");

        gsap.to(".char", {
            y: 0,
            stagger: .075,
            delay: 2.5,
            duration: .1
        });
    }, []);


    return (
        <section className="error">
            <div className="move-con">
                <E404 />
            </div>

            <div className="links">
                <Media query={`(min-width:768px)`}>
                    {
                        matches => {
                            return matches ?
                                <p>
                                    <span id='one'>you seem lost fren...</span><Link id='two'>go home</Link>
                                </p>
                                :
                                <article>
                                    <h2>oops! mobile support not found.</h2>
                                    <p>try devices above 768px screen width. eg iPad, nest hub, etc...</p>
                                </article>
                                ;
                        }
                    }
                </Media>
            </div>
        </section>
    );
};

export default Error;