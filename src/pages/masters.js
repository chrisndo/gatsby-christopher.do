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
    maxWidth: "520px",
    width: "100%",
    color: "#7a6a52",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "38px",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    margin: "0 0 12px 0",
    lineHeight: "1.15",
  },
  forThe: {
    fontSize: "13px",
    letterSpacing: "0.1em",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0",
  },
  section: {
    marginTop: "32px",
  },
  sectionHeading: {
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "10px",
    paddingBottom: "8px",
    borderBottom: "1px solid #c4b8a4",
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
  hostedBy: {
    marginTop: "40px",
    fontSize: "12px",
    textAlign: "center",
    opacity: 0.6,
  },
};

const MastersPage = () => (
  <div style={styles.page}>
    <div style={styles.card}>
      <div style={styles.header}>
        <h1 style={styles.title}>CDo&apos;s Masters Pool</h1>
        <p style={styles.forThe}>-- for the --</p>
        <p style={styles.subtitle}>2026 Masters Tournament</p>
      </div>

      <div style={styles.section}>
        <p style={styles.sectionHeading}>How It Works</p>
        <p style={styles.body}>
          Everyone picks a team of 10 golfers.<br />
          Add your best 6 of 10 golfers scores to form your team score.<br />
          The best team score wins the pool.<br />
          Cut golfers (and anyone who doesn&apos;t finish 4 rounds) get 80 for any rounds not completed.<br />
          Playoff holes do not count.<br />
          Tiebreaker info <a href="https://help.easyofficepools.com/article/84-how-does-the-tiebreaker-work" style={{ color: "#c44a1a" }}>here</a>
        </p>
      </div>

      <div style={styles.section}>
        <p style={styles.sectionHeading}>Entry &amp; Payouts</p>
        <p style={styles.body}>
          Entry fee: $20 (Venmo: <a href="https://venmo.com/u/ChrisUFL" style={{ color: "#c44a1a" }}>@ChrisUFL</a>) &mdash; due by April 9 at 7am ET.
        </p>
        <p style={{ ...styles.body, marginTop: "10px" }}>
          Final payouts will be determined based on the number of entries:
        </p>
        <p style={{ ...styles.body, marginTop: "4px" }}>
          1st place &mdash; 70% of total pool<br />
          2nd place &mdash; 25% of total pool<br />
          3rd place &mdash; 5% of total pool
        </p>
        <p style={{ ...styles.body, marginTop: "10px", fontStyle: "italic" }}>
          Last chance to enter is April 9 at 7am ET.
        </p>
      </div>

      <div style={styles.section}>
        <p style={styles.sectionHeading}>How To Join</p>
        <p style={styles.body}>Pick your team of golfers here:</p>
        <a href="http://www.easyofficepools.com/join/?p=469651&e=vepa" style={styles.link}>
          easyofficepools.com/join/?p=469651&amp;e=vepa
        </a>
      </div>

      <div style={styles.section}>
        <p style={styles.sectionHeading}>Live Leaderboard</p>
        <p style={styles.body}>Follow the action live:</p>
        <a href="http://www.easyofficepools.com/leaderboard/?p=469651" style={styles.link}>
          easyofficepools.com/leaderboard/?p=469651
        </a>
      </div>

      <div style={styles.section}>
        <p style={styles.sectionHeading}>Past Winners</p>
        <a href="https://www.easyofficepools.com/leaderboard/?p=383526" style={styles.link}>2025 &mdash; Ping me 1 more time (Jye Lee)</a>
        <a href="https://www.easyofficepools.com/leaderboard/?p=305703" style={styles.link}>2024 &mdash; Mike O (Mike O&apos;Neill)</a>
        <a href="https://www.easyofficepools.com/leaderboard/?p=240441" style={styles.link}>2023 &mdash; Atwood (Ryan Atwood)</a>
      </div>

      <p style={styles.hostedBy}>Hosted by chris.n.do@gmail.com</p>
    </div>
  </div>
);

export default MastersPage;
