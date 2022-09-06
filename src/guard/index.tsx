const authorise = async (setUser: (arg0: any) => void) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/me`, {
      credentials: "include",
    });
    const data = await response.json();
    if (!data.errors) {
      setUser(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export { authorise };
