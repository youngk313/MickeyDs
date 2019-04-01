let burgs = "<ul><li>Big Mac</li><li>McChicken</li><li>Quarter Pounder</li><li>Filet-o-Fish</li></ul>";

let burgData = ["Amount Per: 100 grams",
                "Calories: 257",
                "Fat: 15 g",
                "Sodium: 460 mg",
                "Total Carbohydrate: 20 g",
                "Protein: 12 g",
                "Cholesterol 36 mg",
                "Potassium: 181 mg"]

let drinks = "<ul><li>Coca-Cola</li><li>Milkshakes</li><li>Sprite</li><li>Minute Maid</li></ul>";

let drinkData = ["Amount Per Serving: Large",
                "Calories: 380",
                "Sodium: 90 mg",
                "Total Carbohydrates: 100 g",
                "Sugars: 100 g"
                ]

let breakfast = "<ul><li>Bacon n' Egg McMuffin</li><li>Breakfast Burrito</li><li>Egg BLT McMuffin</li><li>Sausage McGriddles</li></ul>";

let breakyData = ["Amount Per Serving: 124 g",
                  "Calories: 310",
                  "Fat: 14 g",
                  "Sodium: 680 mg",
                  "Carbohydrates: 28 g",
                  "Protein: 16 g",
                  "Cholesterol: 200 g"
                  ]

module.exports = {
  getbreakfasts: function () {
    console.log("called: getbreakfasts");

    return breakfast;
  },

  getbreakyfacts : function () {
    console.log("called: getbreakyfacts");

    return breakyData;
  },

  getburgers: function () {
      console.log("called: getburgers");
      // Note: this could be from a DB, for now it's just hard-coded
      return burgs;
  },
  getburgfacts: function () {
      console.log("called: getburgfacts");
      // Note: this could be from a DB, for now it's just hard-coded
      return burgData;
  },
  getdrinks: function () {
      console.log("called: getdrinks");
      // Note: this could be from a DB, for now it's just hard-coded
      return drinks;
  },
  getdrinkfacts: function() {
    console.log("called: getdrinkfacts");

    return drinkData;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}