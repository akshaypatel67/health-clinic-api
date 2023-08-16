const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
        // patient_id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true
        // },
        name: {
            type: String,
            required: [true, "username is required"],
        },
        dob: {
            type: String,
            required: [true, "date of birth is required"],
        },
        gender: {
            type: String,
            required: [true, "password is required"],
        },
        contact: {
            type: String,
            required: [true, "contact no. is required"],
        },
        history: [{ 
            date_time: {
                type: Date,
                default: new Date(),
            },
            details: {
                type: String,
                required: [true, "details required"],
            }
        }],
    },
    {
        timestamps: true,
    }
);

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;