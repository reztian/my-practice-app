import {Input} from "reactstrap";
import "./reactstrap-Input.css";


function InputSelect(){

    return(<div>
        <Input type="select"
               multiple

               >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Input>

    </div>);
}

export default InputSelect;