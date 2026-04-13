const base = 'http://localhost:5000';

export const verifyUser = async (email, password) => {
    try {
        const response = await fetch(`${base}/auth/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            return 'Login successful';
        } else {
            const errorData = await response.json();
            alert(errorData.message);
            return 'Login failed';
        }
    } catch (error) {
        console.error('Error verifying user:', error);
    }
}

export const createUser = async (gitID, fullName, userName, Bio, Email, Password) => {
    try {
        const response = await fetch(`${base}/auth/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ gitID, fullName, userName, Bio, Email, Password })
        })
        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            return 'User created successfully';
        } else {
            const errorData = await response.json();
            alert(errorData.message);
            return 'User creation failed';
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

export const gitGitProfile = async () => {
    try {
        await fetch(`${base}/git`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
    } catch (error) {
        console.error('Error fetching Git profile:', error);
    }
}