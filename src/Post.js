
const Post = (props) => {


    return (
        <div className="post">
            <h2>
            
                <h2 key={props.id}>
                    <div > {props.id}</div>
                    <div className={props.completed ? "true" : "false"}>{props.title}</div>                    
                    <div>{props.completed ? "Completed" : "Not Completed"}</div>
                </h2>

                </h2>
        </div>
    )
}

export default Post