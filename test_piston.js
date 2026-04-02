const PISTON_API = "https://emkc.org/api/v2/piston";
const languageConfig = { language: "python", version: "3.10.0" };
const code = `print("Hello World")`;
fetch(`${PISTON_API}/execute`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    language: languageConfig.language,
    version: languageConfig.version,
    files: [{ content: code }],
  }),
}).then(res => {
  console.log("Status:", res.status);
  return res.text();
}).then(text => {
  console.log("Response:", text);
}).catch(err => console.error(err));
