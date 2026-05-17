import { useState } from "react"

function App() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div style={pageStyle}>
      {/* HEADER */}
      <header style={headerStyle}>
        <h1 style={nameStyle}>Fetratullah Rasuly</h1>

        <div style={tagStyle}>
          <span>Informatik-Student</span>
          <span>KI-Webentwickler</span>
          <span>Check-in-Agent</span>
        </div>
      </header>

      {/* BILD */}
      <div style={imageBoxStyle}>
        <img
          src="/profile.jpg"
          alt="Profilbild"
          style={profileImageStyle}
        />
      </div>

      {/* SECTIONS */}
      <main style={mainStyle}>
        <Accordion
          title="Über mich"
          isOpen={openSection === "about"}
          onClick={() => toggleSection("about")}
        >
          <p>
            Hallo! Ich bin Fetratullah und studiere Informationstechnologie.
            Ich interessiere mich für Webentwicklung durch KI, IT-Support und moderne Technologien.
          </p>
        </Accordion>

        <Accordion
          title="Ausbildung"
          isOpen={openSection === "education"}
          onClick={() => toggleSection("education")}
        >
          <p>• Fachhochschulreife abgeschlossen</p>
          <p>• Studium: Informationstechnologie</p>
        </Accordion>

        <Accordion
          title="Arbeitserfahrung"
          isOpen={openSection === "work"}
          onClick={() => toggleSection("work")}
        >
          <p>• Aktuell: Check-in-Agent Mitarbeiter am Frankfurter Flughafen.</p>
          <p>• Aktuell: Ehrenamtliche Tätigkeit als Sozialpädagogische Hilfskraft beim ASB-Bildung </p>
        </Accordion>

        <Accordion
          title="Projekte"
          isOpen={openSection === "projects"}
          onClick={() => toggleSection("projects")}
        >
          <p>• Portfolio Webseite</p>
          <p>• • Eigenständiges Lernen und Verstehen von IT-Projekten wie Passwort-Managern</p>
          <p>• Webseiten für kleine Unternehmen durch KI</p>
        </Accordion>

        <Accordion
          title="Social Media"
          isOpen={openSection === "social"}
          onClick={() => toggleSection("social")}
        >
          <div style={socialBoxStyle}>
            <a href="https://www.instagram.com/fetrat_h_r/" target="_blank" rel="noreferrer" style={buttonStyle}>
              Instagram
            </a>

            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={buttonStyle}>
              YouTube
            </a>

            <a href="https://linkedin.com/in/fetratullah-rasuly-3ba9b0357" target="_blank" rel="noreferrer" style={buttonStyle}>
              LinkedIn
            </a>
          </div>
        </Accordion>

        <Accordion
          title="Kontakt 📱"
          isOpen={openSection === "contact"}
          onClick={() => toggleSection("contact")}
        >
          <form
            action="https://formspree.io/f/mvzlngop"
            method="POST"
            style={formStyle}
          >
            <input
              type="text"
              name="name"
              placeholder="Vorname & Nachname"
              style={inputStyle}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              style={inputStyle}
              required
            />

            <textarea
              name="message"
              placeholder="Nachricht"
              rows="5"
              style={inputStyle}
              required
            ></textarea>

            <button type="submit" style={submitStyle}>
              Nachricht senden
            </button>
          </form>
        </Accordion>
      </main>
    </div>
  )
}

function Accordion({ title, isOpen, onClick, children }) {
  return (
    <section style={sectionStyle}>
      <button onClick={onClick} style={accordionButtonStyle}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div style={contentStyle}>
          {children}
        </div>
      )}
    </section>
  )
}

const pageStyle = {
  background: "white",
  color: "#111827",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  padding: "40px 20px"
}

const headerStyle = {
  textAlign: "center",
  marginBottom: "40px"
}

const nameStyle = {
  fontSize: "52px",
  marginBottom: "20px",
  fontWeight: "bold"
}

const tagStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  color: "#4b5563",
  fontSize: "18px"
}

const imageBoxStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "40px"
}

const profileImageStyle = {
  width: "280px",
  height: "320px",
  objectFit: "cover",
  borderRadius: "12px",
  border: "3px solid #111827"
}

const mainStyle = {
  maxWidth: "800px",
  margin: "0 auto"
}

const sectionStyle = {
  marginBottom: "18px",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
}

const accordionButtonStyle = {
  width: "100%",
  background: "#f9fafb",
  color: "#111827",
  border: "none",
  padding: "20px",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const contentStyle = {
  padding: "20px",
  color: "#374151",
  lineHeight: "1.8",
  fontSize: "17px",
  background: "white"
}

const socialBoxStyle = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
}

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "500px"
}

const inputStyle = {
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "16px"
}

const submitStyle = {
  padding: "15px",
  borderRadius: "8px",
  border: "none",
  background: "#16a34a",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer"
}

export default App