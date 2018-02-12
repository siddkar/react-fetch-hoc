import React from 'react';

const Posts = (props) => {
    if (props.data != false) {
        return (
            <div>
                <div>
                    <span><button className="btn btn-success" onClick={props.getData}>Get Posts</button></span>&nbsp; &nbsp;
                    <span><button className="btn btn-danger" onClick={props.clearData}>Close Posts</button></span>
                </div>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Post</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((object, i) => {
                                return (
                                    <tr key={object.id}>
                                        <td>{object.userId}</td>
                                        <td>{object.title}</td>
                                        <td className="info">{object.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    return (
        <div>
            <button className="btn btn-success" onClick={props.getData}>Get Posts</button>
        </div>
    );
}

export default Posts;