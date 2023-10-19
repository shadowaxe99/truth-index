import math

# Function to calculate project budget

def calculate_budget(project_hours, hourly_rate):
    # Calculate the budget based on the number of hours and the hourly rate
    budget = project_hours * hourly_rate
    return budget

# Example usage

project_hours = 1000  # For example, this could be the total number of hours estimated for the project
hourly_rate = 50  # For example, this could be the average hourly rate for the team

budget = calculate_budget(project_hours, hourly_rate)
print('Estimated project budget:', budget)