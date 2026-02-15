import fs from 'fs';
import path from 'path';
import os from 'os';

export default async function handler(req: any, res: any) {
  // Use os.tmpdir() for cross-platform compatibility (works on Windows & Vercel)
  const dbPath = path.join(os.tmpdir(), 'visitor_count.json');

  try {
    let count = 0;

    // Check if file exists and read current count
    if (fs.existsSync(dbPath)) {
      try {
        const data = fs.readFileSync(dbPath, 'utf-8');
        const json = JSON.parse(data);
        if (typeof json.count === 'number') {
          count = json.count;
        }
      } catch (e) {
        // If file is corrupt, reset to 0
        console.warn('Failed to parse counter file, resetting to 0');
      }
    }

    // Increment count
    count++;

    // Write updated count
    fs.writeFileSync(dbPath, JSON.stringify({ count }));

    res.status(200).json({ count });
  } catch (error) {
    console.error("Counter error:", error);
    res.status(500).json({ error: "Failed to update visitor count" });
  }
}
