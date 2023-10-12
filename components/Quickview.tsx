import FsLightbox from "fslightbox-react";
import { ReactNode, useState } from "react";

type Props = {
  btn: ReactNode;
  classBtn?: string;
  sources: string[];
  title?: string;
};

function Quickview(props: Props) {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggler(!toggler)}
        className={props.classBtn}
        title={props.title}
      >
        {props.btn}
      </button>
      <FsLightbox toggler={toggler} sources={props.sources} />
    </>
  );
}

export default Quickview;
