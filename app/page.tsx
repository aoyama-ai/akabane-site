import { sessions } from "./sessions";
import SessionList from "./SessionList";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 32px", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "4px", height: "40px", backgroundColor: "var(--accent-gold)", borderRadius: "2px" }} />
          <div>
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "var(--text-primary)", margin: 0, letterSpacing: "0.02em" }}>
              赤羽さん勉強会資料
            </h1>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>
              赤羽雄二 オンラインサロン アーカイブ
            </p>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "12px 32px", display: "flex", gap: "32px" }}>
          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--accent-gold)", fontWeight: "700", marginRight: "6px" }}>{sessions.length}</span>
            セッション
          </span>
          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            最新: <span style={{ color: "var(--text-primary)" }}>第{sessions[0].id}回</span>
          </span>
        </div>
      </div>

      {/* Main content */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 32px" }}>
        <SessionList sessions={sessions} />
      </main>
    </div>
  );
}
