import { Link } from "react-router-dom";

function Entry() {
    return (
        <div className="App">
          <Link to="/">Back</Link>
          <br />
          How are you feeling today?
          <br />
          <ul className="feelings">
            <li id="happy">
              <img alt='Happy' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/grinning-face_1f600.png'} />
              <br />
              Happy
            </li>
            <li id="calm">
              <img alt='Calm' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/relieved-face_1f60c.png'} />
              <br />
              Calm
            </li>
            <li id="angry">
              <img alt='Angry' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pouting-face_1f621.png'} />
              <br />
              Angry
            </li>
            <li id="surprised">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/fearful-face_1f628.png'} />
              <br />
              Surprised
            </li>
            <li id="sadness">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pensive-face_1f614.png'} />
              <br />
              Sadness
            </li>
            <li id="disgust">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/nauseated-face_1f922.png'} />
              <br />
              Disgust
            </li>
            <li id="fear">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/fearful-face_1f628.png'} />
              <br />
              Fear
            </li>
            <li id="sleepy">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/sleepy-face_1f62a.png'} />
              <br />
              Sleepy
            </li>
            <li id="excited">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/star-struck_1f929.png'} />
              <br />
              Excited
            </li>
            <li id="drained">
              <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/woozy-face_1f974.png'} />
              <br />
              Drained
            </li>
          </ul>
          <br />
          <div className="journalEntry">Journal Entry</div>
          <textarea />
          <div className="spacing"/>
          <footer>
            HopperHacks 2022
            <br />
            Created by Amelia Rae Orodio, Juan Ospina, Jared Tjahjadi
          </footer>
        </div>
      )
}

export default Entry;