const ScoreKeeper = () => {

    

    return ( <div className="content">
    <div className="image">
    <img src="https://images.unsplash.com/photo-1584813539806-2538b8d918c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
    </div>
    <h1>Pink Pong Score Keeper</h1>
    <h1><span className="displayOne">0</span>to
    <span className="displayTwo">0</span></h1>
    <select>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
    </select>
    <button className="playerOne">Player One</button>
    <button className="playerTwo">Player Two</button>
    <button className="reset">Reset</button>
  </div> );
}
 
export default ScoreKeeper;