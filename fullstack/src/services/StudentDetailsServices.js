<<<<<<< HEAD
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_details")
    }
    get(id){
        return http.get(`/studentDetails/${id}`);
    }
    create(data){
        return http.post("/add_details",data);
    }
   
   
=======
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_details")
    }
    get(id){
        return http.get(`/studentDetails/${id}`);
    }
    create(data){
        return http.post("/add_details",data);
    }
   
   
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
}