import axios from "axios";
import { toastfail } from "../Attendance/send";
import { LeaderBoardSliceActions } from "../../Store/LeaderBoard";
import {BarGarphSliceActions} from '../../Store/bargraph'
export default async function get_top_Students(userdata,dispatch,setloading,link)

{
 
    const { branch,year,section}=userdata
   setloading(true)
  try{
    const res=await axios.get(`https://attendance-app-0kvp.onrender.com/${link}`,{
        params:{
            branch,year,section
        }
      })
      if(res.data.status)
      {
        
        if(link=='1weekabsentees')
        {
          dispatch(BarGarphSliceActions.setBarGraph(res.data.data))

        }
        else{
          dispatch(LeaderBoardSliceActions.setLeaderBoard(res.data.data))

        }
        
      }
  }
  catch(e)
  {
    toastfail('Error getting students')
  }
  setloading(false)
}