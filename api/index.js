import { Hyperbeam } from 'hyperbeam';

const API_KEY = "sk_live_zzGSMfCLIzyTY9LAIpBO9RpDUzh-iLMU-PuCccrHCs0"; // Your key

export default async function handler(req, res) {
  try {
    const hb = await Hyperbeam(API_KEY);
    // Just return success without calling .new()
    res.status(200).json({ message: "Hyperbeam instance created successfully" });
  } catch (err) {
    console.error("API error details:", err);
    res.status(500).json({ error: "Something went wrong.", details: err.message || err.toString() });
  }
}
