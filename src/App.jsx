function App() {
  return (
    <div
      className="bg-black text-white min-h-screen p-10"
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px"
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <img
          src="https://i.pravatar.cc/200"
          alt="Profil"
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            border: "4px solid white"
          }}
        />

        <h1 style={{ fontSize: "55px", marginTop: "20px" }}>
          Fetrat
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "20px" }}>
          IT Student • Developer • Creator
        </p>
      </div>

      {/* ÜBER MICH */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Über mich</h2>

        <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
          Hallo! Ich bin Fetrat und studiere IT.
          Ich interessiere mich für Technologie,
          Webseiten, Social Media und digitale Projekte.
        </p>
      </section>

      {/* AUSBILDUNG */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Ausbildung</h2>

        <p style={{ color: "#cbd5e1" }}>
          • Abitur abgeschlossen <br />
          • Studium: Informationstechnologie
        </p>
      </section>

      {/* ARBEITSERFAHRUNG */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Arbeitserfahrung</h2>

        <p style={{ color: "#cbd5e1" }}>
          • Hier kommen deine Erfahrungen rein
        </p>
      </section>

      {/* PROJEKTE */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Projekte</h2>

        <p style={{ color: "#cbd5e1" }}>
          • Portfolio Webseite <br />
          • Social Media Projekte
        </p>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Social Media</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            Instagram
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            YouTube
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* KONTAKT */}
      <section>
        <h2>Kontakt</h2>

        <form
          action="https://formspree.io/f/mvzlngop"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "500px"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Vorname & Nachname"
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Nachricht"
            rows="5"
            style={inputStyle}
          ></textarea>

          <button type="submit" style={submitStyle}>
            Nachricht senden
          </button>
        </form>
      </section>
    </div>
  )
}

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold"
}

const inputStyle = {
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px"
}

const submitStyle = {
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  background: "#22c55e",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer"
}

export default App