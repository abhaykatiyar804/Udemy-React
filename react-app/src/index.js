import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Are you Sure?</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo="Today at 4:45PM"
                    comment="I like Writing"
                />
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail author='Alex'
                    timeAgo="Today at 5:45PM"
                    comment="I don't like Writing"
                />
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail
                    author='Jane'
                    timeAgo="Today at 6:45PM"
                    comment="I like Reading"

                />
            </ApprovalCard>
        </div>
    )
}


ReactDOM.render(
    <App />, document.querySelector('#root')
)