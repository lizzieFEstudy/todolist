import React from 'react';

const ListItem = ({ item, clickRemoveButtonHandler, toggleDoneButtonHandler }) => {
    return (
        <li>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
            <div className="btn-wrap">
                <button className="btn-del" onClick={() => clickRemoveButtonHandler(item.id)}>
                    삭제하기
                </button>
                <button className="btn-done" onClick={() => toggleDoneButtonHandler(item.id)}>
                    {item.isDone == false ? '완료' : '계속'}
                </button>
            </div>
        </li>
    );
};

const AddForm = ({ title, setTitle, body, setBody, onSubmitHandler, onChangeHandler }) => {
    return (
        <form className="add-form-box" onSubmit={onSubmitHandler}>
            <label>
                제목
                <input className="form" type="text" value={title} onChange={(e) => onChangeHandler(e, setTitle)}></input>
            </label>

            <label>
                내용
                <input className="form" type="text" value={body} onChange={(e) => onChangeHandler(e, setBody)}></input>
            </label>

            <button>추가하기</button>
        </form>
    );
};

export { ListItem, AddForm };
