import './Home.css';

function Home () {
    return(
        <div className='Home'>
            <div className='Home-intro'>
                <p className='p1'>Hi, I'm</p>
                <h1>Nopphadon Rakkanying</h1>
                <div className='div-p2'>
                    <p className='p2'>Seeking a challenging programmer position in a high quality IT environment that offers </p>
                    <p className='p2'>opportunities for skill development and growth, where my academic skill can contribute</p>
                    <p className='p2'>value to the organization.</p>
                </div>
                <div className='Home-intro-button'>
                    <button className='B-left'>Hire Me</button>
                    <button className='B-right'>Contact Me</button>
                </div>
            </div>
            <img src='me.png' width="550px" height="600px" className='myImg' alt='my-photo'/>
        </div>
    )
}

export default Home;