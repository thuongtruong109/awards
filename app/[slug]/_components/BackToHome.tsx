"use client";

import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

const BackToHome: FC = () => {
  const router = useRouter();
  const onBackToHome = () => router.push("/");

  return (
    <button
        type="button"
        onClick={onBackToHome}
        className="h-fit w-fit cursor-pointer rounded-md border border-slate-200 bg-slate-50 hover:bg-white px-3 py-1.5 hover:border-blue-300 flex items-center space-x-1 text-sm"
    >
        <Image
          src="/assets/icons/details/back_to_home.png"
          alt="Back to home"
          width={20}
          height={20}
        />
        <span className="inline-flex">Back to home</span>
    </button>
  );
}

export default memo(BackToHome)