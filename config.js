// ==========================================
// SYSTEM MASTER CONFIGURATION (White Label)
// ==========================================

const CLIENT_CONFIG = {
    // 1. SYSTEM & DATABASE
    id: "leaderboard_marc",   // Unique ID (e.g., 'marcgebauer' or 'eddie')
    brandColor: "#c5a059",          // Primary color (Purple for Eddie, Gold for Marc)
    easterEggScore: 29,             // Victory after 30 boxes (Internal Score 29)

    // 2. BRANDING & IDENTITY (Only "UNAUFHALTSAM" is German)
    brandTitle: "UNAUFHALTSAM",
    brandSub: "PRECISION UNDER PRESSURE",
    startDesc: "Focus on the target box. Any mistake ends the system immediately.",
    boxOverlayText: "FOCUS",        // The text pulsing on the target
    
    // 3. REWARDS & CODES
    rewardTitle: "ELITE STATUS REACHED: CLAIM YOUR REWARD",
    rewardSuccess: "CLAIMED. YOU WILL BE CONTACTED.",
    rewardCode: "MASTER30",

    // 4. PSYCHOLOGICAL QUOTES (The 6 Stages of Frustration)
    quotes: [
        '"Focus is a choice. You just chose against it."',
        '"Consistency separates the wheat from the chaff."',
        '"Waking up. Now the real mental work begins."',
        '"Strong performance. You are above average."',
        '"Outstanding. You control the system, not the other way around."',
        '"Absolute Elite. You broke the 30-box wall. Respect."'
    ],

    // 5. LEGAL (Automatic injection for Imprint/Privacy)
    legal: {
        name: "YOUR NAME / COMPANY",
        street: "STREET 123",
        city: "ZIP CITY",
        email: "MAIL@EXAMPLE.COM",
        register: "COMMERCIAL REGISTER XXX",
        ustid: "VAT ID: DE XXX XXX XXX"
    }
};
