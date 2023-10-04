

const colors = Array.from({ length: 100 }, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
