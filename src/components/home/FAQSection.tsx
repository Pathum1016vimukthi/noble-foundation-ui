import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Who is eligible to participate?", a: "Students aged 12–19 years currently enrolled in a recognized school in Sri Lanka are eligible to apply individually or as a team of up to three members." },
  { q: "What is the registration deadline?", a: "The registration portal closes on March 31, 2026. Late applications will not be accepted under any circumstances." },
  { q: "Is there a registration fee?", a: "No, participation in the IESL Junior Inventor of the Year competition is completely free of charge." },
  { q: "What types of projects are accepted?", a: "We accept inventions across all engineering and scientific disciplines including mechanical, electrical, software, biomedical, environmental, and more." },
  { q: "How are projects evaluated?", a: "Projects are judged on innovation and originality (30%), technical feasibility (25%), social impact (25%), and presentation quality (20%)." },
  { q: "Can I participate as a team?", a: "Yes, teams of up to three members from the same school are welcome. Each team must designate a team leader for communication purposes." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-royal">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-royal-foreground text-center mb-4">Frequently Asked Questions</h2>
        <div className="gold-divider mb-12" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-royal-foreground/20 rounded overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left text-royal-foreground hover:bg-royal-foreground/5 transition-colors"
              >
                <span className="font-body font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-4 pb-4 text-sm text-royal-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
