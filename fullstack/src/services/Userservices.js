<<<<<<< HEAD
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/display");
    }
    get(id){
        return http.get(`/user/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }
    update(id,data){
        return http.put(`/user/${id}`);
    }
   
}
=======
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/display");
    }
    get(id){
        return http.get(`/user/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }
    update(id,data){
        return http.put(`/user/${id}`);
    }
   
}
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
