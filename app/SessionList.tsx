"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Session } from "./sessions";

export default function SessionList({ sessions }: { sessions: Session[] }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = sessions.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div style={{ marginBottom: "24px", position: "relative" }}>
        <span style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-secondary)",
          fontSize: "16px",
        }}>🔍</span>
        <input
          type="text"
          placeholder="タイトルで検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "14px 16px 14px 44px",
            color: "var(--text-primary)",
            fontSize: "15px",
            outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontSize: "18px",
              lineHeight: 1,
            }}
          >×</button>
        )}
      </div>

      {/* Result count */}
      {query && (
        <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
          <span style={{ color: "var(--accent-gold)", fontWeight: "700" }}>{filtered.length}</span> 件見つかりました
        </p>
      )}

      {/* Session list */}
      <div style={{ display: "grid", gap: "12px" }}>
        {filtered.length > 0 ? filtered.map((session) => (
          <div
            key={session.id}
            onClick={() => router.push(`/view/${session.id}`)}
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
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
              <span style={{ fontSize: "10px", color: "var(--accent-gold)" }}>第</span>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "var(--accent-gold)", lineHeight: 1 }}>{session.id}</span>
              <span style={{ fontSize: "10px", color: "var(--accent-gold)" }}>回</span>
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
              flexShrink: 0,
            }}>
              PDF
            </div>
          </div>
        )) : (
          <p style={{ color: "var(--text-secondary)", textAlign: "center", padding: "40px 0" }}>
            「{query}」に一致する資料が見つかりませんでした
          </p>
        )}
      </div>
    </div>
  );
}
