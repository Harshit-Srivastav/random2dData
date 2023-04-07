# random2dData
The frontend of the project is built using React.js and backend using Node.js.

For Frontend- Go to frontend folder and run npm start in terminal.

For Backend- Go to backend folder and run npm start in terminal.


As a part of requirement, Frontend show a tag control looks like matrix of 3x3
countries randomly (on every refresh the result would be different) where they are doing
business out of 4 [“India”, “Nepal”, “Germany”, “Finland”].

The matrix result would be
Outcome:
India India India
Nepal Nepal India
India Finland Germany
Ranks: India : 3 | Nepal : 2

From backend API: It respond with 2-d array filled with random countries out of
4 mentioned.
For Rank is the count of occurrence of consecutive countries in a row starting from left most
