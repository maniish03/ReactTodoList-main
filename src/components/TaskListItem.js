import React, { Component } from 'react'

class TaskListItem extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            task: this.props.task,
            isEditing : false,
            editTask : ''
        }
    }
    
    setEditingState = (e,isEditing) => {
        e.preventDefault();
        this.setState({isEditing : isEditing});
        if (isEditing) {
            this.setState({editTask : this.state.task.task});
            
        }else{
            this.setState({task : {task : this.state.editTask} });
        }

        // console.log("is editing : " + this.state.isEditing);
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({editTask : e.target.value});
        
    }

    deleteTask = (e) => {
        e.preventDefault();
        this.props.deleteTask(this.props.id);
        console.log("index : " + this.props.id);
    }

    editSubmit = (e) => {
        e.preventDefault();
        this.setEditingState(e,false);
    }

    toggleTask = (e) => {
        // e.preventDefault();
        this.props.toggleTask(this.props.id);
        // console.log("toggle" + this.state.task.isCompleted);
    }

    render() {
        var index = this.props.id;
        var task = this.state.task;
        // console.log(task);
        return (
                <tr key={index}>
                    {this.state.isEditing ? (
                    <>
                    <td>
                        <form onSubmit={this.editSubmit}>
                            <input type="text" name="editTask" value={this.state.editTask} onChange={this.handleEdit} />
                        </form>
                    </td>
                    <td> {task.isCompleted?"Yes":"Non"}</td>
                    <td>
                        <button name="taskSave" onClick={(e) => this.setEditingState(e,false)}>Save</button>
                        <button name="taskBack" onClick={(e) => this.setState({isEditing:false})}>Back</button>
                    </td>
                    </>
                    ) : (
                    <>
                    <td onClick={this.toggleTask} className="toggleClass">
                        <input type="checkbox" readOnly checked={task.isCompleted} />
                        <span className={task.isCompleted?"completed":"notCopleted"}>
                            {task.task}
                        </span>
                    </td>
                    <td>{task.isCompleted?"Yes":"Non"}</td>
                    <td>
                        <button name="taskEdit" onClick={(e) => this.setEditingState(e,true)}>Edit</button>
                        <button name="taskDelete" onClick={this.deleteTask}>Delete</button>
                    </td>
                    </>
                    )}
                </tr>
        )
    }
}

export default TaskListItem;
