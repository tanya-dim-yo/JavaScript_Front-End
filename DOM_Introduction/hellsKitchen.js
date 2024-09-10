function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let dataInput = document.querySelector("#inputs textarea").value.trim();

      try {
         dataInput = JSON.parse(dataInput);
      } catch (error) {
         console.error("Invalid input format:", error);
         alert('Please provide valid JSON input!');
         return;
      }

      const bestRestaurantOutput = document.querySelector("#outputs #bestRestaurant p");
      const bestRestaurantWorkersOutput = document.querySelector("#outputs #workers p");

      const restaurantsList = {};

      for (const restaurant of dataInput) {
         const [restaurantName, restaurantWorkers] = restaurant.split(' - ');
         if (!restaurantName || !restaurantWorkers) continue;

         const workersInfo = restaurantWorkers.split(', ');

         if (!restaurantsList[restaurantName]) {
            restaurantsList[restaurantName] = {};
         }

         for (const worker of workersInfo) {
            const [workerName, workerSalary] = worker.split(' ');
            const salary = Number(workerSalary);

            if (workerName && !isNaN(salary)) {
               restaurantsList[restaurantName][workerName] = salary;
            }
         }
      }

      let bestRestaurantName = '';
      let bestRestaurantAverageSalary = 0;

      for (const [name, workers] of Object.entries(restaurantsList)) {
         const totalSalary = Object.values(workers).reduce((sum, salary) => sum + salary, 0);
         const numberOfWorkers = Object.keys(workers).length;
         const averageSalary = totalSalary / numberOfWorkers;

         if (averageSalary > bestRestaurantAverageSalary) {
            bestRestaurantAverageSalary = averageSalary;
            bestRestaurantName = name;
         }
      }

      let bestRestaurantHighestSalary = 0;

      if (bestRestaurantName) {
         const salaries = Object.values(restaurantsList[bestRestaurantName]);
         bestRestaurantHighestSalary = Math.max(...salaries);

         bestRestaurantOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAverageSalary.toFixed(2)} Best Salary: ${bestRestaurantHighestSalary.toFixed(2)}`;

         const bestRestaurantWorkers = Object.entries(restaurantsList[bestRestaurantName])
            .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
            .join(' ');

         bestRestaurantWorkersOutput.textContent = bestRestaurantWorkers;
      } else {
         bestRestaurantOutput.textContent = 'No data available.';
         bestRestaurantWorkersOutput.textContent = '';
      }
   }
}
