var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
	whenSubmit : function(e){
		e.preventDefault();
		
		GitHubUser.getByUsername(this.refs.user.value).then(function(response) {
      		this.props.updateUser(response.data);
    	}.bind(this));

    	GitHubUser.getReposByUsername(this.refs.user.value).then(function(response) {
      		this.props.updateRepos(response.data);
    	}.bind(this));
	},
	render : function(){
		return (
			<div className="jumbotron">
				<h1 className="text-center">Search User Github</h1>
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

//definindo propTypes - objetos/funções que são necessárias para o componente funcionar

SearchUser.propTypes = {
	updateUser:React.PropTypes.func.isRequired,
	updateRepos:React.PropTypes.func.isRequired,
};

module.exports = SearchUser;