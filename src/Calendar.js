import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Calendar() {
  const ROW_LENGTH = 32
  const COL_LENGTH = 13

  const grid = [];
  for (let row = 0; row < ROW_LENGTH; row++) {
    const currRow = [];
    for (let col = 0; col < COL_LENGTH; col++) {
      currRow.push(new Square(row, col));
    }
    grid.push(currRow);
  }
  
  return (
    <div className="Calendar">
      <div className="grid">
        {grid.map((row) => {
          return (
            <div className={"Row_" + row[0].row}>
              {row.map((square) => {
                return (
                  <Link to='/entry' id={square.row + " " + square.col} className="square" />
                );
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

document.addEventListener('DOMContentLoaded', function() {
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
      tag.className = "container2"
      var text = document.createTextNode(index);
      tag.appendChild(text)
      square.appendChild(tag);
      square.className = "labels"
    }
    index++;
  }

}, false);

class Square {
  constructor (row, col) {
    this.row = row
    this.col = col
  }
}

export default Calendar;