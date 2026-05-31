export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const getFaqItems = (lang: "en" | "om"): FAQItem[] => [
  {
    id: "faq-1",
    question: lang === "en" ? "How do I book a tour package with Seif Tour and Travel Agency?" : "Akkamittin paakeejii daawwannaa Seif Tour wajjin qabsiisuu danda'a?",
    answer: lang === "en" ? "You can book a tour package through our website by clicking the 'Book Now' button on any package, or contact us directly via phone, email, or WhatsApp. Our travel experts will guide you through the entire booking process and help customize your trip." : "Marsariitii keenya irraan mallattoo 'Amma Qabsiisi' jedhu tuquun, ykn bilbila, iimeelii fi WhatsApp keenyaan nu qunnamuun qabsiisuu dandeessu. Ogeeyyiin imalaa keenya adeemsa guutuu keessatti isin gargaaru.",
  },
  {
    id: "faq-2",
    question: lang === "en" ? "What payment methods do you accept?" : "Mala kaffaltii akkamii fudhattu?",
    answer: lang === "en" ? "We accept various payment methods including bank transfers, credit/debit cards (Visa, MasterCard), mobile banking, and cash payments at our office. We also offer flexible installment plans for select packages." : "Kaffaltii baankii, kaardii (Visa, MasterCard), baankii moobaayilaa, fi maallaqa qaamaan waajjira keenyatti ni fudhanna. Paakeejota muraasaaf kaffaltii yeroo garaagaraatti kaffalamus ni qabna.",
  },
  {
    id: "faq-3",
    question: lang === "en" ? "Do you provide visa assistance?" : "Gargaarsa viizaa ni kennituu?",
    answer: lang === "en" ? "Yes! Our dedicated visa team provides comprehensive visa assistance for all destinations. We handle document preparation, application submission, and follow-up. Our high success rate ensures a smooth visa process for your travels." : "Eeyyee! Gareen viizaa keenya bakkeewwan hundumaaf gargaarsa viizaa guutuu ni kenna. Qophii ragaa, iyyannoo galchuu, fi hordoffii ni hojjenna. Rakkina malee viizaa akka argattan ni taasifna.",
  },
  {
    id: "faq-4",
    question: lang === "en" ? "Can I customize a tour package?" : "Paakeejii daawwannaa ofiif jijjiiruu nan danda'aa?",
    answer: lang === "en" ? "Absolutely! We specialize in custom travel planning. Share your preferences, budget, and interests with our travel experts, and we'll craft a personalized itinerary just for you. From accommodation upgrades to special activities, everything can be tailored." : "Dhuguma! Karoora imalaa dhuunfaa qopheessuu irratti adda. Fedhii, baajata, fi haala keessan ogeeyyii keenyatti himaa, nutis karoora addaa isiniif qopheessina.",
  },
  {
    id: "faq-5",
    question: lang === "en" ? "What is your cancellation and refund policy?" : "Imaammanni haqii fi maallaqa deebisuu keessanii maali?",
    answer: lang === "en" ? "Our cancellation policy varies by package and destination. Generally, cancellations made 30+ days before departure receive a full refund minus processing fees. Cancellations within 15-30 days receive a 50% refund. We recommend travel insurance for added protection." : "Imaammanni haqii keenya akka paakeejii fi bakka imalaatti garaagarummaa qaba. Waliigalaan guyyaa 30 dura yoo haqame maallaqni guutuun ni deebifama (kaffaltii tajaajilaa irraa kan hafe). Guyyaa 15-30 gidduutti yoo ta'e %50 ni deebifama.",
  },
  {
    id: "faq-6",
    question: lang === "en" ? "Do you offer travel insurance?" : "Inshuraansii imalaa ni kennituu?",
    answer: lang === "en" ? "Yes, we offer comprehensive travel insurance packages that cover medical emergencies, trip cancellation, lost baggage, flight delays, and more. We strongly recommend insurance for all international travel to ensure peace of mind." : "Eeyyee, inshuraansii imalaa guutuu balaa tasaa fayyaa, imala haquu, meeshaa baduu fi turuu xiyyaaraa kaffalu ni dhiyeessina. Imala addunyaa hundumaaf inshuraansii akka qabaattan ni gorsina.",
  },
  {
    id: "faq-7",
    question: lang === "en" ? "Are your tour packages all-inclusive?" : "Paakeejoonni daawwannaa keessan waan hunda kan of keessatti qabatanii dha?",
    answer: lang === "en" ? "Most of our packages include accommodation, transfers, guided tours, and select meals. Specific inclusions are listed on each package page. We also offer fully all-inclusive options with flights, all meals, and premium experiences." : "Paakeejoonni keenya irra caalaan bakka bultii, geejjiba, daawwannaa qajeelfamaa fi nyaata muraasa of keessatti qabatu. Tarreeffamni guutuun fuula paakeejii irratti ibsameera. Paakeejii guutumaan guutuutti waan hunda qabatus ni qabna.",
  },
  {
    id: "faq-8",
    question: lang === "en" ? "How can I contact you for urgent travel support?" : "Deeggarsa imalaa hatattamaaf akkamittin isin qunnamuu danda'a?",
    answer: lang === "en" ? "We provide 24/7 customer support. You can reach us via our emergency hotline, WhatsApp, or email. During your trip, our local support team is always available to assist with any issues or changes to your itinerary." : "Deeggarsa maamiltootaa sa'aatii 24 ni kennina. Sarara hatattamaa, WhatsApp, ykn iimeeliidhaan nu qunnamuu dandeessu. Yeroo imala keessanii gareen deeggarsaa keenya rakkoo kamiyyuu hiikuuf qophiidha.",
  },
];
