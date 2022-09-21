import React, {MouseEventHandler} from 'react'

type Props = {
    onClick: MouseEventHandler, liked: boolean
}

const Like2: React.FunctionComponent<Props> = ({onClick, liked}) => {

    let dynamicFunction = liked ? "bi bi-heart-fill m-2"
        : "bi bi-heart m-2";
    return (
        <div><i className={dynamicFunction} onClick={onClick}></i></div>
    )
}

export default Like2