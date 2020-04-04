import React ,{useState} from 'react';
import './App.css';
import Todo from "./components/Todo";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:[],
            currentItem:
                {
                    text: '',
                    key: ''
                }

        };
        console.log(this.state.items);
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }
//const [ items,  setItems  = useState([]);
//const [ currentItem , setCurrentItem] = useState({
// text:'',
// key:''
// })

    addItem(e){
        //this prevents page from refreshing
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !=="") {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
                })
            }
        }

        deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
        item.key !== key);
        this.setState({
            items:filteredItems
        })

        }

    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }



    render (){

         return (
            <div className="todo-list">
                <h1>To Do</h1>

                <form id="form" onSubmit={this.addItem}>
                    <div className={"form-container"}>
                        <input
                            className={"addToDo"}
                            type="text"
                            placeholder={"enter  you  task"}
                            value={this.state.currentItem.text}
                            onChange={this.handleInput}
                        />
                        <button type={"submit"}>+</button>
                    </div>
                </form>

            <Todo items = {this.state.items} deleteItem ={this.deleteItem}/>
            </div>
            );
    }


}

export default App;
