import { Metadata } from "next";
import React from "react";
import ab3 from "../../../public/about/ab7.jpeg";
import ab2 from "../../../public/about/wedding contract.jpeg";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

function page() {
  return (
    <div className='grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center'>
      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-primary-400 font-medium'>
          Welcome to Tafsela
        </h1>

        <div className='space-y-8'>
          <p>
            While the gown sets the scene, it&apos;s the intimate touches that
            create your legacy. We believe true luxury is found in the
            confluence of nature&apos;s beauty and impeccable design.
          </p>
          <p>
            Our ornate mirrors are not just signage; they are beautiful
            reflections of your shared future, scripted to welcome your guests.
            We add an unexpected layer of artistry with our custom epoxy resin
            pieces—unique trays and cups that serve as dazzling keepsakes or
            elegant displays for your celebration.
          </p>
          <p>
            Our custom ring holders are more than just a base; they are
            miniature treasures designed to protect the most profound promise.
            Explore our thoughtful collection of gifts and accessories—pieces
            that feel both timeless and deeply personal. It&apos;s a joyful
            return to simple pleasures, ensuring every detail of your
            celebration is as perfect as the moment you say, &quot;I do.&quot;
          </p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          src={ab2}
          alt='Family sitting around a fire pit in front of cabin'
        />
      </div>

      <div className='col-span-2'>
        <Image src={ab3} alt='Family that manages The Wild Oasis' />
      </div>

      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-primary-400 font-medium'>
          Managed by our family since 2018
        </h1>

        <div className='space-y-8'>
          <p>
            since 2018, our brand was born from a passion for detail and a
            desire to elevate wedding day accessories from simple items to
            treasured heirlooms. We started with a vision of blending timeless
            elegance (like the shimmer of a perfectly tailored dress) with
            modern artistry (like the unique flow of hand-poured epoxy resin).
          </p>
          <p>
            Over the years, we&apos;ve nurtured this vision with meticulous care
            and dedication. Here, you&apos;re not just a customer; you&apos;re
            the centerpiece of a creation process dedicated to your unique love
            story. We ensure every item—from the sweep of your gown&apos;s
            fabric to the reflective surface of your personalized welcome
            mirror—is a testament to your commitment. Join us at [Your Site
            Name], where bespoke design meets true devotion, and every piece is
            crafted to bring your ultimate wedding vision home.
          </p>

          <div>
            <Link
              href='/category'
              // className='inline-block mt-4 bg-primary-200 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-primary-600 transition-all'
              className='text-primary-200 bg-primary-600 cursor-pointer px-8 py-5 transition-all duration-300 hover:text-primary-900 hover:bg-primary-400'
            >
              Explore our luxury category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
