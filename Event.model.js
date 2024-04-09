const mongoose = require("mongoose");
const User = require("../model/user.model.js");
const EventSchema = new mongoose.Schema(
  {
    EventName: { type: String, required: true},
    Venue: { type: String, required: true },
    Participants_Limit: { type: Number, required: true }, // Assuming Participants_Limit is a number
    Date: { type: Date, required: true }, // Assuming Date is a Date type
    Time: { type: String, required: true }, // Assuming Time is a String type
    Description: { type: String, required: true } ,// Assuming Description is a String type
    Organizer: {type: String}
  }
);

module.exports = mongoose.model("EUser", EventSchema);

// const mongoose = require("mongoose");

// const EventSchema = new mongoose.Schema(
//   {
//     EventName: { type: String, required: true },
//     Venue: { type: String, required: true },
//     Participants_Limit: { type: Number, required: true },
//     Date: { type: Date, required: true },
//     Time: { type: String, required: true },
//     Description: { type: String, required: true },
//     Organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
//   }
// );

// module.exports = mongoose.model("event", EventSchema);
