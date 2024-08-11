import Students from "../Database/Modals/Students.js";

export default async function putPresentees(req, res, next) {
    try {
        const { section, year, branch, absentList } = req.body.data; // Expecting absentees as an array of roll numbers

        // Find the student record for the specified branch, year, and section
        const studentRecord = await Students.findOne({ branch, year, section });

        if (!studentRecord) {
            return res.status(404).json({ msg: "No record found for the specified class" });
        }

        // Update attendance for each student who is not in the absentees list
        let updated = false;
        studentRecord.StudentList.forEach(student => {
            if (!absentList.includes(student.id)) {
                student.totalAttendance += 1;
                updated = true; // Flag to indicate if any update has occurred
            }
        });

        // Only save if there were updates
        if (updated) {
            await studentRecord.save();
        }

        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        console.error("Error updating attendance:", error.message);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}
