import React, { MouseEventHandler } from "react";

type Props = {
  onClick:MouseEventHandler, liked: boolean
}

const Like: React.FC<Props> = ({onClick, liked}) => 
{
let dynamicClass = liked
? "bi bi-heart-fill m-2"
: "bi bi-heart m-2";

return(<i className={dynamicClass} onClick={onClick}></i>)
};

export default Like;

