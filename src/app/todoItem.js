const React = require('react');
module.exports ={
	TodoItem: class extends React.Component{
		render(){
			var handleDelete = ()=>{
				console.log(`clicked to delete ${this.props.item}`)
				this.props.onDelete(this.props.item);
			}
			return(
				<li>
					<div className="todo-item">
						<span className="item-name">
							{this.props.item}
						</span>
						<span className="item-delete" onClick={handleDelete}> x </span>
					</div>
				</li>
			);
		};
	}
}
