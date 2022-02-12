import './Styles.css';
import Entry from './Entry';

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
                    <div key = {squareId} onClick= {click_entry}></div>
                );}
                )}
              </div>
            )})}
        </div>
    </div>
  );
}

function click_entry()
{

}
export default Calendar;


