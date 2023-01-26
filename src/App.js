import React, {Component } from 'react';
// import './App.css';
import ListItem from './component/ListItem';
import AddItem from './component/AddItem';

class App extends Component {
state={
  items:[
   
  ]
}
deleteItem=(id)=>{
  let item = this.state.items;
  let i=item.findIndex(item=> item.id===id)
  item.splice(i,1)
  this.setState({items:item})
}
addItem=(item)=>{
  item.id=Math.random();
  let items=this.state.items;
  items.push(item)
  this.setState({items})

}
render() {
    return (
      <div className="App container">
       <h1 className='text-header'>Todo List</h1>
        <ListItem item={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;
