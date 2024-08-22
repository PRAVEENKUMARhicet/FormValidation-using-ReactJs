import React, { useState } from 'react';
import './form.css';

function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billableHours: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()){
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName.trim()) 
            newErrors.lastName = 'Last Name is required';
        if (!formData.birthDate) 
            newErrors.birthDate = 'Birth Date is required';
        if (!formData.email.trim()) 
            newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) 
            newErrors.email = 'Email is invalid';

        if (!formData.phoneNumber.trim()) 
            newErrors.phoneNumber = 'Phone Number is required';
        if (!formData.gender) 
            newErrors.gender = 'Gender selection is required';
        if (!formData.startTime) 
            newErrors.startTime = 'Start Time is required';
        if (!formData.endTime) 
            newErrors.endTime = 'End Time is required';
        if (!formData.jobPosition.trim()) 
            newErrors.jobPosition = 'Job Position is required';
        if (!formData.team) 
            newErrors.team = 'Team selection is required';
        if (!formData.designation) 
            newErrors.designation = 'Designation selection is required';
        if (!formData.billableHours) 
            newErrors.billableHours = 'Billable Hours are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully', formData);
        }
    };

    return (
        <div className="form">
            <div className="head">
                <h1>Employee Form</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <div className="first">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"  name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="second">
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange}/>
                    </div>
                    <div className="third">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                </div>

                <div className="contact">
                    <div className="dob">
                        <label htmlFor="birthDate">Birth Date</label>
                        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                        {errors.birthDate && <span className="error">{errors.birthDate}</span>}
                    </div>
                    <div className="mail">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="phno">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    </div>
                </div>

                <div className="personal">
                    <div className="gender">
                        <label htmlFor="gender">Select Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                    </div>
                    <div className="start">
                        <label htmlFor="startTime">Start Time</label>
                        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange}/>
                        {errors.startTime && <span className="error">{errors.startTime}</span>}
                    </div>
                    <div className="end">
                        <label htmlFor="endTime">End Time</label>
                        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange}/>
                        {errors.endTime && <span className="error">{errors.endTime}</span>}
                    </div>
                </div>

                <div className="work">
                    <div className="position">
                        <label htmlFor="jobPosition">Job Position</label>
                        <input type="text" name="jobPosition"  value={formData.jobPosition} onChange={handleChange} />
                        {errors.jobPosition && <span className="error">{errors.jobPosition}</span>}
                    </div>
                    <div className="teams">
                        <label htmlFor="team">Select Teams</label>
                        <select name="team" value={formData.team} onChange={handleChange}>
                            <option value="">-- Select Team --</option>
                            <option value="devops">Developer</option>
                            <option value="qa">QA</option>
                            <option value="server">Server Management</option>
                        </select>
                        {errors.team && <span className="error">{errors.team}</span>}
                    </div>
                    <div className="designation">
                        <label htmlFor="designation">Select Designation</label>
                        <select name="designation" value={formData.designation} onChange={handleChange} >
                            <option value="">Select Designation</option>
                            <option value="teamlead">Team Leader</option>
                            <option value="hr">HR</option>
                            <option value="member">Team Member</option>
                            <option value="intern">Internship</option>
                        </select>
                        {errors.designation && <span className="error">{errors.designation}</span>}
                    </div>
                </div>
                <div class="last">
                <div className="hours">
                    <label htmlFor="billableHours">Billable Hours</label>
                    <input type="number" name="billableHours" value={formData.billableHours} onChange={handleChange} />
                    {errors.billableHours && <span className="error">{errors.billableHours}</span>}
                </div>
                </div>
                <div id="button">
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
