"use client";

interface PageProps {
  params: {
    type: string;
  };
}
export default function Post(props: PageProps) {
  const id = props.params.type;

  return <>page type: {id}</>;
}
