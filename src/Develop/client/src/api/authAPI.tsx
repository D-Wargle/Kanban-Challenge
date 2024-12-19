import { UserLogin } from "../interfaces/UserLogin";


  // TODO: make a POST request to the login route
  const login = async (userInfo: UserLogin) => {
    try {
    
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error('Login failed: ' + errorMessage.message);
      };

      const data = await response.json();

      return data;
    } catch (error) {
      console.log('Login failed: ', error);

      return Promise.reject(error);
    }
  }



export { login };
