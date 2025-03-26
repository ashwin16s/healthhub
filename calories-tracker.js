document.getElementById('calories-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const activity = document.getElementById('activity').value;
    const duration = parseFloat(document.getElementById('duration').value);

    const activityCalories = {
        running: 10,
        walking: 5,
        cycling: 8,
        swimming: 12
    };

    const foodCalories = {
        apple: 95,
        banana: 105,
        chicken: 165,
        rice: 206
    };

    // Calculate total calories intake
    const foodItems = document.querySelectorAll('#food-items .food-item');
    let totalCaloriesIntake = 0;

    foodItems.forEach(item => {
        const food = item.querySelector('select').value;
        const quantity = parseFloat(item.querySelector('input').value);

        if (food && quantity > 0) {
            totalCaloriesIntake += foodCalories[food] * (quantity / 100);
        }
    });

    if (activity && duration > 0) {
        const caloriesLost = activityCalories[activity] * duration;
        const netCalories = totalCaloriesIntake - caloriesLost;

        document.getElementById('calories-intake-result').textContent = `Calories Consumed: ${totalCaloriesIntake.toFixed(2)} kcal.`;
        document.getElementById('calories-lost-result').textContent = `Calories Burned: ${caloriesLost.toFixed(2)} kcal.`;
        document.getElementById('net-calories-result').textContent = `Net Calories: ${netCalories.toFixed(2)} kcal.`;
    } else {
        alert('Please fill out all fields with valid values.');
    }
});

// Add functionality to dynamically add more food items
document.getElementById('add-food-item').addEventListener('click', function () {
    const foodItemsContainer = document.getElementById('food-items');
    const newFoodItem = document.createElement('div');
    newFoodItem.classList.add('food-item');
    newFoodItem.innerHTML = `
        <select name="food[]" class="uniform-select" required>
            <option value="" disabled selected>Select food</option>
            <option value="apple">Apple (95 kcal)</option>
            <option value="banana">Banana (105 kcal)</option>
            <option value="chicken">Chicken Breast (165 kcal/100g)</option>
            <option value="rice">Rice (206 kcal/cup)</option>
        </select>
        <input type="number" name="quantity[]" placeholder="Quantity (e.g., grams or cups)" required>
    `;
    foodItemsContainer.appendChild(newFoodItem);
});
