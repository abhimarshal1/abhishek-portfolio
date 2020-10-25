import React from 'react'

const Intro2 = () => {
    return (
        <section className='intro-2' id="about">
            <div className="about-content">
                <div className="sep-txt text-center pt-4 text-white">
                    <span>About</span>
                </div>
                <div className="row intro2-row">
                    <div className="col-lg-6 col-md-12 col-sm-12 intro-section">
                        <div className="picture-container">
                            <img src="https://drive.google.com/uc?id=1XNFytauagrPxRQ4nkye7GF5bVUukBltt" alt="Abhishek" id="intro-picture" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 intro-section">
                        <div className="intro-summary" id="intro">
                            <div>
                                <h5><span className="greet"> Hello there !</span></h5>
                                <p className="intro-name">Thank you for visiting my space.</p>
                                <p className="intro-content">
                                    Born and brought up in the beautiful city <strong>Ranchi</strong>,
                                I did my schooling from the city itself then went on to <strong>THE PINK CITY,
                                Jaipur</strong> to pursue something which has given me my true identity today.
                                Yes! you guessed it right- <strong>ENGINEERING</strong>. I have done my bachelors in
                                <strong> Computer Science and Engineering</strong> from <strong>Amity University Rajasthan</strong>.
                                Have been a scholar for all the 4 years. I am a Tech enthusiast who is passionate about learning new technologies. 
                                Along with that I follow lots of related blogs and prefer staying up-to-date about what's
                                happening around the world. I am a die-hard cricket fan as well. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro2
