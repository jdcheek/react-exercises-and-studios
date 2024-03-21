import { useState } from 'react';

export default function BoardAssignment() {
  const [boardName, setBoardName] = useState('no boards yet!')

  const boards = [
    { label: 'Board 1', value: 'board 1' },
    { label: 'Board 2', value: 'board 2' },
    { label: 'Board 3', value: 'board 3' }
  ];

  const handleChange = (event) => {
    setBoardName(event.target.value)
  }

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board, idx) => (
          <option key={idx} value={board.value}>{board.label}</option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
