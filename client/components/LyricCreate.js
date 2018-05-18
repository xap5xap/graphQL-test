import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songid: this.props.songId
            }
        })
        .then(()=>{
            
        });
        this.setState({ content: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a lyric</label>
                <input value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        );
    }
}

const mutation = gql`mutation AddLyricToSong($content: String, $songid: ID){
  addLyricToSong(content:$content, songId:$songid){
    id 
    lyrics{
      id
      content
      likes
    }
  }
}`

export default graphql(mutation)(LyricCreate);