export async function submitToGoogleSheet(formType, data) {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    throw new Error("VITE_GOOGLE_SCRIPT_URL is not configured");
  }

  await fetch(scriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify({
      ...data,
      formType,
      submittedAt: new Date().toISOString(),
    }),
  });
}
