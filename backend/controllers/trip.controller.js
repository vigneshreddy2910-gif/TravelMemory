const tripModel = require('../models/trip.model');

async function tripAdditionController(req, res) {
    console.log(req.body);

    try {
        const tripDetail = new tripModel.Trip({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience: req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured
        });

        const savedTrip = await tripDetail.save();

        console.log("Trip saved:", savedTrip);

        res.status(201).json({
            success: true,
            message: "Trip added successfully",
            data: savedTrip
        });

    } catch (error) {
        console.error("Trip Addition Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getTripDetailsController(req, res) {
    try {
        const trips = await tripModel.Trip.find({});
        res.status(200).json(trips);
    } catch (error) {
        console.error("Fetch Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getTripDetailsByIdController(req, res) {
    try {
        const trip = await tripModel.Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (error) {
        console.error("Find By ID Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    tripAdditionController,
    getTripDetailsController,
    getTripDetailsByIdController
};
