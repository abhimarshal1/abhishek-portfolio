import React from 'react'

const Intro = () => {
    return (
        <div>
            <div className='intro-image'>
                <div className='my-intro'>
                    <h3>I'm Abhishek</h3>
                    <h5>Front-End Developer | CLI Developer</h5>
                </div>
            </div>
            <div className='intro-2'>
                <div className="row">
                    <div className="col-6 intro-section">
                        <div className="picture-container">
                            <img src="https://drive.google.com/uc?id=1XNFytauagrPxRQ4nkye7GF5bVUukBltt" alt="Abhishek" id="intro-picture" />
                        </div>
                    </div>
                    <div className="col-6 intro-section">
                        <div className="intro-summary">
                            <h5>Hello there!</h5>
                            <p className="intro-name">Myself <strong>Abhishek Kumar Upadhyay</strong></p>
                            <p>
                                Born and brought up in the beautiful city of <em>Ranchi</em>,
                                I did my schooling from the city itself then went on to the pink city
                                Jaipur to do pursue something which has given me my true identity today.
                                Yes! you guessed it right- ENGINEERING. I have done my bachelors in
                                <em>Computer Science and Engineering</em> from <em>Amity University Rajasthan</em>.
                                Have been a scholar for all the 4 years. I am a genuine cricket lover, be it have to
                                played or watched, I am up for it anytime. Being a gadget and tech enthusiast, I follow
                                a lot blogs related to them and prefer staying updated about whats happening around the world

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
