<<<<<<< HEAD
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_academy");
    }
    get(id){
        return http.get(`/academy/${id}`);
    }
    create(data){
        return http.post("/add_academy",data);
    }
    update(id,data){
        return http.put(`/academy/${id}`);
    }
=======
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_academy");
    }
    get(id){
        return http.get(`/academy/${id}`);
    }
    create(data){
        return http.post("/add_academy",data);
    }
    update(id,data){
        return http.put(`/academy/${id}`);
    }
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
}