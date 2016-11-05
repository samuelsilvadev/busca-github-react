var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
	whenSubmit : function(e){
		e.preventDefault();
		GitHubUser.getByUsername(this.refs.user.value).then(function(response) {
      		console.log(response);
    	});

	},
	render : function(){
		return (
			<div className="jumbotron">
				<h1>Hello World</h1>
				<div className="row">
					<form onSubmit={this.whenSubmit}>
						<div className="form-group">
							<label>User</label>
	  						<input type="text" ref="user" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-primary">Buscar</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = SearchUser;