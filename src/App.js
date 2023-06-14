import { useState } from 'react';
import './App.css';
import Layout from 'components/Layout';
import { ListItem, AddForm } from 'components/Todo';

function App() {
    let [todo, setTodo] = useState([
        { id: 0, title: '리액트 공부하기✏️', body: '리액트를 공부해봅시다.', isDone: false },
        { id: 1, title: '폰 게임 30분만 하기🎲', body: '하루 30분 초과 금지', isDone: true },
    ]);
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const onChangeHandler = (e, setState) => {
        setState(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let newTodo = {
            id: todo[todo.length - 1].id + 1,
            title,
            body,
            isDone: false,
        };

        setTodo([...todo, newTodo]);
        setTitle('');
        setBody('');
    };

    const clickRemoveButtonHandler = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };

    const toggleDoneButtonHandler = (id) => {
        let copyTodo = [...todo];
        let ind;
        copyTodo.forEach((todo, i) => {
            if (todo.id == id) ind = i;
        });
        copyTodo[ind].isDone = !copyTodo[ind].isDone;
        setTodo(copyTodo);
    };

    return (
        <Layout>
            <AddForm title={title} setTitle={setTitle} body={body} setBody={setBody} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} />

            <section>
                <h2>Working.. 🔥</h2>
                <ul className="todo-list">
                    {todo
                        .filter((item) => item.isDone == false)
                        .map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                                    toggleDoneButtonHandler={toggleDoneButtonHandler}
                                />
                            );
                        })}
                </ul>
            </section>

            <section>
                <h2>Done..! 🎉</h2>
                <ul className="todo-list done">
                    {todo
                        .filter((item) => item.isDone == true)
                        .map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                                    toggleDoneButtonHandler={toggleDoneButtonHandler}
                                />
                            );
                        })}
                </ul>
            </section>
        </Layout>
    );
}

export default App;
