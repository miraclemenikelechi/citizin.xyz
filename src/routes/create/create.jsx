import { CreateProposal, ToggleOff, ToggleOn } from '../../assets/icons';
import './create.scss';
import { useState } from 'react';

const Create = () => {

    const
        [activated, setActivated] = useState(false),

        [request, setRequest] = useState({
            questions: {
                q1: "The game is ready to be launched in mainnet'",
                q2: "The game needs another iteration in beta'",
                q3: "The game should be launched but in private beta'",
            },

            eligibility: {
                e1: "To be qualified to vote on this proposal, DAO member must have our native token",
                e2: "Must have played our game over time and is familiar with crypto",
                e3: "It is advised but not mandatory to have prior gaming experience",
            },

            address: "Contract address",

            date: {
                start: {
                    d: "",
                    m: "",
                    y: "",
                },
                end: {
                    d: "",
                    m: "",
                    y: "",
                }
            }
        }),

        handleChange = (event) => {
            const { name, value, checked, type, } = event.target;

            setCast(function (previous) {
                return ({
                    ...previous,
                    [name]: type === "checkbox" ? checked : value
                });
            });
        };

    return (
        <section className="create">
            <div>
                <div className="top">
                    <span><CreateProposal /></span>

                    <h2>
                        Create proposal
                    </h2>

                    <div>
                        <span>activate</span>

                        <span onClick={() => setActivated(!activated)}>
                            {activated ? <ToggleOn /> : <ToggleOff />}
                        </span>
                    </div>
                </div>

                <div className="bottom">
                    <article>

                        <div>
                            <span>image</span>

                            <h5>
                                playtest feedback
                            </h5>
                        </div>

                        <input type="text" placeholder={request.questions.q1} />
                        <input type="text" placeholder={request.questions.q2} />
                        <input type="text" placeholder={request.questions.q3} />

                    </article>

                    <article>
                        <h5>
                            eligibility
                        </h5>

                        <div>
                            <input type="text" placeholder={request.eligibility.e1} />
                            <input type="text" placeholder={request.eligibility.e2} />
                            <input type="text" placeholder={request.eligibility.e3} />
                        </div>
                    </article>

                    <article>
                        <h5>
                            Provide token Contract address below to authenticate each holder, if it’s a criteria  to vote
                        </h5>

                        <input type="text" placeholder={request.address} />
                    </article>

                    <article>
                        <div>left</div>
                        <div>right</div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Create;