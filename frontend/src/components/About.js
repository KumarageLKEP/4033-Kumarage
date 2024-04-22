import a from "../images/a.png"
import "../App.css"
const About = () => {
    
    return (
        <div className="AB" >
                <img
                    src={a}
                    style={{
                      marginLeft:'0px',
                      width: '680px',
                      marginBottom:'80px',
                      borderRadius: '20px',
                      boxShadow: '2px 2px 5px 2px',
                    }}
                  />
        </div>
    );
};

export default About;
