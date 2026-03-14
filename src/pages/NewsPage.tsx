import "@fontsource/playfair-display/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const newsItems = [
  { date: "December 10, 2025", title: "JIY 2026 Competition Announced", excerpt: "The Institution of Engineers, Sri Lanka is proud to announce the launch of the Junior Inventor of the Year 2026 competition. This year promises exciting new categories and enhanced prize pools." },
  { date: "December 20, 2025", title: "Workshop Series for Participants", excerpt: "IESL will conduct a series of free workshops across the island to help participants refine their inventions and prepare compelling presentations for the judges." },
  { date: "January 5, 2026", title: "Partnership with National Science Foundation", excerpt: "We are delighted to announce a strategic partnership with the National Science Foundation to provide mentoring and resources for all registered participants." },
  { date: "January 12, 2026", title: "Registration Portal Opens January 15", excerpt: "Mark your calendars! The online registration portal for JIY 2026 will open on January 15. Early registrants will receive exclusive access to preparation materials." },
  { date: "February 1, 2026", title: "Meet Our Distinguished Panel of Judges", excerpt: "This year's judging panel features leading engineers and scientists from academia and industry, ensuring fair and comprehensive evaluation of all entries." },
  { date: "February 15, 2026", title: "Regional Preliminary Rounds Announced", excerpt: "To accommodate growing participation, preliminary rounds will be held in five regions across Sri Lanka, making it easier for students from all provinces to compete." },
];

const NewsPage = () => (
  <>
    <Navbar />
    <section className="bg-navy pt-24 pb-12 text-center">
      <h1 className="text-3xl md:text-4xl text-navy-foreground">Latest News & Announcements</h1>
      <div className="gold-divider mt-4" />
    </section>
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, i) => (
          <div key={i} className="bg-card rounded shadow-sm card-hover overflow-hidden">
            <div className="h-40 bg-soft-grey flex items-center justify-center text-caption text-xs">
              News Image
            </div>
            <div className="p-5">
              <span className="text-xs font-body font-medium text-caption uppercase tracking-wider">{item.date}</span>
              <h3 className="text-lg font-heading font-bold text-charcoal mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.excerpt}</p>
              <button className="btn-ghost-blue text-xs px-4 py-2">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    <BackToTop />
  </>
);

export default NewsPage;
