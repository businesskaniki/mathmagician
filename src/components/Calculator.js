import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <form>
        <div className="resultsDiv">0</div>
        <div className="btnDiv">
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input className="orange" type="button" value="&#247;" />
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input className="orange" type="button" value="&#215;" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input className="orange" type="button" value="-" />
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input className="orange" type="button" value="+" />
          <input className="span" type="button" value="0" />
          <input type="button" value="." />
          <input className="orange" type="button" value="=" />
        </div>
      </form>
    );
  }
}
