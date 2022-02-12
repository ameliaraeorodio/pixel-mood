import React from 'react';
import './styles.css';

function Calendar() {
  const [entry, setEntry] = React.useState(0);

  const ROW_LENGTH = 31
  const COL_LENGTH = 12

  const grid = [];
  for (let row = 0; row < ROW_LENGTH; row++) {
    const currRow = [];
    for (let col = 0; col < COL_LENGTH; col++) {
      currRow.push(new Square(row, col));
    }
    grid.push(currRow);
  }

  if(entry === 0) {
    return (
      <div className="Calendar">
        <div className="grid">
            {grid.map((row) => {
              return (
                <div key={row.row}>
                  {row.map((square) => {
                    return (
                      <div key={square.col} className="square" onClick={() => setEntry(entry + 1)} />
                    )
                  })}
                </div>
              )})}
          </div>
          <div className="spacing" />
          <footer>
            HopperHacks 2022
            <br />
            Created by Amelia Rae Orodio, Juan Ospina, Jared Tjahjadi
        </footer>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <button onClick={() => setEntry(entry - 1)}>Back</button>
        <br />
        How are you feeling today?
        <br />
        <ul className="feelings">
          <li id="happy" onClick={() => setEntry(entry - 1)}>
            <img alt='Happy' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/grinning-face_1f600.png'} />
            <br />
            Happy
          </li>
          <li id="calm" onClick={() => setEntry(entry - 1)}>
            <img alt='Calm' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/relieved-face_1f60c.png'} />
            <br />
            Calm
          </li>
          <li id="angry" onClick={() => setEntry(entry - 1)}>
            <img alt='Angry' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pouting-face_1f621.png'} />
            <br />
            Angry
          </li>
          <li id="surprised" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/fearful-face_1f628.png'} />
            <br />
            Surprised
          </li>
          <li id="sadness" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pensive-face_1f614.png'} />
            <br />
            Sadness
          </li>
          <li id="disgust" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/nauseated-face_1f922.png'} />
            <br />
            Disgust
          </li>
          <li id="fear" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/fearful-face_1f628.png'} />
            <br />
            Fear
          </li>
          <li id="sleepy" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/sleepy-face_1f62a.png'} />
            <br />
            Sleepy
          </li>
          <li id="excited" onClick={() => setEntry(entry - 1)}>
            <img alt='' src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/star-struck_1f929.png'} />
            <br />
            Excited
          </li>
          <li id="drained" onClick={() => setEntry(entry - 1)}>
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
}

class Square {
  constructor (row, col) {
    this.row = row
    this.col = col
  }
}

export default Calendar;