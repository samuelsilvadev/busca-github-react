var React = require('react');

//criando component
var GitHub = React.createClass({

	render : function(){
		return (
			<div className="jumbotron">
				<h1>Hello World</h1>
				<div className="row">
					<form>
						<div className="form-group">
							<label>Usuário</label>
	  						<input type="text" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-primary">Buscar</button>
					</form>
				</div>
			</div>
		);
	}

});

module.exports = GitHub;