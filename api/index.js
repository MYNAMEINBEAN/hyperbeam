import { Hyperbeam } from 'hyperbeam';

export default async function handler(req, res) {
  try {
    const hb = await Hyperbeam(process.env.HYPERBEAM_API_KEY);
    const { url } = await hb.new();
    res.status(200).json({ url });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}
