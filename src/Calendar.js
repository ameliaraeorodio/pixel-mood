import './Styles.css';

entry = false
function Calendar() {
  const ROW_LENGTH = 31
  const COL_LENGTH = 12

  const grid = [];
  for (let row = 0; row < ROW_LENGTH; row++) {
    const currRow = [];
    for (let col = 0; col < COL_LENGTH; col++) {
      currRow.push(newNode);
    }
    grid.push(currRow);
  }

  return (
    <div className="Calendar">
       <div className="grid">
          {grid.map((row, rowId) => {
            return (
              <div key={rowId}>
                {row.map((square, squareId) => {
                  return (
                    <div key = {squareId} className = "square" onClick= {Entry}></div>
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

export default Calendar;


