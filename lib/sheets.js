import { google } from "googleapis";

const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const auth = new google.auth.JWT(
  process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  null,
  (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  target
);
const sheets = google.sheets({ version: "v4", auth });

const formatSheet = ([rawHeaders, ...data]) => {
  // Convert the titles to snake case
  const headers = rawHeaders.map((s) => s.toLowerCase().replace(/\s/g, "_"));
  return data.map((row) => {
    const element = {};
    headers.forEach((header, i) => {
      element[header] = row[i] || null;
    });
    return element;
  });
};

export async function getRunningGroups() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Running Groups",
    });
    const sheet = formatSheet(response.data.values);
    return sheet;
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function getRunningMeetups() {
  try {
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
