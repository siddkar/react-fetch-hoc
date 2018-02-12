import React from 'react';

const fetchApiHOC = (WrapperComponent, selectData) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getData = this.getData.bind(this);
        this.clearData = this.clearData.bind(this);
    }
    getData() {
        fetch(`https://jsonplaceholder.typicode.com/${selectData}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }
    clearData() {
        this.setState({
            data: []
        });
    }
    render() {
        const additionalProps = {
            getData: this.getData,
            clearData: this.clearData
        }
        return (
            <div className="well">
                <WrapperComponent {...this.state} {...additionalProps} />
            </div>
        );
    }
};

export default fetchApiHOC;