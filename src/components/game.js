import React, { useEffect, useState } from "react";
import Cell from "./cell";
import Score from "./score";

export default function Game() {
  const [grid, setGrid] = useState([]);
  const [targetCells, setTargetCells] = useState([]);
  const [score, setScore] = useState(0);

  const style = {
    margin: "auto",
    width: "22%",
  };
  useEffect(() => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const targetCells = [1, 8, 9];
    setGrid(grid);
    setTargetCells(targetCells);
  }, []);

  const updateCell = (i, e) => {
    if (targetCells.includes(i)) {
      let randomNumber = getRandomArbitrary(1, 16);
      do {
        randomNumber = getRandomArbitrary(1, 16);
      } while (targetCells.includes(randomNumber));
      let index = targetCells.indexOf(i);
      targetCells[index] = randomNumber;
      setTargetCells([...targetCells]);
      setScore(score + 1);
    } else {
      setScore(0);
    }
  };

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div style={style}>
      <Score score={score}></Score>
      <table>
        <tbody>
          {grid.map((tableRow) => (
            <tr key={tableRow}>
              {tableRow.map((i) => (
                <td key={i} onClick={(e) => updateCell(i, e)}>
                  <Cell isTarget={targetCells.includes(i)}></Cell>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}