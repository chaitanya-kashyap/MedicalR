import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    const patients = await db.collection("patients").find({}).toArray();

    res.json(patients);
}