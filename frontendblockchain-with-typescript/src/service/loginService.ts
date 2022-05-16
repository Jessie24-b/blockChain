import axios from "axios";
import {User} from '../types'

 export default function getUsers ()  {   

      const response=  axios.get<User>('hhtp').then(response => response.data)  
      return response
}