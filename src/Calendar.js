import React from 'react';
import './styles.css';

let grid = []
let curr_open = "none"
function Calendar() {
  const [entry, setEntry] = React.useState(0);

  const ROW_LENGTH = 32
  const COL_LENGTH = 13
  

  if(localStorage.getItem("data") != null){
    let arr = JSON.parse(localStorage.getItem("names"));
    for (let row = 0; row < ROW_LENGTH; row++) {
      const currRow = arr[row];
      const gridcurrRow = []
      for (let col = 0; col < COL_LENGTH; col++) {
        const currCol = currRow[col]
        gridcurrRow[col] = new Square(currCol);
      }
      grid[row] = currRow;
    }
  }
  else{
    for (let row = 0; row < ROW_LENGTH; row++) {
      const currRow = [];
      for (let col = 0; col < COL_LENGTH; col++) {
        currRow[col] = (new Square([row, col, "none", "no entry"]));
      }
      grid[row] = currRow;
    }

  }
  if(entry === 0) {
    return (
      <div className="Calendar">
        <div className="grid">
          {grid.map((row) => {
            return (
              <div className={"Row_" + row[0].row}>
                {row.map((square) => {
                  return (
                    <div id = {square.row + " " + square.col} className = "square" onClick= {() => setEntry(entry + 1)}></div>
                );}
                )}
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
        <button id = "exit" onClick={() => setEntry(entry - 1)}>Back</button>
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
        <button id = "submit" onClick={() => setEntry(entry - 1)}>Submit</button>
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

document.addEventListener('DOMContentLoaded', function(){
  load_labels()
  document.getElementById("exit").addEventListener("click", load_labels)
})

document.addEventListener("click", someListener)
function someListener(event){
  var element = event.target;
  if(element.id == "exit"){
      load_labels()
      if(curr_open != "none")
        curr_open = "none"
  }
  else if(element.className = "square")
  {
    let str = element.id
    let index = str.split(" ")
    curr_open = grid[index[0]][index[1]]
  }
  else if(element.id == "happy")
    curr_open.color = "#ff8ce0"
  else if(element.id == "calm")
    curr_open.color = "#8cdcff"
  else if(element.id == "angry")
    curr_open.color = "#ff2d2d"
  else if(element.id == "surprised")
    curr_open.color = "#ffc72D"  
  else if(element.id == "sadness")
    curr_open.color = "#2d4bff"
  else if(element.id == "disgust")
    curr_open.color = "#0f851a"
  else if(element.id == "fear")
    curr_open.color = "#7832C1"
  else if(element.id == "sleepy")
    curr_open.color = "#6f88ba"
  else if(element.id == "excited")
    curr_open.color = "#ff8731"
  else if(element.id == "drained")
    curr_open.color = "#8964a0"
  else if(element.id == "submit")
  {
    curr_open.entry = document.getElementById("submit").value
    load_labels()
    curr_open = "none"
    grid_save()
  }
  
}

function grid_save()
{
  let twoD_grid = []
  for (let row = 0; row < 32; row++) 
  {
    const currRow = [];
    for (let col = 0; col < 13; col++) 
    {
      currRow[col] = grid[row][col].getArr();
    }
    twoD_grid[row] = currRow;
  }

  localStorage.setItem("data", JSON.stringify(twoD_grid))
}

function load_labels(){
  let arr = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  let index = 1;
  arr.forEach(month => {
    let square = document.getElementById("0 " + index)
    var tag = document.createElement("div")
    tag.className = "container"
    var text = document.createTextNode(month);
    tag.appendChild(text)
    square.appendChild(tag);
    square.className = "labels"
    index++;
  })
  
  index = 0;
  while(index < 33)
  {
    let square = document.getElementById(index + " 0")
    if(index === 0)
        square.className = "labels"
    else{
      var tag = document.createElement("div")
      tag.className = "container"
      var text = document.createTextNode(index);
      tag.appendChild(text)
      square.appendChild(tag);
      square.className = "labels"
    }
    index++;
  }
    index = 0;
    while(index < 33)
    {
      let square = document.getElementById(index + " 0")
      if(index == 0)
          square.className = "labels"
      else{
        var tag = document.createElement("div")
        tag.className = "container2"
        var text = document.createTextNode(index);
        tag.appendChild(text)
        square.appendChild(tag);
        square.className = "labels"
      }
      index++;
    }
}
class Square
{
  constructor (arr)
  {
    this.row = arr[0]
    this.col = arr[1]
    this.color = arr[2]
    this.entry = arr[3]
  }
  
  getArr()
  {
    return [this.row, this.col, this.color, this.entry]
  }
}

export default Calendar;