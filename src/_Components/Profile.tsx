import Image from "next/image";

function Profile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className='relative group'>
      <Image
        src={src}
        alt={alt}
        width={28}
        height={28}
        className={`size-7 rounded-full ${className}`}
        referrerPolicy='no-referrer'
        unoptimized
      />
    </div>
  );
}

export default Profile;
