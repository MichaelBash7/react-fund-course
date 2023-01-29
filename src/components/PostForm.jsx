import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/buttons/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body:''})
    }

    return (
        <form>
            {/*Управляемые компоненты*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;