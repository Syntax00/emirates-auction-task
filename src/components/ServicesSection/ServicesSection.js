import React from "react";

import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";
import SectionTitle from "../UIElements/SectionTitle/SectionTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

import styles from "./ServicesSection.module.scss";

const ServicesSection = () => (
  <section className={styles["services-container"]}>
    <WidthLimiter>
      <SectionTitle
        title="Why use our services?"
        description="We operates  24 hour/7 day-a-week telephone, email & remote support services that is staffed to handle any issue or question"
      />

      <div className={styles["services"]}>
        <ServiceCard
          icon="file-text-o"
          title="Easy Process"
          description="We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free."
        />
        <ServiceCard
          icon="star-o"
          title="Get The Best Return"
          description="Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our valuation tools for a better price when selling your car."
        />
        <ServiceCard
          icon="clock-o"
          title="Dedicated Team"
          description="Our seller experts are here to help you at every step of the way via email, phone, or chat all the week days! They help you find real buyers for your car and finalize your deal fast."
        />
      </div>
    </WidthLimiter>
  </section>
);

export default ServicesSection;
