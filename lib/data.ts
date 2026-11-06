export const PHONE_DISPLAY = "70130 48272";
export const PHONE_TEL = "+917013048272";
export const MOBILE_DISPLAY = "+91 70130 48272";
export const MOBILE_TEL = "+917013048272";
export const MAPS_URL = "https://maps.app.goo.gl/PHRMEpAe9kJTYbMz8";
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1406.613149794684!2d78.54983941049176!3d17.36762730173792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9955034c054b%3A0x16194672d62b09f1!2sDr%20Keerthana%20Kota%20%7C!5e0!3m2!1sen!2sin!4v1793980676815!5m2!1sen!2sin";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "expertise", label: "Areas of Expertise" },
  { id: "conditions", label: "Conditions Treated" },
  { id: "treatments", label: "Treatments" },
  { id: "why", label: "Why Choose Us" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact Us" },
];

export const SOCIALS = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/drkeerthanaurologist" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/drkeerthana_urologist/" },
  { name: "WhatsApp", icon: "whatsapp", href: `https://wa.me/${MOBILE_TEL.replace("+", "")}` },
];

export const CONDITIONS = [
  { title: "Kidney Stones", desc: "Pain in the back or side, sometimes with nausea or blood in the urine." },
  { title: "Urinary Tract Infections (UTIs)", desc: "Burning urination, frequent urges, and recurring infections." },
  { title: "Enlarged Prostate (BPH)", desc: "Weak urine flow, difficulty urinating, or incomplete bladder emptying." },
  { title: "Urinary Incontinence", desc: "Urinary leakage, sudden urgency, or frequent urination." },
  { title: "Overactive Bladder", desc: "Sudden urge to urinate, frequent urination, and difficulty holding urine." },
  { title: "Blood in Urine (Hematuria)", desc: "Visible or microscopic blood in the urine." },
  { title: "Urinary Obstruction", desc: "Blockage or narrowing in the urinary tract." },
  { title: "Recurrent Urinary Infections", desc: "Repeated episodes of UTIs requiring further evaluation." },
];

export const TREATMENTS = [
  {
    title: "Laser Kidney Stone Surgery",
    desc: "Laser kidney stone surgery uses specialized instruments and laser energy to fragment urinary stones into smaller pieces for removal or passage.",
    benefits: ["Minimally invasive approach", "Precise stone fragmentation", "No large surgical incision in many cases"],
  },
  {
    title: "RIRS (Retrograde Intrarenal Surgery)",
    desc: "RIRS is an endoscopic procedure used to treat selected kidney stones by accessing the kidney through the natural urinary passage without external incisions.",
    benefits: ["No external surgical incision", "Suitable for selected kidney stones", "Often allows a shorter hospital stay"],
  },
  {
    title: "PCNL (Percutaneous Nephrolithotomy)",
    desc: "PCNL is a minimally invasive surgical procedure commonly recommended for large or complex kidney stones. It involves accessing the kidney through a small incision in the back.",
    benefits: ["Effective for selected large kidney stones", "Direct access for stone removal", "Smaller incision than traditional open surgery"],
  },
  {
    title: "TURP / Laser TURP",
    desc: "TURP and selected laser procedures are used to treat urinary symptoms caused by benign prostate enlargement when medication is insufficient or complications develop.",
    benefits: ["Helps improve urine flow", "Can reduce obstructive urinary symptoms", "Performed through the urinary passage"],
  },
];

export const WHY = [
  { title: "12+ Years of Experience", desc: "Clinical experience in managing various urological conditions." },
  { title: "Personalised Treatment", desc: "Care plans guided by diagnosis and medical history." },
  { title: "Laser & Endoscopic Expertise", desc: "Experience with advanced urological procedures." },
  { title: "Patient-focused Communication", desc: "Clear explanations of conditions and treatment options." },
  { title: "Minimally Invasive Approach", desc: "Suitable techniques selected based on individual needs." },
  { title: "Continued Care", desc: "Guidance through treatment, recovery, and follow-up." },
];

export const SIGNS = [
  "Persistent pain in the lower back, side, or abdomen",
  "Burning sensation or pain while urinating",
  "Frequent or urgent need to urinate",
  "Difficulty starting or maintaining urine flow",
  "Blood in the urine",
  "Repeated urinary tract infections",
  "Unintentional urine leakage",
  "Difficulty emptying the bladder",
];

export const STEPS = [
  { title: "Book Your Consultation", desc: "Schedule an appointment to discuss your symptoms and concerns." },
  { title: "Clinical Evaluation", desc: "Receive a detailed assessment, including relevant investigations when necessary." },
  { title: "Understand Your Diagnosis", desc: "Learn about your condition and the available management options." },
  {
    title: "Personalized Treatment",
    desc: "Receive a treatment plan that may include medication, lifestyle modifications, or a procedure based on clinical requirements.",
  },
  { title: "Recovery & Follow-up", desc: "Get guidance on recovery, preventive measures, and ongoing urological health." },
];

// Left column then right column, matching the Figma layout (reads row by row).
export const FAQS = [
  {
    q: "When should I consult a urologist?",
    a: "Consult a urologist if you experience persistent urinary problems, kidney stone symptoms, recurrent UTIs, blood in the urine, urinary leakage, or difficulty passing urine.",
  },
  {
    q: "Who is Dr. Keerthana Kota?",
    a: "Dr. Keerthana Kota is a Consultant Urologist (MBBS, MS, DNB Urology) with over 12 years of clinical experience, consulting at Susheela Hospital, Kothapet, Hyderabad.",
  },
  {
    q: "Do all kidney stones require surgery?",
    a: "No. Many small stones can pass naturally or be managed with medication. Surgery or laser treatment is recommended based on stone size, location, and symptoms.",
  },
  {
    q: "What is RIRS for kidney stones?",
    a: "RIRS (Retrograde Intrarenal Surgery) is an endoscopic procedure that treats selected kidney stones by accessing the kidney through the natural urinary passage, without external incisions.",
  },
  {
    q: "Can women consult Dr. Keerthana Kota for urinary problems?",
    a: "Yes. Dr. Keerthana Kota treats men, women, and children, including female urological conditions such as UTIs, incontinence, and overactive bladder.",
  },
  {
    q: "What are the common symptoms of prostate enlargement?",
    a: "Common symptoms include weak urine flow, difficulty starting urination, frequent urination (especially at night), and a feeling of incomplete bladder emptying.",
  },
  {
    q: "Is laser kidney stone surgery painful?",
    a: "Laser kidney stone surgery is performed under anaesthesia, so you do not feel pain during the procedure. Mild discomfort afterwards is usually manageable with medication.",
  },
  {
    q: "How long does recovery take after urological surgery?",
    a: "Recovery depends on the procedure and the individual patient. Endoscopic procedures often allow a shorter hospital stay and quicker return to routine activity.",
  },
  {
    q: "Where does Dr. Keerthana Kota consult in Hyderabad?",
    a: "Dr. Keerthana Kota consults at Susheela Hospital, SRK Puram, Kothapet, Hyderabad, Telangana.",
  },
  {
    q: "How can I book an appointment with Dr. Keerthana Kota?",
    a: "Call 70130 48272, or use the appointment form on this page.",
  },
];

export const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Doctor" },
  { id: "expertise", label: "Expertise" },
  { id: "conditions", label: "Conditions Treated" },
  { id: "treatments", label: "Treatments" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact Us" },
];
