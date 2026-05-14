"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Inventory",          id: "inventory"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Singh Auto"
      button={{ text: "Contact Us", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Singh Auto: Premium Cars for You"
      description="Discover your next vehicle from our curated collection of premium inventory. Exceptional quality and reliable service await you."
      buttons={[
        {
          text: "View Inventory",          href: "#inventory"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-customers-car-dealership_23-2149106169.jpg",          imageAlt: "Showroom Display"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-elegant-man-car-salon_1157-20997.jpg",          imageAlt: "SUV Scenic"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-hightech-factory_645730-755.jpg",          imageAlt: "Mechanical Excellence"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sales-representative-meeting-with-his-manager_1098-2009.jpg",          imageAlt: "Sales Consultation"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-female-model-off-shoulder-dress-posing-near-vehicle_181624-5421.jpg",          imageAlt: "Experience Driving"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-sunset-cote-d-azur-french-rivera-france_181624-45824.jpg",          imageAlt: "Headlight Night"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Years of Automotive Excellence"
      description="At Singh Auto, we prioritize quality and customer satisfaction above all else. Every vehicle in our fleet is thoroughly inspected to ensure the best performance for our clients."
      metrics={[
        {
          value: "20+",          title: "Years Experience"},
        {
          value: "5000+",          title: "Cars Sold"},
        {
          value: "100%",          title: "Client Satisfaction"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mid-adult-businessman-with-touchpad-communicating-with-car-mechanics-auto-repair-shop_637285-4227.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Certified Inspections",          description: "Every vehicle undergoes a 200-point rigorous check.",          icon: Shield,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/gear-stick-front-part-brand-new-automobile-modern-black-interior-conception-vehicles_146671-16742.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-red-car_23-2149204045.jpg"},
          ]
        },
        {
          title: "Financing Options",          description: "Competitive rates tailored to your budget.",          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/focused-manly-woman-is-doing-car-diagnostic-with-computer-help-auto-service_613910-17108.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/more-concepts-we-share-better_329181-17092.jpg"},
          ]
        },
        {
          title: "Extended Warranty",          description: "Drive with confidence knowing you're protected.",          icon: Award,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/person-preparing-get-driver-license_23-2150167640.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-car-night_23-2149001289.jpg"},
          ]
        },
      ]}
      title="Why Choose Singh Auto"
      description="We offer more than just cars – we offer a seamless ownership experience with dedicated support."
    />
  </div>

  <div id="inventory" data-section="inventory">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Luxury Sedan",          price: "$35,000",          variant: "Silver",          imageSrc: "http://img.b2bpic.net/free-photo/silver-coupe-speeds-with-visible-plate-highway-editorial-motion_169016-71144.jpg"},
        {
          id: "2",          name: "Compact City Car",          price: "$18,500",          variant: "Blue",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-city-with-high-tech-mobility-social-welfare_23-2151065348.jpg"},
        {
          id: "3",          name: "Crossover SUV",          price: "$28,000",          variant: "White",          imageSrc: "http://img.b2bpic.net/free-photo/happy-tourist-couple-sea_23-2148637298.jpg"},
        {
          id: "4",          name: "Sporty Hatchback",          price: "$22,000",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-city-with-high-tech-mobility-social-welfare_23-2151065342.jpg"},
        {
          id: "5",          name: "Premium SUV",          price: "$45,000",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/woman-car-nicht_23-2148140768.jpg"},
        {
          id: "6",          name: "Modern Electric",          price: "$32,000",          variant: "White",          imageSrc: "http://img.b2bpic.net/free-photo/man-unplugging-electric-charger-from-dock-charge-station_1268-17717.jpg"},
      ]}
      title="Our Latest Inventory"
      description="Browse through our collection of premium, certified vehicles."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "15",          title: "Partner Brands",          items: [
            "Premium",            "Reliable",            "Trusted"],
        },
        {
          id: "m2",          value: "4.9",          title: "Customer Rating",          items: [
            "Excellent",            "Support",            "Verified"],
        },
        {
          id: "m3",          value: "300+",          title: "Service Staff",          items: [
            "Expert",            "Dedicated",            "Fast"],
        },
      ]}
      title="By The Numbers"
      description="Our success is built on providing lasting value to every single one of our clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Great Experience",          quote: "Singh Auto made my purchase seamless and stress-free.",          name: "Sarah Johnson",          role: "CEO",          imageSrc: "http://img.b2bpic.net/free-photo/person-giving-order-customer-curbside-pickup_23-2149106362.jpg"},
        {
          id: "2",          title: "Highly Recommend",          quote: "The team was knowledgeable and helped me find the perfect car.",          name: "Michael Chen",          role: "CTO",          imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21369.jpg"},
        {
          id: "3",          title: "Top Quality",          quote: "Fantastic service and great vehicle selection.",          name: "Emily Rodriguez",          role: "Director",          imageSrc: "http://img.b2bpic.net/free-photo/family-summer-forest-by-open-trunk_1157-35904.jpg"},
        {
          id: "4",          title: "Very Happy",          quote: "Excellent support after the sale. Truly appreciate it.",          name: "David Kim",          role: "Manager",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg"},
        {
          id: "5",          title: "Perfect Choice",          quote: "My new SUV is exactly what I wanted. Thank you!",          name: "Linda Smith",          role: "Architect",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-bus-driver_23-2151589863.jpg"},
      ]}
      title="Trusted by Drivers Everywhere"
      description="See why so many families and professionals trust us for their vehicle needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="Get In Touch"
      title="Schedule a Test Drive"
      description="Found a vehicle you like? Get in touch with us to schedule an appointment today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Singh Auto"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Inventory",              href: "#inventory"},
            {
              label: "About",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
