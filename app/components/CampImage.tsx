import Image from "next/image";

type CampImageProps = {
  className?: string | undefined;
};

const CampImage = ({ className }: CampImageProps) => {
  return (
    <Image
      src="/camp.svg"
      alt="camp"
      width={50}
      height={50}
      className={className}
    />
  );
};
export default CampImage;
