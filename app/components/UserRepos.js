var React = require('react');

var UserRepos = React.createClass({
	getInitialState : function(){
		return{
			reposLength:0,			
		};
	},
	componentWillReceiveProps(props){
		this.setState({reposLength: props.repos.length});
	},
	render: function(){
		var repos = this.props.repos.map(function(repo, key) {
	      return (
	        <div key={key} className="thumbnail">
	          <div className="caption">
	            <h3>{repo.name}
	              <span className="badge">{repo.stargazers_count} STARS</span>
	            </h3>
	            <p>{repo.description}</p>
	            <p>
	              <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
	              <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
	            </p>
	          </div>
	        </div>
	      );
	    });
	    return (
	    	<div>
	    		<h3 className="label label-info">{this.state.reposLength} repositories</h3><br/>
	    		{repos}
	    	</div>
	    );
	}
});

module.exports = UserRepos;