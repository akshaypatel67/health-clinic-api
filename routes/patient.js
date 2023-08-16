const express = require("express");
const { handleNewRecord, handleSearchByName, handleSearchByDOB, handleUpdateContact, handleDeleteRecord, handleReadRecord, handleAddHistory } = require("../controllers/patient");

const router = express.Router();

router.post("/", handleNewRecord);

router.get("/searchByName/:name", handleSearchByName);

router.get("/readRecord/:id", handleReadRecord);

router.get("/searchByDOB/:dob", handleSearchByDOB);

router.patch("/updateContact/:id", handleUpdateContact);

router.delete("/:id", handleDeleteRecord);

router.put("/addHistory/:id", handleAddHistory);

// router.get("/getall", handleGetURL);

// router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;