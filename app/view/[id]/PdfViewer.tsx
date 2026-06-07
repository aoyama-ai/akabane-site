"use client";

export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px" }}>
      <iframe
        src={pdfUrl}
        style={{
          flex: 1,
          width: "100%",
          minHeight: "calc(100vh - 100px)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          backgroundColor: "var(--bg-card)",
        }}
      />
    </div>
  );
}
