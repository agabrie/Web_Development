var React = require('react');
var ReactDOM = require('react-dom');
require('./Gui.css');

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: this.props.header
		}
	}
	render(){
		return(
			<div className="header_div">
				{this.state.title}
			</div>
		);
	}
}

class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: this.props.footer
		}
	}
	render(){
		return(
			<div className="footer_div">
				<Links links={["link1","link2","link3"]}/>
				<div className="author_div">
					{this.state.title}
				</div>
			</div>
		);
	}
}
class Links extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			links:this.props.links
		}
	}
	render(){
		var links = this.state.links.map((item,index)=>{
			return(
				<div key={index}>
					<a className="links" href={"localhost:3000/link?link="+index}>{item}</a>
				</div>
			)
		})
		return(
			<div className="links_div">
				{links}
			</div>
		)
	}
}
class Instruction extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			instructions:this.props.instructions
		}
	}
	
	render(){
		var instructions = this.state.instructions.map((instruction,index)=>{
			return(
				<div key={index}>
					{`${index}. ${instruction}\n`}
				</div>
			)
		}) 
		return(
			<div>
				{instructions}
			</div>
		)
	}
}
class Die extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			faces : this.props.faces,
			face_value : this.props.faces
		}
	}
	render(){
		var rollDie = ()=>{
			var value = parseInt((Math.random()*6)+1);
			this.setState({face_value : value});
		}
		return(
			<div>
				<div className="die_div" onClick={rollDie}>
						{this.state.face_value}
				</div>
			</div>
		)
	}
}

class Content extends React.Component{
	render(){
		return(
			<div className="content_div">
				<Instruction instructions={["Click This Die"," This will generate a random number"]}/>
				<Die faces={6}/>
			</div>
		)
	}
}

class GUI extends React.Component
{
	render(){
		return(
			<div>
				<Header header="Website Name"/>
				<Content />
				<Footer footer="agabrie 2019 ©"/>
			</div>
		)
	}
}

ReactDOM.render(<GUI />,document.getElementById('root'));