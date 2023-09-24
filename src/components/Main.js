import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = [];

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks : tasks,
        }
    }

    createTask = (task) =>{
        if(task.trim() === ''){
            alert('task cant be empty');
            return;
        }else{
            tasks.push({task,isCompleted:false})
            this.setState({tasks:tasks});
        }
    }

    deleteTask = (taskId) => {
        tasks.splice(taskId,1)
        this.setState({tasks:tasks});
        console.log(tasks);
    }

    toggleTask = (taskId) =>{
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted;
        this.setState({tasks : tasks});
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    <CreateTask createTask={this.createTask} />
                    <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}  toggleTask={this.toggleTask} />
                </div>
            </div>
        )
    }
}

export default Main;