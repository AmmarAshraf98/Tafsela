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
      <h2 className='text-primary-600 font-bold text-2xl md:mb-3'>{title}</h2>
      <strong>{description}</strong>
    </header>
  );
}
