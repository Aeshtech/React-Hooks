import { useState , forwardRef, useImperativeHandle} from "react";


//forwardRef used to accessing the parent ref
const Button = forwardRef((props, ref) => {

    const [toggle, setToggle] = useState(true);

    useImperativeHandle( ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    })  );

    return(
        <>
        <button>Child Button</button>
        {toggle && <p>Hello useImperative Hook</p>}
        </>
    )
})

export default Button;