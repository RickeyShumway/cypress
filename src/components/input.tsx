import { useParams } from 'react-router';
function Input() {
    const {input} = useParams();
    return <div>You typed {input}</div>
}
export {Input}