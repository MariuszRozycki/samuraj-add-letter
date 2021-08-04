class App extends React.Component {

    state = {
        text: ''
    }

    handleClick = () => {
        // const letter = 'a';
        const number = Math.floor(Math.random() * 10) + 1;
        this.setState({
            text: this.state.text + number + ' '
        })
    }

    // handleClick() {
    //     console.log(this);
    //     const letter = 'a';
    //     this.setState({
    //         text: this.state.text + letter
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Choose number</button>
                {/* <button onClick={this.handleClick.bind(this)}>Add "A"</button> */}
                <PanelResult text={this.state.text} />
            </React.Fragment>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));