import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multistep';

  allFoodApiData: any = {
    "dishes": [
      {
        "id": 1,
        "name": "Chicken Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 2,
        "name": "Ham Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 3,
        "name": "Cheese Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 4,
        "name": "Fries",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 5,
        "name": "Egg Muffin",
        "restaurant": "Mc Donalds",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 6,
        "name": "Burrito",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 7,
        "name": "Tacos",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 8,
        "name": "Quesadilla",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 9,
        "name": "Steak",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 10,
        "name": "Yakitori",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 11,
        "name": "Nankotsu",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 12,
        "name": "Piman",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 13,
        "name": "Vegan Bento",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch"]
      },
      {
        "id": 14,
        "name": "Coleslaw Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 15,
        "name": "Grilled Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 16,
        "name": "Veg. Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 17,
        "name": "Fruit Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 18,
        "name": "Corn Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 19,
        "name": "Tomato Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 20,
        "name": "Minestrone Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 21,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 22,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 23,
        "name": "Hawaiian Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 24,
        "name": "Seafood Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 25,
        "name": "Deep Dish Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["dinner"]
      },
      {
        "id": 26,
        "name": "Chow Mein",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 27,
        "name": "Mapo Tofu",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 28,
        "name": "Kung Pao",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 29,
        "name": "Wontons",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 30,
        "name": "Garlic Bread",
        "restaurant": "Olive Garden",
        "availableMeals": ["breakfast", "lunch", "dinner"]
      },
      {
        "id": 31,
        "name": "Ravioli",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 32,
        "name": "Rigatoni Spaghetti",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 33,
        "name": "Fettucine Pasta",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      }
    ]
  }

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  meals = []

  restaurants = [];

  dishes = [];
  validationMSG;


  constructor(private formBuilder: FormBuilder, private mainService: MainService) { }

  ngOnInit() {

    this.makeViewableMeals()
    this.makeViewableRestaurants()

    this.firstFormGroup = this.formBuilder.group({
      meal: ['', Validators.required],
      people: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      restaurant: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      // dish: ['', Validators.required],
      // noOfServings: ['', Validators.required]
      stepThree: this.formBuilder.array([])
    });

    this.stepThreeArray().push(this.newCombo());

  }


  stepThreeArray(): FormArray {
    return this.thirdFormGroup.get("stepThree") as FormArray
  }

  newCombo(): FormGroup {
    return this.formBuilder.group({
      dish: ['', Validators.required],
      noOfServings: ['', Validators.required]
    })
  }

  addCombo() {

    if (this.stepThreeArray().length > 9) {
      // max allowed dishes is 10
      this.validationMSG = "You can not add more than 10 dishes"
    } else if (this.stepThreeArray().length <= this.firstFormGroup.value.people - 1) {
      this.validationMSG = "Dishes should be greater or equal to the number of person"
      this.stepThreeArray().push(this.newCombo());
    } else {
      this.stepThreeArray().push(this.newCombo());
      this.validationMSG = ""
    }

  }

  removeCombo(i) {
    this.stepThreeArray().removeAt(i);
  }

  submit() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
  }

  makeViewableMeals() {
    // logic to get unique meals
    let mergedMeals = this.allFoodApiData.dishes.flatMap(meal => meal.availableMeals)
    let totalUniqueMeals = [...new Set(mergedMeals)]

    for (let value of totalUniqueMeals) {
      this.meals.push({ value: value, viewValue: value })
    }
  }

  makeViewableRestaurants() {
    // logic to get unique restaurants
    let totalUniqueRestaurants = [... new Set(this.allFoodApiData.dishes.map(res => res.restaurant))]

    for (let value of totalUniqueRestaurants) {
      this.restaurants.push({ value: value, viewValue: value })
    }
  }

  fetchDishOfGivenRestaurant(event) {
    for (let res of this.allFoodApiData.dishes) {
      if (res.restaurant == event.value) {
        this.dishes.push({ "value": res.name, "viewValue": res.name })
      }
    }
  }

}
