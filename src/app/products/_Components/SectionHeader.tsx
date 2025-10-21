import React from "react";

export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className='md:mb-8 mb-4 border-b pb-4 border-primary-500/10'>
      <h3 className='text-primary-600 font-bold text-xl md:mb-3'>{title}</h3>
      <strong className='text-xs md:text-base'>{description}</strong>
    </header>
  );
}
