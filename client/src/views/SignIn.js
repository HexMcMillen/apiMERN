import React from "react";

const SignIn = () => {
    return (
        <div className="formBox">
            <div className="form">
                <h1 className="signHeader">Create Profile</h1>
                <form>
                    <div>
                        <label>First Name:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Last Name:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Password:</label><br />
                        <input type="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label><br />
                        <input type="password" />
                    </div>
                    <input type="submit" value="Turn Yourself Into A Pickle!" />
                </form>
            </div>
            <div className="formSign">
                <h1 className="signHeader">Sign In</h1>
                <form>
                    <div>
                        <label>Email:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Password:</label><br />
                        <input type="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label><br />
                        <input type="password" />
                    </div>
                    <input type="submit" value="Wubba Lubba Dub Dub!" />
                </form>
            </div>
        </div>
    );
}

export default SignIn;