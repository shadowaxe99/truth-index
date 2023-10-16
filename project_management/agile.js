```javascript
class AgileMethodology {
    constructor() {
        this.sprints = [];
    }

    createSprint(sprintName, startDate, endDate) {
        let sprint = {
            name: sprintName,
            startDate: startDate,
            endDate: endDate,
            tasks: []
        };
        this.sprints.push(sprint);
    }

    addTaskToSprint(sprintName, taskName, taskDescription, assignee, estimatedHours) {
        let sprint = this.sprints.find(sprint => sprint.name === sprintName);
        if(sprint) {
            let task = {
                name: taskName,
                description: taskDescription,
                assignee: assignee,
                estimatedHours: estimatedHours,
                status: 'To Do'
            };
            sprint.tasks.push(task);
        }
    }

    updateTaskStatus(sprintName, taskName, status) {
        let sprint = this.sprints.find(sprint => sprint.name === sprintName);
        if(sprint) {
            let task = sprint.tasks.find(task => task.name === taskName);
            if(task) {
                task.status = status;
            }
        }
    }

    getSprintReport(sprintName) {
        let sprint = this.sprints.find(sprint => sprint.name === sprintName);
        if(sprint) {
            return sprint.tasks;
        }
        return [];
    }
}

module.exports = AgileMethodology;
```