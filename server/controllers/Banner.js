const {dbClient} = require('../database/dbConnection')
const uuid = require('uuid4')

const createBanner = async(req, res) =>{
    try{
        const {bannerDescription, bannerLink, bannerTimer} = req.body;
        const createBannerTable = `
            CREATE TABLE IF NOT EXISTS banner (
            bannerId VARCHAR(255) PRIMARY KEY,
            bannerDescription TEXT NOT NULL,
            bannerTimer INT NOT NULL,  -- Duration in seconds
            bannerLink VARCHAR(255),   -- URL link for the banner
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of creation
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Timestamp of last update
            );
        `;
        //const dropTable = `DROP TABLE IF EXISTS banner`;
        //const [rows] = await dbClient.promise().execute(createBannerTable);
        console.log("Banner table created successfully")
        const query = `INSERT INTO banner (bannerId, bannerDescription, bannerLink, bannerTimer) VALUES (?,?,?,?)`;
        const [rows] = await dbClient.promise().execute(query, [uuid(), bannerDescription, bannerLink, bannerTimer]);
        console.log("Banner created successfully")
        res.status(200).send("Banner created successfully")

    }catch(err){
        console.log("Error creating banner: ", err)
        res.status(500).send("Error creating banner")
    }
}

const getBanners = async(req, res) =>{
    try{
        const query = `SELECT * FROM banner`;
        const [rows] = await dbClient.promise().execute(query);
        console.log("Banners fetched successfully")
        res.status(200).json({message: "Banners fetched successfully", data: rows})
    }catch(err){
        console.log("Error getting banners: ", err)
        res.status(500).send("Error getting banners")
    }
}

const updateBanner = async(req,res) =>{
    try{
        const {bannerDescription, bannerLink, bannerTimer, bannerId} = req.body;
        const query = `UPDATE banner SET bannerDescription = ?, bannerLink = ?, bannerTimer = ? WHERE bannerId = ?`;
        const [rows] = await dbClient.promise().execute(query, [bannerDescription, bannerLink, bannerTimer, bannerId]);
        console.log("Banner updated successfully")
        res.status(200).send("Banner updated successfully")
    }catch(err){
        console.log("Error updating banner: ", err)
        res.status(500).send("Error updating banner")
    }
}

module.exports = {createBanner, updateBanner, getBanners}