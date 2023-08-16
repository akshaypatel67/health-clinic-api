const Patient = require("../models/patient");

async function handleNewRecord(req, res) {
    const body = req.body;

    // if(!body.url) {
    //     return res.status(400).json({
    //         error: "url is required",
    //     });
    // }
    console.log(body);

    await Patient.create({
        name: body.name,
        dob: body.dob,
        gender: body.gender,
        contact: body.contact,
        history: [],
    });

    return res.json({
        message: "record created",
    });
}

async function handleSearchByName(req, res) {
    const name = req.params.name;

    const patientList = await Patient.find({ name: name });

    res.status(200).json(patientList);
}

async function handleSearchByDOB(req, res) {
    const dob = req.params.dob;

    const patientList = await Patient.find({ dob: dob });

    res.status(200).json(patientList);
}

async function handleUpdateContact(req, res) {
    const id = req.params.id;
    const body = req.body;
    
    const patient = await Patient.findByIdAndUpdate(id, {
        contact: body.contact,
    });
    // console.log(patient);

    res.status(200).json({
        message: "contact updated"
    });
}

async function handleDeleteRecord(req, res) {
    const id = req.params.id;
    
    const patient = await Patient.findByIdAndDelete(id);
    // console.log(patient);

    res.status(200).json({
        message: "record deleted"
    });
}

async function handleAddHistory(req, res) {
    const id = req.params.id;
    const body = req.body;

    console.log(body.detials)
    
    const patient = await Patient.findById(id);
    await patient.updateOne({
        $push: {
            history: {
                details: body.details,
            },
        }
    });
    // console.log(patient);

    res.status(200).json({
        message: "medical history added"
    });
}

async function handleReadRecord(req, res) {
    const id = req.params.id;
    
    const history = await Patient.findById(id).select("history").select("history");
    console.log(history);

    res.status(200).json({
        history
    });
}

module.exports = {
    handleNewRecord,
    handleSearchByName,
    handleSearchByDOB,
    handleUpdateContact,
    handleDeleteRecord,
    handleReadRecord,
    handleAddHistory
}