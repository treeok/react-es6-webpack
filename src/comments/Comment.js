/**
 * Created by Claire on 2015/6/8.
 */
const React = require('React');
const marked = require('marked');

const Comment = React.createClass({
    render: function(){
        const rawMarkup = marked(this.props.children.toString(),{sanitize:true});
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

module.exports = Comment;