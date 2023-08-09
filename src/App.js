import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    listItem: [],
    inputValue: '',
  }

  inputEntered = event => {
    this.setState({inputValue: event.target.value})
  }

  buttonClicked = () => {
    const {inputValue} = this.state
    const len = inputValue.length

    const newList = {
      id: v4(),
      value: inputValue,
      lengths: len,
    }

    this.setState(Prev => ({
      listItem: [...Prev.listItem, newList],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, listItem} = this.state
    console.log(listItem.length === 0)

    return (
      <div className="app-container">
        <div className="left-container">
          <h1 className="left-heading">
            Count the characters like a <br />
            Boss...
          </h1>
          {listItem.length === 0 ? (
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-img"
              />
            </div>
          ) : (
            <ul className="list-container">
              {listItem.map(each => (
                <li key={each.id} className="list-item">
                  <p className="pera">{`${each.value}: ${each.lengths}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form className="input-container">
            <input
              type="text"
              className="input-box"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.inputEntered}
            />
            <button
              type="button"
              className="button"
              onClick={this.buttonClicked}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
