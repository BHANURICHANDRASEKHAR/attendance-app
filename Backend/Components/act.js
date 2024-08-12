// import AbsentList from "../Database/Modals/AbsentList.js";

// const getBottom14Records = async (req, res) => {
//   const { branch, section, year } = req.query;
//   try {
//     // Fetch records, sort by absences in ascending order, and limit to bottom 14
//     const bottomRecords = await AbsentList.aggregate([
//       { $match: { section, branch, year } }, // Filter by section, branch, and year
//       { $project: {
//         date: 1,
//         shift: 1,
//         section: 1,
//         branch: 1,
//         absencesCount: { $size: { $ifNull: ["$absents", []] } } // Count the number of absences
//       }},
//       { $sort: { absencesCount: 1 } }, // Sort by number of absences in ascending order
//       { $limit: 14 }, // Limit to bottom 14 (will return fewer if not enough records)
//       { $project: {
//         _id: 0,
//         date: 1,
//         shift: 1,
//         section: 1,
//         branch: 1,
//         absences: "$absencesCount" // Rename for clarity
//       }}
//     ]);

//     // Check if fewer than 14 records are returned
//     if (bottomRecords.length === 0) {
//       return res.status(404).json({ msg: "No records found" });
//     }

//     res.status(200).json({data:bottomRecords,status:true});
//   } catch (error) {
//     console.error("Error fetching bottom 14 records:", error.message);
//     res.status(500).json({ msg: "Server error", error: error.message });
//   }
// };

// export default getBottom14Records;

// const {branch,section,year}=req.query;
// { $match: { section, branch, year } }, 
import AbsentList from '../Database/Modals/AbsentList.js';

const getAverageAbsenteesPerDay = async (req, res) => {
  const { branch, section, year } = req.query;

  try {
    // Calculate the date for 14 days ago
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const fourteenDaysAgoDate = fourteenDaysAgo.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD

    const averageAbsentees = await AbsentList.aggregate([
      // Match records based on the provided query parameters and date range
      { $match: { section, branch, year, date: { $gte: fourteenDaysAgoDate } } },
      {
        $group: {
          _id: "$date",  // Group by date
          totalAbsentees: { $sum: { $size: "$absents" } },  // Total absentees per day
          count: { $sum: 1 }  // Count the number of records per day
        }
      },
      {
        $project: {
          _id: 0,
          date: "$_id",  // Rename _id to date
          averageAbsentees: { $divide: ["$totalAbsentees", "$count"] }  // Calculate average
        }
      },
     
      {
        $limit: 14  // Limit to the most recent 14 records
      }
    ]);

    res.status(200).json({data:averageAbsentees,status:true});
  } catch (error) {
    console.error("Error fetching average absentees per day:", error.message);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export default getAverageAbsenteesPerDay;
