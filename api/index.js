import { Hyperbeam } from 'hyperbeam';

export default async function handler(req, res) {
  const hb = await Hyperbeam(process.env.HYPERBEAM_API_KEY);
  const { url } = await hb.new();
  res.status(200).json({ url });
}
