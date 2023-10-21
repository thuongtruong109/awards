export default function handler(
  _req: any,
  res: { send: (arg0: string) => void }
) {
  res.send("User-agent: *\nDisallow: /\nDisallow: /cgi-bin/");
}
