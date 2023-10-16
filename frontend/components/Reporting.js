```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Reporting = () => {
    const [report, setReport] = useState({
        contentId: '',
        reason: ''
    });

    const handleChange = (e) => {
        setReport({
            ...report,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/reports', report);
            if (response.data.status === 'success') {
                alert('Report submitted successfully');
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            alert(`Error submitting report: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Report Content</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Content ID:
                    <input type="text" name="contentId" onChange={handleChange} required />
                </label>
                <label>
                    Reason for Reporting:
                    <textarea name="reason" onChange={handleChange} required />
                </label>
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default Reporting;
```