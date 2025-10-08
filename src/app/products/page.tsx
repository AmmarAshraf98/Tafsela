import { Metadata } from "next";
import React from "react";
import SectionHeader from "./_Components/SectionHeader";

export const metadata: Metadata = {
  title: "Category",
};

function page() {
  return (
    <section>
      <SectionHeader
        title=' Our Luxury items'
        description=' Explore our exquisite collection of handcrafted items, each
          meticulously designed to add a touch of elegance and sophistication to
          your special day. Discover the perfect pieces to complement your
          unique style and make your moments truly unforgettable.'
      />

      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          ullam reiciendis tempore quo sunt quam quod rem quidem eum autem omnis
          earum, sit cum veniam architecto, aliquam pariatur eos natus?
        </p>
      </div>
    </section>
  );
}

export default page;
