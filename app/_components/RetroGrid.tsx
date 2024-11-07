import React from 'react'

const RetroGrid = () => {
  return (
    <div
        className="pointer-events-none fixed top-0 left-0 h-screen w-screen overflow-hidden [perspective:500px] dark:opacity-30" style={{ zIndex: -1 }}
    >
        <div className="absolute inset-0 [transform:rotateX(20deg)]">
        <div
            className="animate-grid inset-0 -ml-[50%] bg-repeat [background-image:linear-gradient(to_right,hsl(214.3_31.8%_91.4%)_1px,transparent_0),linear-gradient(to_bottom,hsl(214.3_31.8%_91.4%)_1px,transparent_0)] [background-size:120px_120px] [height:700vh] [transform-origin:100%_0_0] [width:600vw]"
        />
        </div>

        <div className="from-background absolute inset-0 bg-gradient-to-t to-transparent to-90%" />
    </div>
  )
}

export default RetroGrid