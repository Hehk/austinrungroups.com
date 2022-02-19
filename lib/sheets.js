import { google } from "googleapis";

const formatSheet = ([rawHeaders, ...data]) => {
  // Convert the titles to snake case
  const headers = rawHeaders.map((s) => s.toLowerCase().replaceAll(" ", "_"));
  return data.map((row) => {
    const element = {};
    headers.forEach((header, i) => {
      element[header] = row[i];
    });
    return element;
  });
};

export async function getRunningMeetups() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Meetups",
    });
    const sheet = formatSheet(response.data.values);
    return sheet;
  } catch (err) {
    console.log(err);
  }
  return [];
}
