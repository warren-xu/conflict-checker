const db = require("../../models");
const Project = db.projects;
const axios = require('axios');

const fs = require("fs");
const csv = require("fast-csv");

const upload = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload a CSV file!");
        }

        let projects = [];
        let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;

        fs.createReadStream(path)
            .pipe(csv.parse({ headers: true }))
            .on("error", (error) => {
                throw error.message;
            })
            .on("data", (row) => {
                projects.push(row);
            })
            .on("end", () => {
                Project.bulkCreate(projects)
                    .then(() => {
                        res.status(200).send({
                            message:
                                "Uploaded the file successfully: " + req.file.originalname,
                        });
                    })
                    .catch((error) => {
                        res.status(500).send({
                            message: "Failed to import data into database.",
                            error: error.message,
                        });
                    });
            });     
    }   catch(error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};

// Retrieve all projects from database
const getAddresses = async (req, res) => {
    try {
        const projects = await Project.findAll({
            attributes: ['address'],
        });

        const addresses = projects.map(project => project.address);

        res.json(addresses);
    } catch {
        console.error('Error retrieving addresses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

/* const delProjects = (req, res) => {
    Project.destroyAll()
        .then((formData) => {
            res.send(formData);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving projects",
            });
        });
} */

const geoCode = async(req, res) => {
    try {
        /* const addresses = req.body.addresses;
        // Check if addresses is defined and is an array
    if (!addresses) {
        
        throw new Error('Addresses must be an array');
      } */
        const addresses = req.body.addresses;
        console.log(req.body);
        const geocodePromises = addresses.map(address =>
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                  address: address,
                  key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
                },
            }).then(result => ({
                address,
                location: result.data.results[0].geometry.location
            }))
        );
        if(addresses.length > 0) {
            const results = await Promise.all(geocodePromises);
            res.json(results);
        }
        

    } catch (error) {
        console.error('Error during geocoding:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    upload,
    getAddresses,
    geoCode
};