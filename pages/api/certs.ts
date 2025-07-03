import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/certificates.json";
import { ICertificate } from "@/types";

type ResponseData = {
  certificates: ICertificate[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData> | any
) {
  res.status(200).json({ certificates: data });
}
