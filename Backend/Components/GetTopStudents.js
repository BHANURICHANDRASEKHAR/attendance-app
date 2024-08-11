import Students from "../Database/Modals/Students.js";

const getTop5MostPresentStudents = async (req, res) => {
  const { section, branch, year } = req.query;

  try {
    const topStudents = await Students.aggregate([
      { $match: { section, branch, year } }, 
      { $unwind: "$StudentList" }, 
      { $sort: { "StudentList.totalAttendance": -1 } },
      { $limit: 5 },
      { $project: { 
        _id: 0,
        name: "$StudentList.name",
        totalAttendance: "$StudentList.totalAttendance"
      }}
    ]);

    res.status(200).json({data:topStudents,status:true});
  } catch (error) {
    console.error("Error fetching top 5 most present students:", error.message);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export default getTop5MostPresentStudents;
