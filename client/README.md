# Google Sheets form submissions

Both contact forms post their fields, a `formType` (`consultation` or `service`), and an ISO `submittedAt` timestamp to `VITE_GOOGLE_SCRIPT_URL`. The endpoint must be a deployed Google Apps Script web app whose `doPost(e)` parses the JSON in `e.postData.contents` and appends the values to the intended sheet.

Set `VITE_GOOGLE_SCRIPT_URL` in the local `.env` for development and in the hosting provider's build-time environment variables for production. Rebuild or restart the app after changing the value. The browser sends the request in `no-cors` mode, so it cannot inspect the script's response; verify the Apps Script deployment and sheet if a row is still missing.