import './Styles.css';

function Calander() {
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
    <div className="Calander">
       
    </div>
  );
}

export default Calander;
