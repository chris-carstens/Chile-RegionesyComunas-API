//GET Method
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const getRegions= async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "./regionsCommunes.json"));
        const regionsCommunes = JSON.parse(data);
        if (!regionsCommunes) {
            const err = new Error("Regions not found");
            err.status = 404;
            throw err;
        }
        
        regions = [];
        for (let i=0; i < regionsCommunes.length; i++){
            regions.push(
                {
                    "name": regionsCommunes[i]["name"],
                    "romanNumber": regionsCommunes[i]["romanNumber"],
                    "number": regionsCommunes[i]["number"],
                    "abbreviation": regionsCommunes[i]["abbreviation"]
                }
            )
        }
        res.json(regions);
    } catch (e) {
        next(e);
    }
};

const getRegionsCommunes= async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "./regionsCommunes.json"));
        const regionsCommunes = JSON.parse(data);
        if (!regionsCommunes) {
            const err = new Error("Regions not found");
            err.status = 404;
            throw err;
        }
        res.json(regionsCommunes);
    } catch (e) {
        next(e);
    }
};

const getRegionCommunes = async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "./regionsCommunes.json"));
        const regionsCommunes = JSON.parse(data);
        const regionCommunes = regionsCommunes.find(
            (region) => region.number === Number(req.params.id)
        );
        if (!regionCommunes) {
            const err = new Error("Region not found");
            err.status = 404;
            throw err;
        }
        res.json(regionCommunes);
    } catch (e) {
        next(e);
    }
};

router.route("/api/regions/").get(getRegions);
router.route("/api/regions-communes/").get(getRegionsCommunes);
router.route("/api/regions/:id/").get(getRegionCommunes);

module.exports = router;
