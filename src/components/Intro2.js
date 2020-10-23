import React from 'react'
import { GoSmiley } from "react-icons/go";

const Intro2 = () => {
    return (
        <section className='intro-2' id="about">
            <div className="sep-txt text-center pt-4 text-white">
                <span>About</span>
            </div>
            <div className="row intro2-row">
                <div className="col-lg-6 col-md-6 col-sm-12 intro-section">
                    <div className="picture-container">
                        <img src="https://drive.google.com/uc?id=1XNFytauagrPxRQ4nkye7GF5bVUukBltt" alt="Abhishek" id="intro-picture" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 intro-section">
                    <div className="intro-summary">
                        <div>
                            <h5><GoSmiley /> Hello there!</h5>
                            <p className="intro-name">Thank you for visiting my space.</p>
                            <p>
                                Born and brought up in the beautiful city <em>Ranchi</em>,
                                I did my schooling from the city itself then went on to <em>THE PINK CITY,
                                Jaipur</em> to pursue something which has given me my true identity today.
                                Yes! you guessed it right- ENGINEERING. I have done my bachelors in
                                <em> Computer Science and Engineering</em> from <em>Amity University Rajasthan</em>.
                                Have been a scholar for all the 4 years. I am a genuine cricket lover, be it have to
                                played or watched, I am up for it anytime. Being a gadget and tech enthusiast, I follow
                                a lot blogs related to them and prefer staying updated about whats happening around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro2
