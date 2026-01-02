export const saveJob = (job) => {
  const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
  localStorage.setItem("savedJobs", JSON.stringify([...saved, job]));
};

export const removeJob = (id) => {
  const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
  const updated = saved.filter((job) => job.id !== id);
  localStorage.setItem("savedJobs", JSON.stringify(updated));
};

export const getSavedJobs = () => {
  return JSON.parse(localStorage.getItem("savedJobs")) || [];
};