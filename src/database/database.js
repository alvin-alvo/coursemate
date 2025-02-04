import { MongoClient } from "mongodb";
import Course from './course.js'

export default class Database {
  // constructor() {
  //     if(this.client === null) {
  //         this.connect();
  //     }
  // }

  /** @type {MongoClient} */
  static client = null;

  /** @type {Collection} */
  static collection = null;

  async connect() {
    try {
      if (Database.client != null) return true;
      const uri = process.env.MONGO_URI;
      Database.client = new MongoClient(uri);

      console.log("Connecting to database...");

      await Database.client.connect();

      console.log("Connected to database!");

      const db = Database.client.db("coursemate");
      Database.collection = db.collection("entries");
      return true;
    } catch (err) {
      console.error("Error connecting to database: ", err);
      return false;
    }
  }

  course = new Course();

  async createCourse({
    courseId,
    courseName,
    courseDuration,
}) {
    
}

async deleteCourse({
    courseId,
}){}
}
