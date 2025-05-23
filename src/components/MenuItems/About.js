import './About.css';

function About () {
    return(
        <div className='About'>
            <div className='About-title'>
                <h1 className='About-title-text'>ABOUT ME</h1>
                <hr className='About-title-line'></hr>
            </div>
            <div className='About-text'>
                <p className='About-text-p1'>
                I'm a passionate and detail-oriented programmer with a knack for creative problem-solving. <br/>
                I strive to write code that is not only efficient and functional but also elegant and well-structured. <br/>
                I enjoy exploring new technologies and bringing ideas to life through programming, whether <br/>
                it's developing web applications, mobile apps, or various systems. Beyond coding, I am committed <br/>
                to continuous learning, open to new challenges, and enjoy tackling problems that help me <br/>
                improve my skills and broaden my perspectives.
                </p>
                <h1 className='About-text-h1'>What I Do</h1>
                <p className='About-text-p2'>
                I specialize in creating compelling code that brings ideas to life. Whether you need <br/>
                a user-friendly website, a seamless application, or a robust system, I'm here to help. <br/>
                My code is crafted with creativity and attention to detail, ensuring it aligns with your <br/>
                goals and requirements. From modern and efficient architectures to elegant and <br/>
                powerful structures, I tailor each project to fit your unique needs. Let's collaborate <br/>
                and turn your concepts into stunning software that delivers lasting impact!
                </p>
            </div>
        </div>
    );
}

export default About;