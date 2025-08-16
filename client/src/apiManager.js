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
