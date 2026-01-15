// app/page.jsx or wherever you want to render

import ResponsiveSection from "@/components/Banner/ResponsiveSectionAbout";
import ContactForm from "@/components/Forms/Service";
import ContactInfo from "@/components/service/ContactInfo";
// import ImageTextSlider from "@/components/About/ImageTextSlider";

export default function Home() {
  const features = [
    {
      icon: "/About/SVG/power.svg",
      title: "The Power Behind Dynaclean Industries",
      description:
        "At Dynaclean Industries, our achievement is through our enthusiastic team of professionals who contribute their expertise, innovation, and commitment to all that we do. each department plays a crucial part in delivering the High quality cleaning Machines our clients.",
    },
    {
      icon: "/About/SVG/manufacture.svg",
      title: "Manufacturing Team",
      description:
        "50+ experienced Mechanical and Technical Engineers and technicians work with dedication and attention to construct high-performance heavy-duty cleaning machines that uphold the highest standards of quality.",
    },
    {
      icon: "/About/SVG/sales.svg",
      title: "Sales & Marketing Team",
      description:
        "Our customer-centric team offers bespoke solutions regarding cleaning machines and establish long-term relationships in sectors such as airports, railways, metros, hospitals, industries, and municipalities.",
    },
    {
      icon: "/About/SVG/services.svg",
      title: "Service & Support Team",
      description:
        "A dependable after-sales support team that dedicated timely service, training to site encharges, and maintenance, ensuring client operations run smoothly.",
    },
    {
      icon: "/About/SVG/rd.svg",
      title: "R&D & Innovation Team",
      description:
        "Working continuously on product development and environmentally friendly innovations such as our battery-operated sweeper trucks – making environment cleaner, greener future.",
    },
    {
      icon: "/About/SVG/leader.svg",
      title: "Leadership & Management",
      description:
        "Lead by seasoned leadership with a commitment to quality, sustainability, and customer satisfaction, the team steers Dynaclean's development forward constantly.",
    },
  ];

  return (
    <main>
      <ResponsiveSection
        imagePath="/ServiceSuport/Srivece.webp" // public directory
        imageSide="left" // or "right"
        title="Service Support"
        description="At Dynaclean , we don’t just sell machines — we build long-term partnerships through exceptional service support. From the moment your cleaning equipments is delivered, our expert service team is by your side with professional installation, trainning, and repairing maintenance. Whether it’s a vacuum cleaner, sweeper, road sweeper, scrubber, or escalator cleaner, scooter mop .we promises your machine performs at its best — every single day.

With a nationwide service network, access to genuine spare parts, and a team of highly trained engineers, Dynaclean guarantees minimal downtime and maximum satisfaction. Our fast and friendly support is just a call away — because we believe cleaning should never stop, and neither should your trust in us."
      />

      {/* <ImageTextSlider slides={slides} mainHeading="Growing Better Together" /> */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-45 py-10  mb-16 ">
        <div className="w-full max-w-[50rem]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
