export const snakeCase = (s) => {
  return s.toLowerCase().replace(/\s/g, "_");
};

export const meetupId = (meetup) => {
  return snakeCase(
    meetup.running_group + "_" + meetup.day_of_the_week + "_" + meetup.time
  );
};
