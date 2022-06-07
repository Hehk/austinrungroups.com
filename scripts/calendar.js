// Creates and manages the google calendar
import "dotenv/config";
import { getRunningMeetups } from "../lib/sheets.js";

// Setting up google Calendar
import { google } from "googleapis";
const calendar = google.calendar({
  version: "v3",
  auth: new google.auth.JWT(
    process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
    null,
    (process.env.GOOGLE_CALENDAR_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/calendar"]
  ),
});

const meetups = await getRunningMeetups();
const fetchCalendar = async () => {};
const createEvent = (meetup) => {
  // TODO handle special meetups (like mt bonnell run)
  const reccurence = "RRULE:FREQ=WEEKLY;";
  const event = {
    kind: "calendar#event",
    // TODO The ID needs to be consistently produced, that way I can diff on update
    id: "",
  };
};
console.log(meetups[0]);
