//import Statement
import ReactDom from 'react-dom';
import React from 'react';
import './style.css';

//addtask component
class AddTask extends React.Component {
    //state banane ke liye hi constructor chahiye
    //constructor ka kaam hi hota hai state define karna
    constructor(props) {
        super(props);
        this.state = {
            taskDesc: ""
        };
    }

    handleAddTaskClick() {
        // alert(this.state.taskDesc);
        if (this.state.taskDesc.trim() == "") {
            alert("Empty task can't be added!");
            return;
        }

        this.props.handlerToCollectTaskInfo(this.state.taskDesc);//ye app tak khabar pahucha dega
        this.setState({
            taskDesc: ""
        });
    }

    handleTaskTextChange(e) {
        this.setState({
            taskDesc: e.target.value //e.target actually me hamko input element deta hai
        })
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.taskDesc} onChange={(e) => this.handleTaskTextChange(e)} />
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()} />
            </form>
        )
    }
}

//tasklist component (child component)
class TaskList extends React.Component {

    hadleTaskClick(task) {
        this.props.handlerToCollectClickInfo(task);
    }

    render() {
        // console.log(this.props.purpose);
        // console.log(this.props.tasks);
        let list = [];
        for (let i = 0; i < this.props.tasks.length; ++i) {
            let task = this.props.tasks[i];
            let spanAction;

            if (task.isFinished) {
                spanAction = (
                    <span class="material-icons" onClick={() => this.hadleTaskClick(task.desc)} >close</span>
                );
            } else {
                spanAction = (
                    <span class="material-icons" onClick={() => this.hadleTaskClick(task.desc)} >done</span>
                );
            }
            let listItem =
                <div key={i}>
                    <span>{task.desc}</span>
                    {spanAction}
                </div>;
            list.push(listItem);
        }

        return (
            <div className={this.props.forStyling}>
                <div className="list-container">
                    <div className="title">{this.props.purpose}</div>
                    <div className="content">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

//app component (parent component)
//using props we send the data to child component
//purpose aur desc hamare man ke attribute hai
class App extends React.Component {
    //kisi bhi class ke under constructor likhte ho to, props lekar super
    //ko props pass karna hota hai
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{ //task array of object 
                desc: 'Switch off light',
                isFinished: false
            }, {
                desc: 'Turn on fan',
                isFinished: true
            }, {
                desc: 'Make tea',
                isFinished: false
            }, {
                desc: 'Make dinner',
                isFinished: true
            }]
        }
    }

    handleNewTask(task) {
        let oldTasks = this.state.tasks.slice(); //copy bana rahe hai task ki
        // console.log(this.state.tasks);
        console.log(oldTasks);
        oldTasks.push({
            desc: task,
            isFinished: false
        });

        // oldTasks.push({
        //     desc: task,
        //     isFinished: true
        // });

        this.setState({
            tasks: oldTasks
        })
    }

    handleTaskStatusUpdate(task, newStatus) {
        let oldTasks = this.state.tasks.slice();
        let taskItem = oldTasks.find(ot => ot.desc == task);
        taskItem.isFinished = newStatus;

        this.setState({
            tasks: oldTasks
        });
    }

    render() {
        // const name = "Gyandeep Mehra";
        let tasks = this.state.tasks;
        let todoTasks = tasks.filter(t => t.isFinished === false);//task that has to be completed
        let doneTasks = tasks.filter(t => t.isFinished === true);//task that has been completed
        return (
            // <h1>Hello {name}</h1>//JSX
            <>
                <div className='add-task'>
                    <AddTask handlerToCollectTaskInfo={(task) => this.handleNewTask(task)} />
                </div>
                <div className='task-lists'>
                    <TaskList handlerToCollectClickInfo={(task) => this.handleTaskStatusUpdate(task, true)} tasks={todoTasks} purpose="Tasks to do" forStyling="todo" />
                    <TaskList handlerToCollectClickInfo={(task) => this.handleTaskStatusUpdate(task, false)} tasks={doneTasks} purpose="Tasks finished" forStyling="finished" />
                </div>
            </>
        )
    };
}

ReactDom.render(<App />, document.getElementById("root"));