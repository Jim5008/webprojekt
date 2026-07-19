function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
        MeineSeite
      </div>
      <ul style={{
        display: "flex",
        gap: "30px",
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Start</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Über mich</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;