import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fatchPosts } from './../actions/index';
import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount(){
        this.props.fatchPosts();
    }

    renderList(){
        return this.props.posts.map(post =>{
            return (
                <div key={post.id}>
                <div className="media">
                    <img src="..." className="mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0">{post.title}</h5>
                        {post.body}
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
            )
        });
    }


    render() {
        console.log('post',this.props.posts);
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts : state.posts};
}


export default connect(mapStateToProps, {fatchPosts})(PostList);