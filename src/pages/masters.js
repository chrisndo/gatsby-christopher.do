import React from "react";

const styles = {
  page: {
    backgroundColor: "#f0eeea",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Georgia, 'Times New Roman', serif",
    padding: "60px 20px",
  },
  card: {
    maxWidth: "560px",
    width: "100%",
    textAlign: "center",
    color: "#7a6a52",
  },
  title: {
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    margin: "0 0 16px 0",
    lineHeight: "1.1",
  },
  forThe: {
    fontSize: "13px",
    letterSpacing: "0.1em",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "22px",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "36px",
  },
  sectionHeading: {
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "32px",
  },
  body: {
    fontSize: "15px",
    lineHeight: "1.75",
    marginBottom: "4px",
  },
  link: {
    color: "#c44a1a",
    textDecoration: "none",
    fontSize: "15px",
    display: "block",
    marginTop: "6px",
  },
};

const MastersPage = () => (
  <div style={styles.page}>
    <div style={styles.card}>
      <h1 style={styles.title}>CDo's Masters Pool</h1>

      <p style={styles.forThe}>-- for the --</p>
      <p style={styles.subtitle}>2026 Masters Tournament</p>

      <p style={styles.sectionHeading}>How It Works</p>
      <p style={styles.body}>
        Everyone picks a team of 5 golfers. Add all your golfers scores to form your team score.
        The best team score wins the pool. Cut golfers (and anyone who doesn&apos;t finish 4 rounds)
        get 80 for any rounds not completed. Playoff holes do not count.
      </p>

      <p style={styles.sectionHeading}>How To Join The Pool</p>
      <p style={styles.body}>Pick your team of golfers here:</p>
      <a href="http://www.easyofficepools.com/join/?p=469651&e=vepa" style={styles.link}>
        http://www.easyofficepools.com/join/?p=469651&amp;e=vepa
      </a>

      <p style={styles.sectionHeading}>Live Leaderboard</p>
      <p style={styles.body}>Follow the action live</p>
      <a href="http://www.easyofficepools.com/leaderboard/?p=469651" style={styles.link}>
        http://www.easyofficepools.com/leaderboard/?p=469651
      </a>

      <p style={styles.sectionHeading}>Past Leaderboards</p>
      <a href="https://www.easyofficepools.com/leaderboard/?p=383526" style={styles.link}>2025 — Ping me 1 more time (Jye Lee)</a>
      <a href="https://www.easyofficepools.com/leaderboard/?p=305703" style={styles.link}>2024 — Mike O (Mike O&apos;Neill)</a>
      <a href="https://www.easyofficepools.com/leaderboard/?p=240441" style={styles.link}>2023 — Atwood (Ryan Atwood)</a>

      <p style={styles.sectionHeading}>Hosted by chris.n.do@gmail.com</p>
    </div>
  </div>
);

export default MastersPage;
