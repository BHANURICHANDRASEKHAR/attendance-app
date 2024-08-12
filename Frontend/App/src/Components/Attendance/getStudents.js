import axios from 'axios'
import { toastfail } from './send'
export default async function getStudents(user,setLoading,setStudents,setnotadded)
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
            
            setStudents(res.data.data.StudentList)
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