import React from "react";

// Se qualcosa si rompe mostra l'errore a schermo invece di una pagina bianca.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ minHeight: "100vh", background: "#0F0A1A", color: "#fff", padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h1 style={{ fontSize: 20, marginBottom: 12 }}>Si è verificato un errore</h1>
        <p style={{ opacity: 0.8, marginBottom: 12 }}>Fai uno screenshot di questa pagina e mandalo a chi gestisce il sito.</p>
        <pre style={{ whiteSpace: "pre-wrap", background: "#1A0B2E", padding: 12, borderRadius: 8, fontSize: 12 }}>
          {String(this.state.error?.stack || this.state.error)}
        </pre>
      </div>
    );
  }
}
