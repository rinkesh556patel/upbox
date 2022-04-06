import './LandingPage.css'
import underline1 from "../assets/underline1.png"
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work2Art from "../assets/work2-art.png"
import work3 from "../assets/work3.png"

const HowItWorks = () => {

  const Work1 = () => {
    return(
      <div className="work1">
        <img src={work1} alt="work image" className="work-img"/>
        <p className="work-1">1</p>
        <div className="work-info">
          <h2 className="work-title">Setup your profile & preferences</h2>
          <p className="work-desc">Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
        </div>
      </div>
    )
  }
  const Work2 = () => {
    return(
      <div className="work2">
        <img src={work2} alt="work image" className="work2-img"/>
        <img src={work2Art} alt="work image" className="work2-img-art"/>
        <p className="work-2">2</p>
        <div className="work2-info">
          <h2 className="work-title tab-title">Review your custom box</h2>
          <p className="work-desc">Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
        </div>
      </div>
    )
  }
  const Work3 = () => {
    return(
      <div className="work3">
        <img src={work3} alt="work image" className="work-img"/>
        <p className="work-3">3</p>
        <div className="work-info">
          <h2 className="work-title tab-title">Try it on at home</h2>
          <p className="work-desc">Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="how-it-works">
        <div className="title-bar">
            <h1 className="title-text">How it works?</h1>
            <img src={underline1} alt="title underline" className="underlines" />
        </div>
        <Work1 />
        <Work2 />
        <Work3 />
        <button className="outline-button1">{"TRY IT FOR YOURSELF >"}</button>
    </div>
  );
};

export default HowItWorks;
