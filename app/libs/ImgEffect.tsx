import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
};

const MAGNIFIER_SIZE = 130;
const ZOOM_LEVEL = 2;

const ImgEffect: React.FC<Props> = (props: Props) => {
  const [zoomable, setZoomable] = React.useState<boolean>(false);
  const [imageSize, setImageSize] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [position, setPosition] = React.useState<{
    x: number;
    y: number;
    mouseX: number;
    mouseY: number;
  }>({
    x: -100,
    y: -100,
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent) => {
    let element = e.currentTarget;
    let { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  return (
    <figure
      className="aspect-h-2 aspect-w-3 overflow-hidden rounded-xl bg-white shadow-md sm:col-span-5 lg:col-span-5 w-full h-96 relative"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <Image
        alt={props.alt}
        src={props.src}
        layout="fill"
        className="h-full w-full object-cover object-center relative overflow-hidden"
      />

      <div
        style={{
          backgroundPosition: `${position.x}px ${position.y}px`,
          backgroundImage: `url(${props.src})`,
          backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
          backgroundRepeat: "no-repeat",
          display: zoomable ? "block" : "none",
          top: `${position.mouseY}px`,
          left: `${position.mouseX}px`,
          width: `${MAGNIFIER_SIZE}px`,
          height: `${MAGNIFIER_SIZE}px`,
        }}
        className="z-50 border-2 rounded-full pointer-events-none absolute border-blue-500 opacity-0 sm:opacity-100"
      />
    </figure>
  );
};

export default React.memo(ImgEffect);
