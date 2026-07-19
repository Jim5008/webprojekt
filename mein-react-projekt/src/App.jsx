import Navbar from './Navbar';

function App() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        fontSize: "48px",
        fontWeight: "bold",
        color: "#1a1a2e"
      }}>
        Willkommen!
      </div>
    </div>
  );
}

export default App;