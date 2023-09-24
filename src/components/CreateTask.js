import React, { Component } from 'react'

class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            task:''
        }
    }

    handlTask = (e) =>{
        this.setState({task : e.target.value});
        console.log(this.state.task);
    }

    addTask = (e) =>{
        e.preventDefault();
        this.props.createTask(this.state.task);
        // console.log("clicked");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <div>
                        <input type="text" name="task" value={this.state.task} placeholder="add Task ... " onChange={this.handlTask} autoFocus />
                        <button type="submit" name="submitTask">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTask;
