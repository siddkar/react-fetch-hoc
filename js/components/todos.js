import React from 'react';

const Todos = (props) => {
    if (props.data != false) {
        return (
            <div>
                <div>
                    <span><button className="btn btn-success" onClick={props.getData}>Get Todos</button></span>&nbsp; &nbsp;
                    <span><button className="btn btn-danger" onClick={props.clearData}>Close Todos</button></span>
                </div>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((object, i) => {
                                return (
                                    <tr key={object.id}>
                                        <td>{object.userId}</td>
                                        <td>{object.title}</td>
                                        {object.completed === true ?
                                            <td className="success">Completed</td> : <td className="warning">In Progress</td>}
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
            <button className="btn btn-success" onClick={props.getData}>Get Todos</button>
        </div>
    );
}

export default Todos;