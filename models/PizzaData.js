const mongoose = require("mongoose");
const { bool } = require("sharp");
const Schema = mongoose.Schema;

let pizzadata = new Schema({
    PizzaID: {
        type: String
    },
    PizzaName: {
        type: String
    },
    SelectedPizzaSize: {
        type: String
    },
    PizzaCount: {
        type: String
    },
    ImageURL: {
        type: String
    },
    Description: {
        type: String
    },
    SoloPrice: {
        type: String
    },
    SmallPrice: {
        type: String
    },
    MediumPrice: {
        type: String
    },
    LargePrice: {
        type: String
    },
    JumboPrice: {
        type: String
    },
    CrustType: {
        type: String
    },
    MozerallCheese: {
        type: Boolean
    },
    MozerallCheese30: {
        type: Boolean
    },
    MozerallCheese50: {
        type: Boolean
    },
    MozerallCheese100: {
        type: Boolean
    },
    GoatCheese: {
        type: Boolean
    },
    FetaCheese: {
        type: Boolean
    },
    Ham: {
        type: Boolean
    },
    Salami: {
        type: Boolean
    },
    CrumbleBeacon: {
        type: Boolean
    },
    SlicedBeacon: {
        type: Boolean
    },
    Peporoni: {
        type: Boolean
    },
    ItalianSausge: {
        type: Boolean
    },
    GoundBeef: {
        type: Boolean
    },
    SeasonedChicken: {
        type: Boolean
    },
    FreshMushRooms: {
        type: Boolean
    },
    RedOnions: {
        type: Boolean
    },
    GreenPepper: {
        type: Boolean
    },
    Tomatoe: {
        type: Boolean
    },
    Olives: {
        type: Boolean
    },
    HotPepper: {
        type: Boolean
    },
    Jalapeno: {
        type: Boolean
    },
    PineApple: {
        type: Boolean
    },
    BBqsauce: {
        type: Boolean
    },
    DonairSauce: {
        type: Boolean
    },
    PizzaSauce: {
        type: Boolean
    },
    Chorizo: {
        type: Boolean
    },
    MozerallCheeseSide: {
        type: String
    },
    GoatCheeseSide: {
        type: String
    },
    FetaCheeseSide: {
        type: String
    },
    HamSide: {
        type: String
    },
    SalamiSide: {
        type: String
    },
    CrumbleBeaconSide: {
        type: String
    },
    SlicedBeaconSide: {
        type: String
    },
    PeporoniSide: {
        type: String
    },
    ItalianSausgeSide: {
        type: String
    },
    GoundBeefSide: {
        type: String
    },
    SeasonedChickenSide: {
        type: String
    },
    FreshMushRoomsSide: {
        type: String
    },
    RedOnionsSide: {
        type: String
    },
    GreenPepperSide: {
        type: String
    },
    TomatoeSide: {
        type: String
    },
    OlivesSide: {
        type: String
    },
    HotPepperSide: {
        type: String
    },
    JalapenoSide: {
        type: String
    },
    PineAppleSide: {
        type: String
    },
    BBqsauceSide: {
        type: String
    },
    DonairSauceSide: {
        type: String
    },
    PizzaSauceSide: {
        type: String
    },
    ChorizoSide: {
        type: String
    },
    FianlOrderPrice: {
        type: String
    },
    OncePizzaPrice: {
        type: String
    }



});

module.exports = mongoose.model('pizzadata', pizzadata);