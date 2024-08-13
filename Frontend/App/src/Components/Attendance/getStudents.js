import axios from 'axios'
import { toastfail } from './send'
import { StudentSliceActions } from '../../Store/StudentsData'
export default async function getStudents(user,setLoading,dispatch,setnotadded)
{
    const {section,branch,year}=user[0]
    setLoading(true)
     try{
        const res=await axios.get('https://attendance-app-0kvp.onrender.com/getstudents',{
            params: {
                section:section,
                   branch:branch,
                   year:year, 
            }
        })
        if(res.data.status){
         
            dispatch(StudentSliceActions.setStudents(res.data.data))
        }
        else{
            setnotadded(true)
        }
     }
     catch(e)
     {
        toastfail('Intenal error Please try again')
     }

 setLoading(false)
}