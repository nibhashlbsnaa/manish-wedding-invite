/*
 * ─────────────────────────────────────────────────────────────
 *  Wedding configuration — edit everything here.
 *  Empty strings ("") are shown to guests as "शीघ्र सूचित किया जाएगा"
 *  (to be announced) and their buttons stay disabled until filled.
 *  Text in [square brackets] is placeholder copy: replace it.
 * ─────────────────────────────────────────────────────────────
 */
window.weddingData = {
  groom: "Manish",
  groomHindi: "मनिष",
  bride: "Monika",
  brideHindi: "मोनिका",

  weddingDate: "2026-12-04",            // ISO date, drives calendar + weekday
  weddingDateText: "04 December 2026",
  weddingDateHindi: "04 दिसंबर 2026",

  invocation: "॥ श्री गणेशाय नमः ॥",
  tagline: "दो दिल, दो परिवार, एक शुभ मिलन",

  invitation: {
    heading: "शुभ मंगल सावधान",
    intro: "ईश्वर की असीम कृपा एवं आप सभी के स्नेहाशीष से हमारे प्रिय",
    bond: "विवाह के पावन बंधन में बंधने जा रहे हैं।",
    request: "इस शुभ अवसर पर आपका स्नेह, आशीर्वाद एवं उपस्थिति हमारे लिए इस मंगल मिलन को और भी विशेष बनाएगी।",
    closing: "आप सादर आमंत्रित हैं"
  },

  // Main venue (used by the venue section). mapUrl: a Google Maps share link.
  // embedUrl (optional): Google Maps "Embed a map" src URL.
  venue: { name: "", address: "", mapUrl: "", embedUrl: "" },

  // date: "YYYY-MM-DD" (or ""), time: display text e.g. "सायं 7 बजे" (or "")
  events: [
    { key: "shubharambh", name: "शुभारंभ", nameEn: "Auspicious Beginning", date: "", time: "", venue: "", mapUrl: "",
      description: "गौरी-गणेश पूजन के साथ मंगल कार्यों का शुभारंभ।" },
    { key: "haldi", name: "हल्दी", nameEn: "Haldi", date: "", time: "", venue: "", mapUrl: "",
      description: "हल्दी-उबटन की मंगल रस्म, हँसी और आशीर्वाद के साथ।" },
    { key: "mehndi", name: "मेहंदी", nameEn: "Mehndi", date: "", time: "", venue: "", mapUrl: "",
      description: "हथेलियों पर रचती मेहंदी और गीतों से सजी शाम।" },
    { key: "sangeet", name: "संगीत", nameEn: "Sangeet", date: "", time: "", venue: "", mapUrl: "",
      description: "लोकगीतों, नृत्य और उल्लास से भरी एक संध्या।" },
    { key: "vivah", name: "विवाह", nameEn: "Wedding", date: "2026-12-04", time: "", venue: "", mapUrl: "", main: true,
      description: "अग्नि को साक्षी मानकर सात फेरे और सिन्दूरदान।" },
    { key: "reception", name: "विदाई / स्वागत समारोह", nameEn: "Vidaai / Reception", date: "", time: "", venue: "", mapUrl: "",
      description: "आशीर्वाद, शुभकामनाएँ और नई यात्रा की ओर पहला कदम।" }
  ],

  story: [
    { title: "जब दो रास्ते मिले", text: "[यहाँ लिखें — आप दोनों की पहली मुलाक़ात की एक छोटी-सी बात]" },
    { title: "एक रिश्ता बना", text: "[यहाँ लिखें — कैसे दोनों परिवार इस रिश्ते से जुड़े]" },
    { title: "और अब…", text: "एक नई शुरुआत" }
  ],

  family: {
    groomSide: {
      title: "वर पक्ष",
      members: ["[वर के दादा-दादी का नाम]", "[वर के पिता का नाम] एवं [वर की माता का नाम]"]
    },
    brideSide: {
      title: "वधू पक्ष",
      members: ["[वधू के दादा-दादी का नाम]", "[वधू के पिता का नाम] एवं [वधू की माता का नाम]"]
    },
    note: "दर्शनाभिलाषी : समस्त परिवारजन"
  },

  // phone in international format without "+", e.g. "919876543210"
  contacts: [],                          // e.g. { name: "", relation: "", phone: "" }
  rsvp: {
    whatsapp: "",                        // number that receives RSVPs on WhatsApp
    formUrl: "",                         // or a Google Form link
    message: "नमस्ते! मनिष एवं मोनिका के शुभ विवाह (04 दिसंबर 2026) में मेरी उपस्थिति की पुष्टि। 🙏"
  },

  music: "",                              // e.g. "assets/music/shehnai.mp3" — button hidden while empty
  gallery: [],                            // e.g. { src: "assets/gallery/1.webp", alt: "…" }

  share: {
    message: "शुभ विवाह 💛\n\nमनिष एवं मोनिका के शुभ विवाह समारोह में आपका सादर आमंत्रण है।\n\n📅 04 December 2026\n\nआपका स्नेह और आशीर्वाद हमारे लिए अमूल्य है।\n\nआइए, इस शुभ मिलन के साक्षी बनें।"
  },

  closing: {
    line: "आप आएँगे तो यह शुभ मिलन पूर्ण होगा",
    footer: "॥ शुभमस्तु ॥"
  }
};
