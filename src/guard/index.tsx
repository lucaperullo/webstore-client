const authorise = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}users/me`, {
      credentials: "include",
    });
    const data = await response.json();
    if (!data.errors) {
      localStorage.setItem("user", "true");
     return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { authorise };
