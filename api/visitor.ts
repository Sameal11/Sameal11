export default async function handler(req: any, res: any) {
  const API_KEY = process.env.COUNTER_API_KEY;

  try {
    const response = await fetch(
      "https://api.counterapi.dev/v2/page-count/first-counter-2872/up",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ count: data.count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch counter" });
  }
}
