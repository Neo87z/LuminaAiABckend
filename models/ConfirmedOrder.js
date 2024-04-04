const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Order = new Schema({
    OrderID: {
        type: String
    },
    PaymentType: {
        type: String
    },
    PaymentStatus: {
        type: String
    },
    OrderToMake: [{
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
        }, MozerallCheeseSide: {
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

    }],
    OrderDetails: [{
        OrderType: {
            type: String
        },
        WhenToDeliver: {
            type: String
        },
        DeliverDate: {
            type: String
        },
        DeliverTime: {
            type: String
        },
        PreferdStrore: {
            type: String
        },
        Address: {
            type: String
        },
        CartID: {
            type: String
        },
        PlacedTime:{
            type: String
        },
        PlacedDate:{
            type: String
        },
        OrderProgress:{
            type: String
        }

    }]
});

module.exports = mongoose.model('order', Order);