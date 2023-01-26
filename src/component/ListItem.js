import React from "react";

let ListItem = (props) => {
    let { item, deleteItem } = props;
    let Length = item.length;
    let ListItem = Length ? (
        item.map(item => {
            return (
                <div key={item.id} >
                    <span className="name">{item.name} </span>
                    <span className="age">{item.age} </span>
                    <span  className="action icon" onClick ={() => deleteItem(item.id)}>&times; </span>

                </div>
            )
        })
    ) : (
        <p>there is no item to show</p>
    )
    return (
        <div className="ListItem">
            
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
          
            {ListItem}
        </div>
    )
}
export default ListItem;
