import React from "react";

export default function StoreHours() {
  const pageData = {
    title: "Loading content",
    description: "...",
    image: require("../../assets/img/test_image_2.png"),
  };

  const hours = [
    { day: "Sunday", hours: ["8AM", "7PM"] },
    { day: "Monday", hours: ["7AM", "8PM"] },
    { day: "Tuesday", hours: ["7AM", "8PM"] },
    { day: "Wednesday", hours: ["7AM", "8PM"] },
    { day: "Thursday", hours: ["7AM", "8PM"] },
    { day: "Friday", hours: ["7AM", "8PM"] },
    { day: "Saturday", hours: ["7AM", "8PM"] },
  ];

  const holidayHours = [
    { day: "Thanksgiving", hours: ["AM", "PM"], date: "Nov 24" },
    { day: "Christmas Eve", hours: ["AM", "PM"], date: "Dec 24" },
    { day: "Christmas Day", hours: ["AM", "PM"], date: "Dec 25" },
    { day: "New Years Eve", hours: ["AM", "PM"], date: "Dec 31" },
    { day: "New Years", hours: ["AM", "PM"], date: "Jan 1" },
  ];

  const data = {
    address: "665 W Lancaster Rd, Orlando, FL 32809",
    phone: "407-582-0140",
    email: "plazatropical665@gmail.com",
  };

  return (
    <div className="store-hours container-two">
      <section>
        <h2>Store Hours</h2>
        <table className="reg-hours">
          {hours.map((day) => {
            return (
              <tr>
                <td>{day.day}</td>
                <td>
                  {day.hours[0]} - {day.hours[1]}
                </td>
              </tr>
            );
          })}
        </table>
      </section>
      <section>
        <h2>Holiday Hours</h2>
        <table className="holiday-hours">
          {holidayHours.map((day) => {
            return (
              <tr>
                <td>{day.date}</td>
                <td>{day.day}</td>
                <td>
                  {day.hours[0]} - {day.hours[1]}
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
}
