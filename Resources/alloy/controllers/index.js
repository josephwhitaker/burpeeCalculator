function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Calories to Burpees",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "25dp",
        left: "10dp",
        text: "Calories:",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.inputKCal = Ti.UI.createTextField({
        top: "60dp",
        left: "10dp",
        width: "80dp",
        id: "inputKCal",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.__alloyId2.add($.__views.inputKCal);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "125dp",
        left: "10dp",
        text: "Burpees:",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.outputBurpees = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "160dp",
        left: "10dp",
        id: "outputBurpees"
    });
    $.__views.__alloyId2.add($.__views.outputBurpees);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Calories to Burpees",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Configure",
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "10dp",
        left: "10dp",
        text: "Height in inches:",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.inputHeight = Ti.UI.createTextField({
        top: "35dp",
        left: "10dp",
        width: "80dp",
        id: "inputHeight",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.__alloyId6.add($.__views.inputHeight);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "65dp",
        left: "10dp",
        text: "Weight in pounds:",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.inputWeight = Ti.UI.createTextField({
        top: "90dp",
        left: "10dp",
        width: "80dp",
        id: "inputWeight",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.__alloyId6.add($.__views.inputWeight);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "120dp",
        left: "10dp",
        text: "Jump Height per Burpee (Avg):",
        id: "__alloyId9"
    });
    $.__views.__alloyId6.add($.__views.__alloyId9);
    $.__views.inputJumpHeight = Ti.UI.createTextField({
        top: "145dp",
        left: "10dp",
        width: "80dp",
        id: "inputJumpHeight",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.__alloyId6.add($.__views.inputJumpHeight);
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Configure",
        icon: "KS_nav_views.png",
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    null !== Titanium.App.Properties.getDouble("userHeight") && $.inputHeight.setText(Titanium.App.Properties.getDouble("userHeight"));
    null !== Titanium.App.Properties.getDouble("userWeight") && $.inputWeight.setText(Titanium.App.Properties.getDouble("userWeight"));
    null !== Titanium.App.Properties.getDouble("userJHeight") && $.inputJumpHeight.setText(Titanium.App.Properties.getDouble("userJHeight"));
    $.index.open();
    $.inputHeight.addEventListener("change", function(e) {
        Titanium.App.Properties.setDouble("userHeight", e.value);
    });
    $.inputWeight.addEventListener("change", function(e) {
        Titanium.App.Properties.setDouble("userWeight", e.value);
    });
    $.inputJumpHeight.addEventListener("change", function(e) {
        Titanium.App.Properties.setDouble("userJHeight", e.value);
    });
    $.inputKCal.addEventListener("change", function(e) {
        var userHeight = .0254 * Titanium.App.Properties.getDouble("userHeight"), userWeight = .453592 * Titanium.App.Properties.getDouble("userWeight"), userJHeight = .0254 * Titanium.App.Properties.getDouble("userJHeight"), calories = e.value;
        if (null !== userHeight && null !== userWeight && null !== userJHeight && null !== e.value) {
            var work = userWeight * (userHeight + userJHeight), kCal = 426.4, calPerBurpee = work / kCal, internalWork = 4 * calPerBurpee;
            var avgO2ToBurpee = 3.5 * userWeight / 1e3;
            var avgO2KcalToBurpee = 5 * avgO2ToBurpee;
            var mechanicalBurpees = Math.round(calories / internalWork);
            var o2Burpees = Math.round(calories / avgO2KcalToBurpee);
            $.outputBurpees.setText("Between " + mechanicalBurpees + " and " + o2Burpees + " Burpees");
        } else null === userHeight ? alert("Please enter a user height in the configure tab") : null !== userWeight ? alert("Please enter a user weight in the configure tab") : null === userJHeight && alert("Please enter a user jump height in the configure tab");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;