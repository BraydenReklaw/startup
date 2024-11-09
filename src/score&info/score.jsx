import React from 'react';
import './score.css';

// much of my table is modeled on simon's excluding the final row.

export function Score() {

    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className="container my-5 text-center flex-grow-1">
        <div className="scoreboard table-dark table-bordered text-success">
                <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>TempUser</td>
                        <td>8</td>
                        <td>May 20, 2021</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>User</td>
                        <td>6</td>
                        <td>June 2, 2021</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Gunter Spears</td>
                        <td>3</td>
                        <td>July 3, 2020</td>
                      </tr>
                      <tr id="user_pb">
                        <td>Best</td>
                        <td>User</td>
                        <td>6</td>
                      </tr>
                    </tbody>
                  </table>
        </div>

            <br />

            <div>
                <p>The Binary Counting system is set up in the base2 system. The base10 system is the most well known, going from 0-9 before repeating the pattern. Binary, however, only uses 0's and 1's. 
                    <br />
                    When counting in base 10, you start with a single decimal place. Upon reaching 9, a new decimal place must be created, the tens place, representing 10<sup>1</sup>. When both places are filled again, another place is created, representing 10<sup>2</sup>. 
                    <br />
                    When counting in base 2, the same decimal place pattern is used. However, since we only have 0-1 to work with, the decimal places increase in powers of 2. As such, we have the 1s place (2<sup>0</sup>), the 2s place (2<sup>1</sup>), the 4s place (2<sup>2</sup>), and so on,counting up in the powers of 2.
                    This image below shows how you would express the number 55 in both base10 and in base2
                </p>
                <img src="base10.png" className="responsive-img" /> <br /><img src="base2.png" className="responsive-img" />
                <p>
                    In base10, 55 is expressed simply as five 1's, and five 10's, and 0 of the other places. in Base2, however, 55 is expressed as one 1, one 2, one 4, zero 8's, one 16, and one 32.
                    <br /> <br />
                    For the purposes of the game, we won't use more than the 128's place. An easy way to determine a binary conversion is to count down the places. For example, using 55 again, I won't use 64 or anything bigger, so I know that I have a 32. 55 - 32 is 23. 16 is the next place, so I will use a 16. 23 - 16 is 7. 
                    Because 7 is less than 8, I won't use the 8's place, so I drop down to the 4. 7 - 4 is 3. I will use the 2's next, leaving me with a 1, which I will use the 1's place for. <br /> This leaves us with 55 = 110111
                </p>
            </div>
    </main>
  );
}