
import './App.css';
import twi from './Images/twitter-1464537-1239448.png'
import face from './Images/facebook.png'
import git from './Images/github-logo.png'
import image from './Images/20210626_123504.jpg'

function Info() {
    return (
        <div className='info'>
            <div className="left">
                <img src={image} alt="" srcset="" id='image' />
            </div>
            <div className="right">
                <div className="right--content">
                    <h1>Ron Gitonga</h1>
                    <h2>Frontend Developer</h2>
                    <div className="buttons">
                        <a href="mailto:rongitonga@gamil.com">
                            <button id='bl'>Email</button>
                        </a>
                        <a href="https://www.linkedin.com/in/ron-gitonga" target="_blank" rel='noreferrer'>
                            <button id='br'>LinkedIn</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

function About() {
    return (
        <div className='about'>
            <h1 className="about--head">
                About
            </h1>
            <p className="about--p">
                Hey there, I am Ron when I am not designinng websites or coding, I like to enjoy different art work, from photogragpy to songs, poems, paintings.
            </p>
        </div>
    )
}

function Interests() {
    return (
        <div className='int'>
            <h1 className="int--h1">
                Interests
            </h1>
            <p className="int--p">
                When it comes to my intersts I like how websites try to relay the different types of art. Fro pure aesthetic designs to animations. I like to say am a tennis fun though apart from the top 5 men and women ranks I dont know any one else. I have so many interest but these is to just state the few.
            </p>
        </div>
    )
}

function Footer() {
    return (
        <footer >
            <div className="foot">
                <a href="https://www.linkedin.com/in/ron-gitonga" target="_blank" rel='noreferrer'>
                    <button id='twitter--button'>
                        <img src={twi} alt="twitter" id='twitter' />
                    </button>
                </a>
                <a href="https://facebook.com/ron.timothy.18" target="_blank" rel='noreferrer'>
                    <button id='facebook--button'>
                        <img src={face} alt="facebook" id='facebook' />
                    </button>
                </a>
                <a href="https://github.com/Rontim" target="_blank" rel='noreferrer'>
                    <button id='github--button'>
                        <img src={git} alt="github" id='github' />
                    </button>
                </a>
            </div>
        </footer>
    )
}
function App() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;
