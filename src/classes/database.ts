import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.Appointments");

class DB {
  constructor() {
    // const create_appointment_table =
    //   "CREATE TABLE IF NOT EXISTS appointment (id INTEGER PRIMARY KEY AUTOINCREMENT, from VARCHAR(45), to VARCHAR(45), location VARCHAR(45), patient VARCHAR(45), notes LONGTEXT)";
    // try {
    //   db.prepare(create_appointment_table).run();
    // } catch (error) {
    //   throw error;
    // }

    // Check if the items table exists if not create it
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS `appointment` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `from` VARCHAR(45), `to` VARCHAR(45), `location` VARCHAR(45), `patient` VARCHAR(45), `notes` LONGTEXT)"
      );
    });
    console.log("construct");
  }

  async addAppointment(
    from: string,
    to: string,
    location: string,
    patient: string
  ) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO `appointment` (`from`, `to`, `location`, `patient`) VALUES (?,?,?,?)",
          [from, to, location, patient],
          (_, { rows }) => {
            resolve(true);
          },
          (t, error): any => {
            resolve(false);
          }
        );
      });
    });

    // return new Promise((resolve, reject) => {
    //   db.transaction((tx) => {
    //     tx.executeSql("SELECT * FROM appointment", [], (_, { rows }) => {
    //       console.log(rows);
    //       resolve(true);
    //     });
    //   });
    // });
  }

  async getAllAppointments(): Promise<object[]> {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM appointment ORDER BY `from`",
          [],
          (_, { rows }) => {
            const length = rows.length;
            let newArray = [];

            for (let i = 0; i < length; i++) {
              newArray.push(rows.item(i));
            }

            resolve(newArray);
          }
        );
      });
    });
  }

  async deleteAllAppointments(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM appointment",
          [],
          (_, res) => {
            resolve(true);
          },
          (t, error): any => {
            console.log(error);
          }
        );
      });
    });
  }
}

export default DB;
