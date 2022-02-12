import './Styles.css';

var entry = false
function Calendar() {
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

  return (
    <div className="Calendar">
       <div className="grid">
          {grid.map((row) => {
            return (
              <div key={row.row}>
                {row.map((square) => {
                  return (
                    <div key = {square.col} className = "square" onClick= {Entry}></div>
                );}
                )}
              </div>
            )})}
        </div>
    </div>
  );
}


function Entry() {
  entry = true
  return (
    <div className="App">
      whee
      How are you feeling today?
      <br />
      <br />
      <textarea />
    </div>
  );
}

class Square
{
  constructor (row, col)
  {
    this.row = row
    this.col = col
  }
}

export default Calendar;


