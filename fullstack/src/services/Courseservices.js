<<<<<<< HEAD
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view");
    }
    get(id){
        return http.get(`/course/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }

   
=======
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view");
    }
    get(id){
        return http.get(`/course/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }

   
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
}