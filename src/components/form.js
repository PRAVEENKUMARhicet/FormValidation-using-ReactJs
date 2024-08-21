import './form.css';

function Form(){
    return(
        <div class="form">
            <div class="head">
                <h1>Employee Form</h1>
            </div>
            <div className="name">
                <div className="first">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="second">
                    <label htmlFor="">Middle Name</label>
                    <input type="text" />
                </div>
                <div className="third">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
            </div>

            <div className="contact">
                <div className="dob">
                    <label htmlFor="">Birth Date</label>
                    <input type='date' />
                </div>
                <div className="mail">
                    <label htmlFor="">Email</label>
                    <input type='email' />
                </div>
                <div className="phno">
                    <label htmlFor="">Phone Number</label>
                    <input type='number' />
                </div>
            </div>

            <div className="personal">
                <div className="gender">
                    <label htmlFor="">Select Gender</label>
                    <select name="" id="gender">
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="start">
                    <label htmlFor="">Start Time</label>
                    <input type='time' />
                </div>
                <div className="end">
                    <label htmlFor="">End Time</label>
                    <input type='time' />
                </div>
            </div>
            <div className="work">
                <div className="position">
                    <label htmlFor="">Job Position</label>
                    <input type="text" />
                </div>
                <div className="teams">
                    <label htmlFor="">Select Teams</label>
                    <select name="" id="gender">
                        <option value="">Teams</option>
                        <option value="devops">developer</option>
                        <option value="qa">QA</option>
                        <option value="server">Server Management</option>
                    </select>
                </div>
                <div className="designation">
                    <label htmlFor="">Select Designation</label>
                    <select name="" id="desiganation">
                        <option value="">Designation</option>
                        <option value="teamlead">Team Leader</option>
                        <option value="hr">HR</option>
                        <option value="member">Team Member</option>
                        <option value="intern">Internship</option>
                    </select>
                </div>
            </div>
            <div className="last">
                <div className="hours">
                    <label htmlFor="">Billable Hours</label>
                    <input type="number" />
                </div>
            </div>
            <div id="button">
            <div className="btn">
                <button type="submit">Submit</button>
            </div>
            </div>
        </div>
    )
}
export default Form;