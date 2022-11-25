import React from "react"

export default function Overview (props) {

    

    return (
        <div className = "submit-container">
            <form onSubmit ={props.editMode.on ? props.handleResubmit : props.handleSubmit}>
                <input 
                    type = "text" 
                    name = "task"
                    onChange = {props.handleChange}
                    value = {props.val}
                />
                <button>{props.editMode.on ? "Resubmit Task" : "Submit Task"}
                </button>
            </form>

        </div>
    )


}