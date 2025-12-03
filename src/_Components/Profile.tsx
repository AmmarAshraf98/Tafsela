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
    <div>
      <img
        src={src}
        alt={alt}
        className={`size-7 rounded-full ${className}`}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}

export default Profile;
