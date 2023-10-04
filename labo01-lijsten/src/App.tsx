import './App.css'


const numbersArray = [1, 2, 3, 4, 5, 4, 3];

const studentsArray = [
  { id: 1, name: 'Jef', age: 20 },
  { id: 2, name: 'Jan', age: 21 },
  { id: 3, name: 'Joris', age: 22 },
  { id: 4, name: 'Andie', age: 23 },
  { id: 5, name: 'Senne', age: 24 },
];

function App() {
  const filteredStudents = studentsArray.filter(student => student.name.startsWith('J'));

  return (
    <div>
      <h1>Labo 1: Lijsten</h1>

      <h2>Getallenlijst</h2>
      <ul>
        {numbersArray.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h2>Studentenlijst</h2>
      <ol>
        {studentsArray.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>

      <h2>Studentenlijst met J</h2>
      <ol>
        {filteredStudents.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>

      <h2>Select</h2>
      <select>
        {studentsArray.map(student => (
          <option key={student.id}>{student.name}</option>
        ))}
      </select>

      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Leeftijd</th>
          </tr>
        </thead>
        <tbody>
          {studentsArray.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
