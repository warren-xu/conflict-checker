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
    mapsKey() {
        return http.get("/mapskey");
    }
    /* deleteAll() {
        return http.delete("/projects");
    } */
}
const myProjectDataService = new ProjectDataService();

export default myProjectDataService;