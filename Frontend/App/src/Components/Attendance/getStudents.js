import axios from 'axios'
import { toastfail } from './send'
export default async function getStudents(user,setLoading,setStudents)
{
    const {section,branch,year}=user[0]
    setLoading(true)
     try{
        const res=await axios.get('http://localhost:5000/getstudents',{
            params: {
                section:section,
                   branch:branch,
                   year:year, 
            }
        })
        if(res.data.status){
            
            setStudents(res.data.data.StudentList)
        }
     }
     catch(e)
     {
        toastfail('Intenal error Please try again')
     }

 setLoading(false)
}