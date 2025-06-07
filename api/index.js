import { Hyperbeam } from 'hyperbeam';

const API_KEY = "sk_live_zzGSMfCLIzyTY9LAIpBO9RpDUzh-iLMU-PuCccrHCs0";  // <-- your key here

export default async function handler(req, res) {
  try {
    const hb = await Hyperbeam(API_KEY);
    const { url } = await hb.new();
    res.status(200).json({ url });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}
