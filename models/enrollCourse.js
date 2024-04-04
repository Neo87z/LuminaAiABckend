const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CourseDetails = new Schema({
    CourseID: {
        type: String
    },
    StudentName: {
        type: String
    },
    StudenTID: {
        type: String
    },
    EnrollStatus: {
        type: String
    },
    EnrollDate: {
        type: String
    },
    CompletedDate: {
        type: String
    },
    CourseName: {
        type: String
    },
    MozerallCheeseSide : {
        type : String
    },
    GoatCheeseSide : {
        type : String
    },
    FetaCheeseSide : {
        type : String
    },
    HamSide : {
        type : String
    },
    SalamiSide : {
        type : String
    },
    CrumbleBeaconSide : {
        type : String
    },
    SlicedBeaconSide : {
        type : String
    },
    PeporoniSide : {
        type : String
    },
    ItalianSausgeSide : {
        type : String
    },
    GoundBeefSide : {
        type : String
    },
    SeasonedChickenSide : {
        type : String
    },
    FreshMushRoomsSide : {
        type : String
    },
    RedOnionsSide : {
        type : String
    },
    GreenPepperSide : {
        type : String
    },
    TomatoeSide : {
        type : String
    },
    OlivesSide : {
        type : String
    },
    HotPepperSide : {
        type : String
    },
    JalapenoSide : {
        type : String
    },
    PineAppleSide : {
        type : String
    },
    BBqsauceSide : {
        type : String
    },
    DonairSauceSide : {
        type : String
    },
    PizzaSauceSide : {
        type : String
    },
    ChorizoSide : {
        type : String
    },
    FianlOrderPrice : {
        type : String
    }
    
});

module.exports = mongoose.model('enrolldetail', CourseDetails);