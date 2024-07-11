import './Links.css'
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import Img4 from './img4.jpg'

function Links(){
    return(
      <div className="links">
        <div className="box_area">
            <div className="box">
                <img src={Img1} />
                <div className="text">
                    <h1>Budget form</h1>
                    <p>Please fill out the budget form.</p>
                    <a href="#" className="btn">Fill Budget Form</a>
                </div>
            </div>
            <div className="box">
                <img src={Img2} />
                <div className="text">
                    <h1>Portfolio</h1>
                    <p>Take a look at my portfolio.</p>
                    <a href="#" className="btn">Explore Portfolio</a>
                </div>
            </div>
            <div className="box">
                <img src={Img3} />
                <div className="text">
                    <h1>Projects</h1>
                    <p>Check out my recent projects.</p>
                    <a href="#" className="btn">View Projects</a>
                </div>
            </div>
            <div className="box">
                <img src={Img4} />
                <div className="text">
                    <h1>Contact Me</h1>
                    <p>Feel free to contact me.</p>
                    <a href="https://samukinha-contactme.netlify.app/" className="btn">Contact Me</a>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default Links