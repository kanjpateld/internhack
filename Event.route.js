const router = require("express").Router();
// const express=require('express');
// const router=express.Router();
// const mongoose = require('mongoose');
const Event = require("../model/Event.model.js");
const User = require("../model/user.model.js");
// POST an event
router.post("/event", async (req, res) => {
  const {
    EventName,
    Venue,
    Participants_Limit,
    Date,
    Time,
    Description,
    Organizer
  } = req.body;

  try {
    const existingEvent = await Event.findOne({ EventName });
    if (existingEvent) {
      return res.status(400).json({ message: "Event already exists" });
    }

    const newEvent = new Event({
      EventName,
      Venue,
      Participants_Limit,
      Date,
      Time,
      Description,
      Organizer
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an event
router.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE an event
router.patch("/editEvent/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get('/getevents', async (req, res, next) => {
  try {
      // Fetch all student profiles from the database
      const events = await Event.find();

      // Return the fetched student profiles as JSON response
      res.status(200).json({ events });
  } catch (error) {
      console.error('Error fetching student information:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/getevents/:id', async (req, res, next) => {
  try {
      // Fetch all student profiles from the database
      
      const eventData = await Event.findById(
        req.params.id,
       );

      // Return the fetched student profiles as JSON response
      res.status(200).json({ eventData });
  } catch (error) {
      console.error('Error fetching student information:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});



// router.post('/event',(req,res,next)=>{
       
//     const event=new Event({
                    
//         EventName: req.body.EventName,
//         Venue:req.body.Venue,
//         Participants_Limit:req.body.Participants_Limit,
//         Date:req.body.Date,
//         Time:req.body.Time,
//         Description:req.body.Description
//     })

//     event.save()
//     .then(result=>{
//         res.status(200).json({
//             new_event:result
//         })
//     })
//     .catch(err=>{
//         res.status(500).json({
//             error:err
//         })
//     })

// })

// GET all events for a specific organizer
router.get("/myevents", async (req, res) => {
  try {
    // Assuming the organizer's ID is passed in the request headers
    const organizerId = req.headers.organizerid; // Adjust the header name as per your implementation

    // Find the organizer in the User collection
    const organizer = await User.findById(organizerId);
    if (!organizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }

    // Fetch events for the organizer from the Event collection
    const events = await Event.find({ organizer: organizerId });
    res.status(200).json(events);
    console.log(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
