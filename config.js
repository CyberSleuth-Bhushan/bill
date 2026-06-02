// ══════════════════════════════════════════════════════════════
//  NetShare Billing Portal — Configuration
//  ⚠️ Do NOT commit this file to public repositories
// ══════════════════════════════════════════════════════════════

const CONFIG = {
  // PayU Credentials
  PAYU: {
    KEY: "R5CD8P",
    SALT: "9XG80AJ1EDDzbG0ogxCcD7guZWQ0pO5L",
    ENV: "test" // Use "production" for live environment, "test" for UAT
  },

  // Firebase
  FIREBASE: {
    apiKey: "AIzaSyCuP2qcgxKj6uuDuRQMaOozjQNedoMIEsY",
    authDomain: "netbillisp.firebaseapp.com",
    databaseURL: "https://netbillisp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netbillisp",
    storageBucket: "netbillisp.firebasestorage.app",
    messagingSenderId: "1024745870051",
    appId: "1:1024745870051:web:1be586da9d1d78959a6bd6"
  }
};
