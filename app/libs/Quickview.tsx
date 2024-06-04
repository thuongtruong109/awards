import FsLightbox from "fslightbox-react";
import Image from "next/legacy/image";
import React from "react";

type Props = {
  sources: string[];
  title?: string;
};

const Quickview: React.FC<Props> = (props: Props) => {
  const [toggler, setToggler] = React.useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setToggler(!toggler)}
        title={props.title}
        className="block cursor-pointer text-xl text-blue-500 group-hover:block md:hidden md:group-hover:block hover:scale-110"
      >
        <Image
          src="/assets/details/eye_preview.png"
          alt="Quick view"
          width={25}
          height={25}
          className="translate-y-1"
        />
      </button>
      <FsLightbox toggler={toggler} sources={props.sources} />
    </>
  );
};

export default React.memo(Quickview);
