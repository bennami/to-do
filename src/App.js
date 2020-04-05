import React ,{useState} from 'react';
import './App.css';

function App (){

//array of all items
    const [ items,  setItems ] = useState([]);

//current item that we get from input, key needs to be unique
    const [ currentItem , setCurrentItem] = useState({
        text:'',
        key:''
    });

    //adding item  to items array if not empty
    const addItem = (e) =>{
        //this prevents page from refreshing when click  on submit button
        e.preventDefault();
        const newItem = currentItem;
        if(newItem.text !== ''){
            setItems ( [...items,newItem ]);

            //empty input value after submit
            setCurrentItem({text: '',
                key:''});
            console.log(items)
        }
    };


    const  handleInput  = (e) =>{
        setCurrentItem(
            {
                currentItem:{
                    text: e.target.value,
                    key: Date.now()
                }
            });

    };

    const deleteItem = (key)=>{
        const filteredItems = items.filter(item =>
            item.currentItem.key !== key);
        setItems(filteredItems)

    };

    const listItems = items.map( item => {
        return <div className={'list'} key={item.currentItem.key}>
            <p>{item.currentItem.text}<span><button onClick={()=> deleteItem(item.currentItem.key)}>X</button></span></p>

        </div>

    });
    return (
        <div className="todo-list">
            <h1>To Do</h1>
            <form id="form" onSubmit={addItem}>
                <div className={"form-container"}>
                    <input
                        className={"addToDo"}
                        type="text"
                        placeholder={"enter  you  task"}
                        value={currentItem.text }
                        onChange={handleInput}
                    />
                    <button type={"submit"}>+</button>
                </div>
            </form>
            <div  className="todo-items">
                {listItems}
            </div>
        </div>
    );



}

export default App;
