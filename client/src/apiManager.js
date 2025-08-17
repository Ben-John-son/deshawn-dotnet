export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/api/dogs");
  return res.json();
}

export const getWalkers = async () => {
  const res = await fetch("/api/walkers");
  return res.json();
}

export const getCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
}

export const assignDog = async (walkerId, dogId) => {
  const res = await fetch(`/api/walkers/${walkerId}/dogs/${dogId}`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to assign dog: ${res.status} ${text}`);
  }

  return res.json(); 
};

export const addDog = async (dog) => {
  const res = await fetch("/api/newDog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog), // <-- send the form data as JSON
  });

  if (!res.ok) {
    throw new Error("Failed to add dog");
  }

  return res.json();
};

export const addCity = async (city) => {
  const res = await fetch("/api/newCity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city), 
  });

  if (!res.ok) {
    throw new Error("Failed to add city");
  }

  return res.json();
};




export const deleteDog = async (id) => {
  const res = await fetch(`api/dog/${id}`, {
    method: "DELETE",
  });
};

// 🚶 Delete Walker
export const deleteWalker = async (id) => {
  const res = await fetch(`/api/walker/${id}`, {
    method: "DELETE",
  });
};
