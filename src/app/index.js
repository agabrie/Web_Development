const React = require('react');
const ReactDOM = require('react-dom');
const {TodoItem} = require('./todoItem');

// create todo component
class TodoComponent extends React.Component{
	constructor(props){
		super(props)
		this.state ={ todo:props.todo };
	};
	
	render(){
		var todo = this.state.todo;
		var clicked=()=>{
			console.log('clicked on something!');
		};
		var onDelete= (item)=>{
			var updatedTodo = this.state.todo.filter((val,index)=>{
				return item !==val;
			})
			this.setState({
				todo:updatedTodo
			})
		}
		todo = todo.map((item,index)=>{
			return(
				<TodoItem item={item} key={index} onDelete={onDelete}/>
			)
		});

		
		return(
			<div id="todos-list">
				<p onClick={clicked}>Something to click on...</p>
				<ul>
					{todo}
				</ul>
			</div>
		);	
	}
	
};

// put component in html page
ReactDOM.render(<TodoComponent todo={["Item 1","Item 2","Item 3"]} />,document.getElementById("todo-wrapper"));