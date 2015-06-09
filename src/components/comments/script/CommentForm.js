/**
 * Created by claire on 2015/6/8.
 */
const React = require('React');

const CommentForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        const author = React.findDOMNode(this.refs.author).value.trim();
        const text = React.findDOMNode(this.refs.text).value.trim();
        if(!author || !text){
            return;
        }
        this.props.onCommentSubmit({author,text});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.author).value = '';
        return;
    },
    render: function(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        )
    }
});