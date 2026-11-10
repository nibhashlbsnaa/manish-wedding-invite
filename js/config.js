/*
 * ─────────────────────────────────────────────────────────────
 *  Wedding configuration — edit everything here.
 *  Text shown to guests comes in three languages:
 *    { en: "English", hi: "हिन्दी", mai: "मैथिली" }
 *  A missing language falls back to Hindi. Plain strings are used as-is in every language.
 *  Empty values ("") are shown as "to be announced" and their buttons stay disabled.
 *  Text in [square brackets] is placeholder copy: replace it.
 *  Button labels and section headings live in js/i18n.js.
 * ─────────────────────────────────────────────────────────────
 */
window.weddingData = {
  defaultLang: "hi",                    // "en" | "hi" | "mai" — used when the guest hasn't chosen yet

  groom: "Manish",
  groomHindi: "मनीष",
  bride: "Monika",
  brideHindi: "मोनिका",

  weddingDate: "2026-12-04",            // ISO date, drives calendar + weekday
  weddingDateText: "04 December 2026",

  invocation: "॥ श्री गणेशाय नमः ॥",
  tagline: {
    en: "Two hearts, two families, one blessed union",
    hi: "दो दिल, दो परिवार, एक शुभ मिलन",
    mai: "दू हृदय, दू परिवार, एक शुभ मिलन"
  },

  invitation: {
    heading: { en: "A Blessed Union", hi: "शुभ मंगल सावधान", mai: "शुभ मंगल सावधान" },
    intro: {
      en: "By the boundless grace of the Almighty, Smt. Nutan Mishra & Shri Vinod Mishra request the pleasure of your company at the wedding of their son",
      hi: "परमपिता परमेश्वर की असीम अनुकम्पा से श्रीमती नूतन मिश्र एवं श्री विनोद मिश्र अपने सुपुत्र",
      mai: "परमपिता परमेश्वरक असीम अनुकम्पा सँ श्रीमती नूतन मिश्र एवं श्री विनोद मिश्र अपन सुपुत्र"
    },
    bond: {
      en: "on the sweet occasion of their sacred union.",
      hi: "के परिणय सूत्र बन्धन की मधुर बेला पर आपको सादर आमंत्रित करते हैं।",
      mai: "केर परिणय सूत्र बन्धनक मधुर बेला पर अहाँकेँ सादर आमंत्रित करैत छथि।"
    },
    request: {
      en: "Kindly join us as per the programme and bless the couple — your presence will honour us.",
      hi: "कृपया कार्यक्रमानुसार पधार कर वर-वधू को अपना आशीर्वाद देकर हमें अनुग्रहित करें।",
      mai: "कृपया कार्यक्रमानुसार पधारि वर-वधूकेँ अपन आशीर्वाद दऽ हमरा सभकेँ अनुगृहीत करी।"
    },
    closing: { en: "You are cordially invited", hi: "आप सादर आमंत्रित हैं", mai: "अहाँ सादर आमंत्रित छी" }
  },

  // Main venue (used by the venue section). mapUrl: a Google Maps share link.
  // embedUrl (optional): Google Maps "Embed a map" src URL.
  venue: {
    name: { en: "Sangam Farm", hi: "संगम फार्म", mai: "संगम फार्म" },
    address: { en: "Main Bus Stand, Nizampur, Delhi", hi: "मेन बस स्टैंड, निजामपुर, दिल्ली", mai: "मेन बस स्टैंड, निजामपुर, दिल्ली" },
    mapUrl: "",
    embedUrl: ""
  },

  // date: "YYYY-MM-DD" (or ""), time: display text (or "")
  events: [
    {
      key: "baraat", date: "2026-12-04", mapUrl: "",
      name: { en: "Baraat Departure", hi: "बारात प्रस्थान", mai: "बरियात प्रस्थान" },
      time: { en: "5:00 PM", hi: "सायं 5:00 बजे", mai: "साँझ 5:00 बजे" },
      venue: {
        en: "Residence — K-200, Gali No. 12, Saurabh Vihar, Jaitpur, Badarpur, New Delhi-110044",
        hi: "निवास स्थान — के-200, गली नं. 12, सौरभ विहार, जैतपुर, बदरपुर, नई दिल्ली-110044",
        mai: "निवास स्थान — के-200, गली नं. 12, सौरभ विहार, जैतपुर, बदरपुर, नई दिल्ली-110044"
      },
      description: {
        en: "The baraat will leave our residence at 5 PM for the wedding venue.",
        hi: "बारात हमारे निवास स्थान से सायं 5 बजे विवाह स्थल के लिए प्रस्थान करेगी।",
        mai: "बरियात हमर निवास स्थान सँ साँझ 5 बजे विवाह स्थलक लेल प्रस्थान करत।"
      }
    },
    {
      key: "vivah", date: "2026-12-04", venue: "", mapUrl: "", main: true,
      name: { en: "Wedding", hi: "शुभ विवाह", mai: "शुभ विवाह" },
      time: { en: "At the auspicious muhurat", hi: "शुभ लग्नानुसार", mai: "शुभ लग्नानुसार" },
      description: {
        en: "The seven sacred rounds and sindoor-daan, with the holy fire as witness.",
        hi: "अग्नि को साक्षी मानकर सात फेरे और सिन्दूरदान।",
        mai: "अग्निकेँ साक्षी मानि सात फेरा आ सिन्दूरदान।"
      }
    }
  ],

  story: [
    {
      title: { en: "When two paths met", hi: "जब दो रास्ते मिले", mai: "जखन दू बाट मिलल" },
      text: {
        en: "[Write here — a little about how you first met]",
        hi: "[यहाँ लिखें — आप दोनों की पहली मुलाक़ात की एक छोटी-सी बात]",
        mai: "[एतय लिखू — अहाँ दुनूक पहिल भेँटक एकटा छोट-छीन बात]"
      }
    },
    {
      title: { en: "A bond was formed", hi: "एक रिश्ता बना", mai: "एकटा सम्बन्ध बनल" },
      text: {
        en: "[Write here — how the two families came together]",
        hi: "[यहाँ लिखें — कैसे दोनों परिवार इस रिश्ते से जुड़े]",
        mai: "[एतय लिखू — कोना दुनू परिवार एहि सम्बन्धसँ जुड़ल]"
      }
    },
    {
      title: { en: "And now…", hi: "और अब…", mai: "आ आब…" },
      text: { en: "A new beginning", hi: "एक नई शुरुआत", mai: "एकटा नव शुरुआत" }
    }
  ],

  family: {
    groomSide: {
      title: { en: "Groom's family", hi: "वर पक्ष", mai: "वर पक्ष" },
      members: [
        { en: "Chi. Manish Mishra", hi: "चि० मनीष मिश्र", mai: "चि० मनीष मिश्र" },
        {
          en: "Parents: Smt. Nutan Mishra & Shri Vinod Mishra",
          hi: "माता-पिता: श्रीमती नूतन मिश्र एवं श्री विनोद मिश्र",
          mai: "माता-पिता: श्रीमती नूतन मिश्र एवं श्री विनोद मिश्र"
        },
        {
          en: "Grandparents: Smt. Phool Devi & Late Shri Bhairav Mishra",
          hi: "दादा-दादी: श्रीमती फूल देवी एवं स्व० श्री भैरव मिश्र",
          mai: "बाबा-दादी: श्रीमती फूल देवी एवं स्व० श्री भैरव मिश्र"
        }
      ]
    },
    brideSide: {
      title: { en: "Bride's family", hi: "वधू पक्ष", mai: "कन्या पक्ष" },
      members: [
        { en: "Ayu. Monika (Munni)", hi: "आयु० मोनिका (मुन्नी)", mai: "आयु० मोनिका (मुन्नी)" },
        {
          en: "Parents: Smt. Kiran Devi & Shri Madan Mohan Jha",
          hi: "माता-पिता: श्रीमती किरण देवी एवं श्री मदन मोहन झा",
          mai: "माता-पिता: श्रीमती किरण देवी एवं श्री मदन मोहन झा"
        },
        {
          en: "Grandparents: Smt. & Shri Vedanand Jha",
          hi: "दादा-दादी: श्रीमती एवं श्री वेदानन्द झा",
          mai: "बाबा-दादी: श्रीमती एवं श्री वेदानन्द झा"
        },
        {
          en: "Native place: Village Mahrail, Jhanjharpur, District Madhubani, Bihar",
          hi: "निवासी: ग्राम-महरैल, झंझारपुर, जिला-मधुबनी, बिहार",
          mai: "निवासी: ग्राम-महरैल, झंझारपुर, जिला-मधुबनी, बिहार"
        }
      ]
    },
    note: {
      en: "Eagerly awaiting your presence: Dr. Bhagirath Mishra, Shri Rajkumar Mishra, Shri Shravan Mishra, Shri Santosh Mishra, Shri Ashutosh Mishra, Shri Balram Mishra, Shri Laxman Mishra and the entire Mishra family",
      hi: "दर्शनाभिलाषी : डॉ० भगीरथ मिश्र, श्री राजकुमार मिश्र, श्री श्रवण मिश्र, श्री संतोष मिश्र, श्री आशुतोष मिश्र, श्री बलराम मिश्र, श्री लक्ष्मण मिश्र एवं समस्त मिश्र परिवार",
      mai: "दर्शनाभिलाषी : डॉ० भगीरथ मिश्र, श्री राजकुमार मिश्र, श्री श्रवण मिश्र, श्री संतोष मिश्र, श्री आशुतोष मिश्र, श्री बलराम मिश्र, श्री लक्ष्मण मिश्र एवं समस्त मिश्र परिवार"
    }
  },

  // phone in international format without "+", e.g. "919876543210"
  contacts: [
    { name: { en: "Shri Balram Mishra", hi: "श्री बलराम मिश्र", mai: "श्री बलराम मिश्र" }, relation: "98103 55282", phone: "919810355282" },
    { name: { en: "Mishra family", hi: "मिश्र परिवार", mai: "मिश्र परिवार" }, relation: "98718 93786", phone: "919871893786" },
    { name: { en: "Mishra family", hi: "मिश्र परिवार", mai: "मिश्र परिवार" }, relation: "98187 05820", phone: "919818705820" },
    { name: { en: "Mishra family", hi: "मिश्र परिवार", mai: "मिश्र परिवार" }, relation: "97173 79301", phone: "919717379301" }
  ],
  rsvp: {
    whatsapp: "",                        // number that receives RSVPs on WhatsApp
    formUrl: "",                         // or a Google Form link
    message: {
      en: "Namaste! Confirming my presence at the wedding of Manish & Monika (04 December 2026). 🙏",
      hi: "नमस्ते! मनीष एवं मोनिका के शुभ विवाह (04 दिसंबर 2026) में मेरी उपस्थिति की पुष्टि। 🙏",
      mai: "प्रणाम! मनीष आ मोनिकाक शुभ विवाह (04 दिसंबर 2026) मे हमर उपस्थितिक पुष्टि। 🙏"
    }
  },

  music: "",                              // e.g. "assets/music/shehnai.mp3" — button hidden while empty
  gallery: [],                            // e.g. { src: "assets/gallery/1.webp", alt: "…" }

  share: {
    message: {
      en: "Shubh Vivah 💛\n\nYou are cordially invited to the wedding of Manish & Monika.\n\n📅 Friday, 04 December 2026\n📍 Sangam Farm, Main Bus Stand, Nizampur, Delhi\n\nYour love and blessings mean the world to us.\n\nCome, be a witness to this blessed union.",
      hi: "शुभ विवाह 💛\n\nमनीष एवं मोनिका के शुभ विवाह समारोह में आपका सादर आमंत्रण है।\n\n📅 शुक्रवार, 04 दिसंबर 2026\n📍 संगम फार्म, मेन बस स्टैंड, निजामपुर, दिल्ली\n\nआपका स्नेह और आशीर्वाद हमारे लिए अमूल्य है।\n\nआइए, इस शुभ मिलन के साक्षी बनें।",
      mai: "शुभ विवाह 💛\n\nमनीष आ मोनिकाक शुभ विवाह समारोह मे अहाँक सादर आमंत्रण अछि।\n\n📅 शुक्रवार, 04 दिसंबर 2026\n📍 संगम फार्म, मेन बस स्टैंड, निजामपुर, दिल्ली\n\nअहाँक स्नेह आ आशीर्वाद हमरा सभक लेल अमूल्य अछि।\n\nआउ, एहि शुभ मिलनक साक्षी बनू।"
    }
  },

  closing: {
    line: {
      en: "Your presence will make this union complete",
      hi: "आप आएँगे तो यह शुभ मिलन पूर्ण होगा",
      mai: "अहाँक अएला सँ ई शुभ मिलन पूर्ण होयत"
    },
    footer: "॥ शुभमस्तु ॥"
  }
};
