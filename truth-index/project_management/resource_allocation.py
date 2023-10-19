import json

# Function to allocate project resources

def allocate_resources(project_resources, tasks):
    # In this example, we simply divide the resources equally among all tasks
    resources_per_task = {task: project_resources / len(tasks) for task in tasks}
    return resources_per_task

# Example usage

project_resources = 100  # For example, this could be the budget

tasks = ['Task 1', 'Task 2', 'Task 3']  # The tasks that need to be done

resources_per_task = allocate_resources(project_resources, tasks)

print(json.dumps(resources_per_task, indent=2))