import './App.css'



function App() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const alphabetImages = alphabet.split('').map(letter => (
    <img
      key={letter}
      src={`https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`}
      alt={letter}
    />
  ));

  return (
    <div>
      <h1>Alien Alphabet</h1>
      {alphabetImages}
    </div>
  );
}

export default App;