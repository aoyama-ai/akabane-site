"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      const from = searchParams.get("from") || "/";
      router.push(from);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="パスワードを入力"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: `1px solid ${error ? "#e05555" : "var(--border)"}`,
            borderRadius: "8px",
            padding: "12px 48px 12px 16px",
            color: "var(--text-primary)",
            fontSize: "15px",
            outline: "none",
            width: "100%",
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            fontSize: "13px",
            padding: "2px 4px",
          }}
        >
          {showPassword ? "隠す" : "表示"}
        </button>
      </div>
      {error && (
        <p style={{ fontSize: "13px", color: "#e05555", margin: 0 }}>パスワードが違います</p>
      )}
      <button
        type="submit"
        style={{
          backgroundColor: "var(--accent-gold)",
          color: "#1a1a1a",
          border: "none",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          width: "100%",
        }}
      >
        入る
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "var(--bg-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "48px",
        width: "360px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "4px", height: "32px", backgroundColor: "var(--accent-gold)", borderRadius: "2px" }} />
          <h1 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-primary)", margin: 0 }}>
            赤羽さん勉強会資料
          </h1>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
