import requests

def get_temperature(api_key, city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    data = response.json()
    return data['main']['temp']

def get_forecast(api_key, city):
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    data = response.json()
    forecast = [item['main']['temp'] for item in data['list'][:5]]
    return forecast

api_key = 'your_api_key'
city = 'your_city'
current_temp = get_temperature(api_key, city)
forecast_temp = get_forecast(api_key, city)


def calculate_daily_energy(appliances):
    daily_energy = {}
    for appliance, details in appliances.items():
        power = details['power']  # in watts
        hours = details['hours']  # in hours
        daily_energy[appliance] = power * hours / 1000  # in kWh
    return daily_energy

appliances = {
    'LED Bulb': {'power': 10, 'hours': 5},
    'Tube Light': {'power': 20, 'hours': 6},
    'Fans': {'power': 50, 'hours': 10},
    # Add other appliances similarly
}

daily_energy = calculate_daily_energy(appliances)


def predict_energy_cost(daily_energy, current_temp, forecast_temp, cost_per_kWh):
    # Adjust energy consumption based on temperature (example logic)
    adjusted_energy = {}
    for appliance, energy in daily_energy.items():
        if appliance in ['AC', 'Heater']:
            # Example: Increase energy usage if temperature is extreme
            if current_temp > 30:
                adjusted_energy[appliance] = energy * 1.2
            elif current_temp < 10:
                adjusted_energy[appliance] = energy * 1.5
            else:
                adjusted_energy[appliance] = energy
        else:
            adjusted_energy[appliance] = energy

    # Calculate daily cost
    daily_cost = {appliance: energy * cost_per_kWh for appliance, energy in adjusted_energy.items()}
    total_daily_cost = sum(daily_cost.values())

    # Predict for the next 5 days
    forecast_costs = []
    for temp in forecast_temp:
        forecast_energy = {}
        for appliance, energy in daily_energy.items():
            if appliance in ['AC', 'Heater']:
                if temp > 30:
                    forecast_energy[appliance] = energy * 1.2
                elif temp < 10:
                    forecast_energy[appliance] = energy * 1.5
                else:
                    forecast_energy[appliance] = energy
            else:
                forecast_energy[appliance] = energy
        forecast_cost = sum([energy * cost_per_kWh for energy in forecast_energy.values()])
        forecast_costs.append(forecast_cost)

    return total_daily_cost, forecast_costs

cost_per_kWh = 0.12  # Example cost per kWh
total_daily_cost, forecast_costs = predict_energy_cost(daily_energy, current_temp, forecast_temp, cost_per_kWh)

print(f"Total Daily Cost: ${total_daily_cost:.2f}")
print(f"Forecast Costs for Next 5 Days: {forecast_costs}")



import matplotlib.pyplot as plt

days = ['Today', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']
costs = [total_daily_cost] + forecast_costs

plt.plot(days, costs, marker='o')
plt.xlabel('Day')
plt.ylabel('Cost ($)')
plt.title('Predicted Energy Costs')
plt.show()