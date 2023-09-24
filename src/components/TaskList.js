import React, { Component } from 'react'
import TaskListItem from './TaskListItem';

class TaskList extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            task: this.props.tasks.task,
        }
    }

    render() {
        
        return (
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => 
                            <TaskListItem key={index} task={task} id={index} deleteTask={this.props.deleteTask} toggleTask={this.props.toggleTask} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;
