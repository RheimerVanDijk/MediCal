export default class utils {
  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  textDate() {
    const date = new Date();
    const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = dayArray[date.getDay()];
    const dayNum = date.getDate();
    const month = monthArray[date.getMonth()];

    return `${day}, ${dayNum} ${month}`;
  }
}
