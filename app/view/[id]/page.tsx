import { sessions } from "../../sessions";
import { notFound } from "next/navigation";
import Link from "next/link";
import PdfViewer from "./PdfViewer";

export default async function ViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = sessions.find((s) => s.id === Number(id));
  if (!session) notFound();

  const pdfUrl = `/pdfs/${encodeURIComponent(session.file)}`;

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: "14px",
            flexShrink: 0,
          }}>
            ← 一覧に戻る
          </Link>
          <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
            <div style={{
              minWidth: "40px",
              height: "40px",
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--accent-gold)",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontSize: "9px", color: "var(--accent-gold)" }}>第</span>
              <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--accent-gold)", lineHeight: 1 }}>{session.id}</span>
              <span style={{ fontSize: "9px", color: "var(--accent-gold)" }}>回</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: "15px", fontWeight: "600", color: "var(--text-primary)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {session.title}
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: "2px 0 0 0" }}>
                {session.date.replace(/-/g, ".")}
              </p>
            </div>
          </div>
          <a
            href={pdfUrl}
            download
            style={{
              marginLeft: "auto",
              padding: "8px 16px",
              backgroundColor: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "6px",
              color: "var(--accent-gold)",
              fontSize: "13px",
              fontWeight: "600",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            ↓ ダウンロード
          </a>
        </div>
      </header>

      {/* PDF Viewer */}
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}
