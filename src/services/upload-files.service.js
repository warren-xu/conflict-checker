import http from "../http-common";

class ProjectDataService {
    upload(formData) {
        return http.post("/upload", formData, {headers: {
            "Content-Type": "multipart/form-data"
        }
        });
    }
    getAll() {
        return http.get("/projects");
    }
    geocode(addresses) {
        return http.post("/geocode", {addresses}, {headers: {
            "Content-Type": "application/json"
        }
        });
    }
    /* deleteAll() {
        return http.delete("/projects");
    } */
}

export default new ProjectDataService();