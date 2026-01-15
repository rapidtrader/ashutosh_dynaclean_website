// app/page.jsx or wherever you want to render

import ResponsiveSection from "@/components/Banner/ResponsiveSectionAbout";
import ImageTextBlock from "@/components/About/ImageTextBlock";
import FeatureSection from "@/components/About/FeatureSection";
import CodeOfConductSection from "./Conduct";
// import ImageTextSlider from "@/components/About/ImageTextSlider";

export default function Home() {
  const features = [
    {
      icon: "/About/SVG/power.svg",
      title: "The Power Behind Dynaclean Industries",
      description:
        "At Dynaclean Industries, our achievement is through our enthusiastic team of professionals who contribute their expertise, innovation, and commitment to all that we do. Each department plays a crucial part in delivering the high-quality cleaning Machines to our clients.",
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
        "Our customer-centric team offers bespoke solutions regarding cleaning machines and establishes long-term relationships in sectors such as airports, railways, metros, hospitals, industries, and municipalities.",
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
      {/* <CodeOfConductSection /> */}
      <ResponsiveSection
        imagePath="/About/Main.webp" // public directory
        imageSide="left" // or "right"
        title="About Us"
        description="Dynaclean Industries is a reliable supplier of the best quality of cleaning machines, production of products sweepers, sweeper trucks, scrubbers, ride-on scrubbers, vacuum cleaners, escalator cleaners, scooter mops, jet washers, and so on. Dynaclean is an authorized dealer for airports, railways, metro stations, and other government and private sectors. Our machines are working well in industrial areas, hospitals, and municipal use, providing effective cleaning outcomes. We vow timely after-sales support to enable hassle-free operations for all our Clients. Through 50+ experienced employees in our production staff, we are vow to delivering excellence in quality, innovation, and customer satisfaction."
      />
      <ImageTextBlock
        image="/About/aboutusImage.webp"
        heading="Our Mission"
        description="At Dynaclean Industries, our vision is a cleaner and healthier world through the production and utilization of battery-powered sweeper machines and trucks. Through this green initiative, we wish to decrease pollution, lower carbon emissions, and promote sustainable cleaning solutions in the public and private sectors. We are committed to providing innovative and electricity-run cleaning equipment that not just improves hygiene but also leads to a greener and better future. Clean India, Green India – with Dynaclean Industries."
        alignment="right"
      />
      <ImageTextBlock
        image="/About/vision.png"
        heading="Our Vision"
        description="In Dynaclean Industries, we envision Dynaclean Industries as a world-class pioneer in the field of sustainable cleaning technologies and are committed to providing innovative, efficient, effective and sustainable solutions that redefine the global standard of hygiene. We aim to equip municipalities, industries, and communities with the latest cleaning equipment that enhances efficiency while also fostering a healthier and more environmentally sustainable future for our planet."
        alignment="left"
      />

      <ImageTextBlock
        image="/About/Us1.webp"
        heading="Our Story"
        description="Dynaclean Industries begins with a lucid dream — to provide quality cleaning Machines and solutions for a cleaner and greener India.

we grew up to be the top manufacturer and supplier of a quality array of cleaning machines such as sweepers, ride-on scrubbers, vacuum cleaners, escalator cleaners, scooter mops, jet washers, and electric sweeper trucks.
Our machines are working conscientiously in Indian airports, railways, metros, hospitals, industries, and municipal departments.
Comprising a team of 50+ skilled manufacturing experts and robust after-sales service, Dynaclean is committed to constructing a clean, efficient, and green nation.
"
        alignment="right"
      />

      <FeatureSection heading="Our Team" features={features} />

      {/* <ImageTextSlider slides={slides} mainHeading="Growing Better Together" /> */}
    </main>
  );
}
