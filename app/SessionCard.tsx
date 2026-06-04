"use client";

type Session = {
  id: number;
  date: string;
  title: string;
  file: string;
};

export default function SessionCard({ session }: { session: Session }) {
  const pdfUrl = `/pdfs/${encodeURIComponent(session.file)}`;

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "20px 24px",
        cursor: "pointer",
        transition: "border-color 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-gold)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
      }}
    >
      <div style={{
        minWidth: "56px",
        height: "56px",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--accent-gold)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{ fontSize: "10px", color: "var(--accent-gold)", letterSpacing: "0.05em" }}>第</span>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "var(--accent-gold)", lineHeight: 1 }}>{session.id}</span>
        <span style={{ fontSize: "10px", color: "var(--accent-gold)", letterSpacing: "0.05em" }}>回</span>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "16px", fontWeight: "600", color: "var(--text-primary)", margin: "0 0 6px 0" }}>
          {session.title}
        </p>
        <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
          {session.date.replace(/-/g, ".")}
        </p>
      </div>

      <div style={{
        padding: "4px 10px",
        backgroundColor: "rgba(201,168,76,0.1)",
        border: "1px solid rgba(201,168,76,0.3)",
        borderRadius: "4px",
        fontSize: "11px",
        color: "var(--accent-gold)",
        fontWeight: "600",
        letterSpacing: "0.05em",
        flexShrink: 0,
      }}>
        PDF
      </div>
    </a>
  );
}
