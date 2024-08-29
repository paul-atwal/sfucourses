import React, { useMemo } from "react";
import { useEpg, Epg, Layout } from "planby";

const Schedule = ({ selectedCourses }) => {
  const channels = useMemo(() => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr"];
    return daysOfWeek.map((day, index) => ({
      logo: `https://via.placeholder.com/50?text=${day}`,
      uuid: `${day.toLowerCase()}-uuid`,
      title: day,
    }));
  }, []);

  const epg = useMemo(() => {
    let events = [];
    selectedCourses.forEach((course) => {
      const lectureTimes = JSON.parse(course.lecture_times.replace(/'/g, '"'));
      const { lecture_days, start_times, end_times } = lectureTimes;

      lecture_days.forEach((day, index) => {
        const dayUuid = `${day.toLowerCase()}-uuid`;
        events.push({
          channelUuid: dayUuid,
          description: `${course.course} - Lecture`,
          id: `${course.course}-${day}-${start_times[index]}`,
          since: `2024-08-28T${start_times[index]}:00`,
          till: `2024-08-28T${end_times[index]}:00`,
          title: course.course,
        });
      });
    });
    return events;
  }, [selectedCourses]);

  const {
    getEpgProps,
    getLayoutProps,
    onScrollToNow,
    onScrollLeft,
    onScrollRight,
  } = useEpg({
    epg,
    channels,
    startDate: "2024-08-28T08:00:00",
    endDate: "2024-08-28T20:00:00",
    dayWidth: 12 * 100,
  });

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ height: "600px", width: "1200px" }}>
        <Epg {...getEpgProps()}>
          <Layout {...getLayoutProps()} />
        </Epg>
      </div>
      <div>
        <button onClick={onScrollToNow}>Scroll to Now</button>
        <button onClick={onScrollLeft}>Scroll Left</button>
        <button onClick={onScrollRight}>Scroll Right</button>
      </div>
    </div>
  );
};

export default Schedule;
