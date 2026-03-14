const RegistrationSection = () => (
  <section id="registration" className="section-padding bg-navy text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-navy-foreground mb-4">Register Now</h2>
      <div className="gold-divider mb-8" />
      <p className="text-navy-foreground/70 leading-relaxed mb-10 text-lg">
        Ready to showcase your invention to the nation? Complete your registration through our online portal. Download the verification form and submit it along with your project proposal.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="btn-cta-large text-center">Open Registration Portal</a>
        <a href="#" className="btn-ghost text-center">Download Verification Form</a>
      </div>
    </div>
  </section>
);

export default RegistrationSection;
