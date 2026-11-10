/*
 * Interface text (headings, buttons, labels) in English, Hindi and Maithili.
 * In the page, data-i18n="key" shows the current language; data-i18n-alt="key" shows the
 * companion line (English under Hindi/Maithili headings, Hindi under English ones).
 */
window.i18n = {
  langs: [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'mai', label: 'मैथिली' }
  ],
  // locale used for dates (Maithili dates use the Hindi month and weekday names)
  locale: { en: 'en-GB', hi: 'hi-IN', mai: 'hi-IN' },
  t: {
    langSwitch: { en: 'Choose language', hi: 'भाषा चुनें', mai: 'भाषा चुनू' },
    open: { en: 'Open the invitation', hi: 'आमंत्रण खोलें', mai: 'आमंत्रण खोलू' },
    shubhVivah: { en: 'The Wedding', hi: 'शुभ विवाह', mai: 'शुभ विवाह' },
    and: { en: 'and', hi: 'और', mai: 'आ' },
    with: { en: 'with', hi: 'एवं', mai: 'संग' },
    scroll: { en: 'Scroll on', hi: 'आगे देखें', mai: 'आगाँ देखू' },
    dateTitle: { en: 'Wedding date', hi: 'विवाह तिथि', mai: 'विवाहक तिथि' },

    mithila: { en: 'Rooted in the traditions of Mithila', hi: 'मिथिला की परंपरा में', mai: 'मिथिलाक परम्परा मे' },
    sceneCaption: {
      en: 'A wedding scene in Mithila style: the groom in a paag, the bride in a red saree, a bamboo mandap, the sacred fire, sun, moon, lotuses and fish.',
      hi: 'मिथिला शैली में चित्रित विवाह-दृश्य: पाग धारण किए वर, लाल साड़ी में वधू, बाँस का मंडप, पवित्र अग्नि, सूर्य, चंद्र, कमल और मछलियाँ।',
      mai: 'मिथिला शैलीमे चित्रित विवाह-दृश्य: पाग पहिरने वर, लाल साड़ीमे कनियाँ, बाँसक मड़बा, पवित्र अग्नि, सूर्य, चन्द्रमा, कमल आ माछ।'
    },
    customs: { en: 'Traditions of Mithila', hi: 'मिथिला की परंपराएँ', mai: 'मिथिलाक परम्परा' },
    paag: { en: 'Paag', hi: 'पाग', mai: 'पाग' },
    paagText: {
      en: 'The pride of Mithila, worn with honour by the groom.',
      hi: 'मिथिला का सम्मान-चिह्न, जिसे वर गर्व से धारण करता है।',
      mai: 'मिथिलाक सम्मान-चिह्न, जकरा वर गर्वसँ धारण करैत छथि।'
    },
    kohbarName: { en: 'Kohbar', hi: 'कोहबर', mai: 'कोहबर' },
    kohbarText: {
      en: "The couple's blessed chamber, its walls painted with auspicious art.",
      hi: 'नवदम्पति का मंगल-कक्ष, जिसकी दीवारें शुभ चित्रों से सजती हैं।',
      mai: 'नवदम्पतिक मंगल-कक्ष, जकर देबाल शुभ चित्रसँ सजाओल जाइत अछि।'
    },
    machh: { en: 'Machh', hi: 'माछ', mai: 'माछ' },
    machhText: {
      en: 'The fish — a symbol of good fortune and plenty.',
      hi: 'मछली — सौभाग्य और समृद्धि का प्रतीक।',
      mai: 'माछ — सौभाग्य आ समृद्धिक प्रतीक।'
    },
    aripan: { en: 'Aripan', hi: 'अरिपन', mai: 'अरिपन' },
    aripanText: {
      en: 'Sacred patterns drawn in the courtyard with rice paste.',
      hi: 'चावल के घोल से आँगन में रची जाने वाली मंगल अल्पना।',
      mai: 'चाउरक पिठारसँ आँगनमे लिखल जाइत मंगल अरिपन।'
    },

    events: { en: 'The celebrations', hi: 'मंगल कार्यक्रम', mai: 'मंगल कार्यक्रम' },
    vivah: { en: 'Vivah', hi: 'विवाह', mai: 'विवाह' },
    mandapArt: {
      en: 'A golden Mithila-style wedding mandap with marigold garlands, bells, diyas and the sacred fire',
      hi: 'मिथिला शैली का सुनहरा विवाह-मंडप, गेंदे की मालाएँ, घंटियाँ, दीये और पवित्र अग्नि',
      mai: 'मिथिला शैलीक सुनहरा मड़बा, गेंदाक माला, घंटी, दीप आ पवित्र अग्नि'
    },
    mandapCaption: {
      en: 'With the sacred fire as witness, through the seven vows',
      hi: 'अग्नि को साक्षी मानकर, सात फेरों के साथ',
      mai: 'अग्निकेँ साक्षी मानि, सात फेराक संग'
    },

    kohbar: { en: 'A living Kohbar painting', hi: 'कोहबर', mai: 'कोहबर' },
    kohbarArt: {
      en: 'Kohbar painting: a lotus ring and bamboo at the centre, sun, moon and parrots above, fish and lotuses below',
      hi: 'कोहबर चित्र: केंद्र में कमल-वलय और बाँस, ऊपर सूर्य-चंद्र और सुग्गे, नीचे मछलियाँ और कमल',
      mai: 'कोहबर चित्र: बीचमे पुरइनिक वलय आ बाँस, ऊपर सूर्य-चन्द्रमा आ सुग्गा, नीचाँ माछ आ कमल'
    },
    kohbarCaption: {
      en: 'Lotus, bamboo, fish, parrot, sun and moon — in a Mithila Kohbar every symbol is a blessing.',
      hi: 'कमल, बाँस, माछ, सुग्गा, सूर्य और चंद्र — मिथिला के कोहबर में हर चिह्न एक आशीर्वाद है।',
      mai: 'कमल, बाँस, माछ, सुग्गा, सूर्य आ चन्द्रमा — मिथिलाक कोहबरमे सभ चिह्न एकटा आशीर्वाद अछि।'
    },

    story: { en: 'Our story', hi: 'हमारी कहानी', mai: 'हमर कथा' },
    family: { en: 'With the blessings of our families', hi: 'परिवार का आशीर्वाद', mai: 'परिवारक आशीर्वाद' },
    venue: { en: 'Venue', hi: 'विवाह स्थल', mai: 'विवाह स्थल' },
    gallery: { en: 'Moments', hi: 'स्मृतियाँ', mai: 'स्मृति' },
    rsvp: { en: 'RSVP & contact', hi: 'उपस्थिति एवं संपर्क', mai: 'उपस्थिति आ सम्पर्क' },
    share: { en: 'Share the invitation', hi: 'आमंत्रण साझा करें', mai: 'आमंत्रण साझा करू' },
    footer: { en: 'With love, from both families', hi: 'सप्रेम · दोनों परिवारों की ओर से', mai: 'सप्रेम · दुनू परिवार दिस सँ' },
    music: { en: 'Music', hi: 'संगीत', mai: 'संगीत' },
    musicPlay: { en: 'Play music', hi: 'संगीत चलाएँ', mai: 'संगीत बजाउ' },
    musicPause: { en: 'Pause music', hi: 'संगीत रोकें', mai: 'संगीत रोकू' },

    // labels used by the generated sections
    tba: { en: 'To be announced', hi: 'शीघ्र सूचित किया जाएगा', mai: 'शीघ्र सूचित कएल जाएत' },
    date: { en: 'Date', hi: 'तिथि', mai: 'तिथि' },
    time: { en: 'Time', hi: 'समय', mai: 'समय' },
    place: { en: 'Venue', hi: 'स्थान', mai: 'स्थान' },
    map: { en: 'Map', hi: 'मानचित्र', mai: 'नक्शा' },
    addCal: { en: 'Add to calendar', hi: 'कैलेंडर में जोड़ें', mai: 'कैलेंडरमे जोड़ू' },
    venueTba: { en: 'Venue to be announced', hi: 'स्थान शीघ्र सूचित किया जाएगा', mai: 'स्थान शीघ्र सूचित कएल जाएत' },
    addressTba: { en: 'Address and map coming soon', hi: 'पता एवं मानचित्र शीघ्र उपलब्ध होंगे', mai: 'पता आ नक्शा शीघ्र उपलब्ध होएत' },
    viewMap: { en: 'View on map', hi: 'मानचित्र में देखें', mai: 'नक्शा पर देखू' },
    mapTitle: { en: 'Map of the wedding venue', hi: 'विवाह स्थल का मानचित्र', mai: 'विवाह स्थलक नक्शा' },
    rsvpConfirm: { en: 'Confirm attendance', hi: 'उपस्थिति की पुष्टि करें', mai: 'उपस्थितिक पुष्टि करू' },
    rsvpForm: { en: 'Fill the RSVP form', hi: 'RSVP फ़ॉर्म भरें', mai: 'RSVP फॉर्म भरू' },
    rsvpLead: {
      en: 'Kindly let us know you are coming — it would mean a lot to us.',
      hi: 'कृपया अपनी उपस्थिति की सूचना देकर हमें अनुगृहीत करें।',
      mai: 'कृपया अपन उपस्थितिक सूचना दऽ हमरा सभकेँ अनुगृहीत करी।'
    },
    rsvpTba: { en: 'Attendance and contact details to be announced.', hi: 'उपस्थिति एवं संपर्क विवरण शीघ्र सूचित किया जाएगा।', mai: 'उपस्थिति आ सम्पर्क विवरण शीघ्र सूचित कएल जाएत।' },
    call: { en: 'Call', hi: 'कॉल', mai: 'फोन' },
    callWho: { en: 'Call {name}', hi: '{name} को कॉल करें', mai: '{name}केँ फोन करू' }
  }
};
