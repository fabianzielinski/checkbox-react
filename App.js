const PositiveMesage = () => <p>Możesz obejrzeć film. Zapraszamy !!!!</p>;
const NegativeMesage = () => <p>Nie możesz oglądać filmu. Do widzenia.</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };
  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMesage />;
    } else {
      return <NegativeMesage />;
    }
  };
  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <input
          type="checkbox"
          name=""
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam conajmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
