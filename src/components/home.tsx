import { Button } from 'semantic-ui-react';
import React from 'react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';
import { useNavigate} from "react-router-dom";
function Home() {
    const colors: string[] = ['red', 'green', 'blue'];
   const navigate=useNavigate();
    return(
        <div>
            {colors.map((item: string) => {
            return (
                <Button value={item}
                    onClick={()=>{
                        console.log(`you selected ${item}`)
                        navigate(`${item}`)
                    }}
                    size="massive"
                    key={item}
                    fill="true" 
                    color={item as SemanticCOLORS}
                    >
                    {item}
                </Button>
                )
            })}
        </div>

    )
}
export default Home;