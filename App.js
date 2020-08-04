const PositiveMesage = () => <p>Możesz obejrzeć film. Zapraszamy !!!!</p>;
const NegativeMesage = () => <p>Nie możesz oglądać filmu. Do widzenia.</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMesage />;
      } else {
        return <NegativeMesage />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({ isFormSubmitted: true });
    }
  };

  render() {
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            name=""
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br />
          <button type="submit">Kup Bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
