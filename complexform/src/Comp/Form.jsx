import React, { useState } from "react";

const Form = () => {
    const [olddata, newdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const inputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;

        newdata((preValue) => {
            return{
                ...preValue,
                [name]:value
            }
            // if (name === "firstName") {
            //     return {
            //         firstName: value,
            //         lastName: preValue.lastName,
            //         email: preValue.email,
            //     }
            // }
            // else if (name === "lastName") {
            //     return {
            //         firstName: preValue.firstName,
            //         lastName: value,
            //         email: preValue.email,
            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         firstName: preValue.firstName,
            //         lastName: preValue.lastName,
            //         email: value,
            //     }
            // }

        })
    }
    const formSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted");
    }

    return (
        <>
            <div className="mainCard">
                <div className="subclassCard">
                    <form onSubmit={formSubmit}>
                        <div className="minputBox">
                            <h2> Hello {olddata.firstName} {olddata.lastName}</h2>
                            <h2> email {olddata.email}</h2>
                            <fieldset>Please fill fields</fieldset>
                            <label> Name </label><br />
                            <input type="text" onChange={inputEvent} name="firstName" value={olddata.firstName} /><br />
                            <label> Last Name </label><br />
                            <input type="text" onChange={inputEvent} name="lastName" value={olddata.lastName} /><br />
                            <label> Email </label><br />
                            <input type="email" onChange={inputEvent} name="email" value={olddata.email} /><br />
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;