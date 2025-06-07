import pkg from 'hyperbeam';
const { Hyperbeam } = pkg;

const API_KEY = "sk_live_zzGSMfCLIzyTY9LAIpBO9RpDUzh-iLMU-PuCccrHCs0";

export default async function handler(req, res) {
  try {
    const hb = await Hyperbeam(API_KEY);
    const { url } = await hb.new();
    res.status(200).json({ url });
  } catch (err) {
    console.error("API error details:", err);
    res.status(500).json({ error: "Something went wrong.", details: err.message || err.toString() });
  }
}
