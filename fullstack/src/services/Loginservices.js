<<<<<<< HEAD
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_login")
    }
    
    create(data){
        return http.post("/add_login",data);
    }
   
   
}
=======
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_login")
    }
    
    create(data){
        return http.post("/add_login",data);
    }
   
   
}
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
