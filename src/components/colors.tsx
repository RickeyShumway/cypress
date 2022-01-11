import { Input, Form } from "semantic-ui-react"
import { Link , useNavigate} from "react-router-dom";
import {useState, useRef } from 'react';


function Default() {
    return <div>Please select color</div>
}
function Red() {
    const navigate = useNavigate();
    // let inputRef = useRef<HTMLInputElement>();
    const [input, setInput] = useState('');
    function handleSubmit (e: React.FormEvent) {
        // e.preventDefault;
        navigate(`/red/${input}`);
        
        console.log('inputRef', input)

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input value={input} onChange={(e: any) => {setInput(e.target.value)}} type="text" placeholder="red..." />
            <Input icon="search" type="submit"/>
        </Form>
    )
}
    

function Blue() {
    return <div>This is Blue</div>
}
function Green() {
    return <div>This is Green</div>
}
export{ Default, Red, Blue, Green}