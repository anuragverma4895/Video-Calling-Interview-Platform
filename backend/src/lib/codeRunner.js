export async function executeCode({ language, version, files }) {
  const pistonApiUrl = process.env.PISTON_API_URL || "https://emkc.org/api/v2/piston/execute";

  const response = await fetch(pistonApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ language, version, files }),
  });

  if (!response.ok) {
    throw new Error(`Piston API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
