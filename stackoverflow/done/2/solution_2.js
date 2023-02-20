let d = {
    "status": 1,
    "msg": "Data Found.",
    "Data": {
        "meal_data": [
            {
                "type": "Morning Pre Workout",
                "data": []
            },
            {
                "type": "Morning Post Workout",
                "data": []
            },
            {
                "type": "Breakfast",
                "data": []
            },
            {
                "type": "Morning Snack",
                "data": []
            },
            {
                "type": "Lunch",
                "data": [
                    {
                        "meal_template_id": "2307",
                        "app_users_id": "323",
                        "meal_type": "lunch",
                        "dish_id": "31",
                        "dish_value": null,
                        "meal_cal": "9",
                        "meal_carb": "0.0",
                        "meal_fat": "1.0",
                        "meal_protien": "0.0",
                        "dish_qty": "1",
                        "dish_size": "",
                        "date_created": "2022-10-12 18:45:19",
                        "is_complete": "1",
                        "dishes_id": "31",
                        "dish_name": "Rice Bran Oil"
                    }
                ]
            },
            {
                "type": "Afternoon Snack",
                "data": []
            },
            {
                "type": "Evening Pre Workout",
                "data": []
            },
            {
                "type": "Evening Post Workout",
                "data": []
            },
            {
                "type": "Evening Snack",
                "data": []
            },
            {
                "type": "Dinner",
                "data": [
                    {
                        "meal_template_id": "2308",
                        "app_users_id": "323",
                        "meal_type": "dinner",
                        "dish_id": "32",
                        "dish_value": null,
                        "meal_cal": "2",
                        "meal_carb": "0.0",
                        "meal_fat": "0.2",
                        "meal_protien": "0.0",
                        "dish_qty": "1",
                        "dish_size": "",
                        "date_created": "2022-10-12 18:45:19",
                        "is_complete": "1",
                        "dishes_id": "32",
                        "dish_name": "Rice (Uncooked Measure)"
                    }
                ]
            },
            {
                "type": "Supplements",
                "data": []
            }
        ],
        "calculated_data": {
            "calories": 11,
            "carbs": 0,
            "fat": 1.2,
            "protein": 0
        },
        "meal_title": "Meal 1",
        "meal_id": "499",
        "comment": []
    }
};

let _mealData = {
    "meals_completed": [],
    "meals": []
};

d.Data.meal_data.forEach(m => {
    // _mealData.meals.push(m); 
    // you could use the line above to add all meals (even if nothing is in the data of it)

    if(m.data.length < 1) return;
    m.data.forEach(m2 => {
        _mealData.meals.push(m2);
        m2.is_complete === "1" ? _mealData.meals_completed.push(m) : "";
    })
});

if(_mealData.meals_completed.length === _mealData.meals.length){
    // do your stuff
};