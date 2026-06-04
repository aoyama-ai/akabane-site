const sessions = [
  {
    id: 136,
    date: "2026-05-19",
    title: "仕事のスピードアップ： メンタル編",
    file: "26-05-19 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第136回 『仕事のスピードアップ： メンタル編』.pdf",
  },
  {
    id: 132,
    date: "2026-03-17",
    title: "頭の良さは関係ない 仕事が速くて驚かれる8つの鍵",
    file: "26-03-17 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第132回『頭の良さは関係ない 仕事が速くて驚かれる8つの鍵』.pdf",
  },
  {
    id: 131,
    date: "2026-03-03",
    title: "仕事ができる人になる7つの習慣",
    file: "26-03-03 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第131回 『仕事ができる人になる7つの習慣』編.pdf",
  },
  {
    id: 130,
    date: "2026-02-17",
    title: "できない部下に仕事をしてもらう6つの鍵",
    file: "26-02-17 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第130回 『できない部下に仕事をしてもらう6つの鍵』編.pdf",
  },
  {
    id: 129,
    date: "2026-02-03",
    title: "リーダーシップを一気に強化する7施策",
    file: "26-02-03 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第129回 『リーダーシップを一気に強化する7施策』編.pdf",
  },
  {
    id: 108,
    date: "2025-03-18",
    title: "成果を出すために効果的な7つの習慣",
    file: "25-03-18 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第108回 『成果を出すために効果的な7つの習慣』編.pdf",
  },
  {
    id: 107,
    date: "2025-03-04",
    title: "部下のミスが減る指示のだしかた 7選",
    file: "25-03-04 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第107回 『部下のミスが減る指示のだしかた 7選』編.pdf",
  },
  {
    id: 104,
    date: "2025-01-21",
    title: "上司の特徴を見抜いて仕事のスピードを上げる7つの鉄則",
    file: "25-01-21 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第104回 『上司の特徴を見抜いて仕事のスピードを上げる7つの鉄則』編 (1).pdf",
  },
  {
    id: 103,
    date: "2025-01-07",
    title: "5年後の目標を考えるステップ",
    file: "25-01-07 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第103回 『5年後の目標を考えるステップ』編 ワークシート.pdf",
  },
  {
    id: 34,
    date: "2022-02-15",
    title: "愛着障害・発達障害編",
    file: "22-02-15 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第34回 愛着障害・発達障害編.pdf",
  },
  {
    id: 32,
    date: "2022-01-18",
    title: "アクティブリスニング編",
    file: "22-01-18 『ゼロ秒思考』赤羽雄二のオンラインサロン オンラインセッション 第32回 アクティブリスニング編.pdf",
  },
];

import SessionCard from "./SessionCard";

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
        <div style={{ display: "grid", gap: "12px" }}>
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </main>
    </div>
  );
}
