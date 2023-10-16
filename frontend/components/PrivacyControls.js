```javascript
import React, { useState } from 'react';
import axios from 'axios';

const PrivacyControls = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePrivacyChange = async (event) => {
        setLoading(true);
        const { name, value } = event.target;
        const updatedUser = { ...user, [name]: value };

        try {
            const response = await axios.put(`/api/users/${user._id}`, updatedUser);
            setUser(response.data);
        } catch (error) {
            console.error('Error updating privacy settings:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Privacy Controls</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form>
                    <label>
                        Public Profile:
                        <input
                            type="checkbox"
                            name="publicProfile"
                            checked={user?.publicProfile || false}
                            onChange={handlePrivacyChange}
                        />
                    </label>
                    <label>
                        Show Public Stances:
                        <input
                            type="checkbox"
                            name="showPublicStances"
                            checked={user?.showPublicStances || false}
                            onChange={handlePrivacyChange}
                        />
                    </label>
                    <label>
                        Show Reviews:
                        <input
                            type="checkbox"
                            name="showReviews"
                            checked={user?.showReviews || false}
                            onChange={handlePrivacyChange}
                        />
                    </label>
                </form>
            )}
        </div>
    );
};

export default PrivacyControls;
```