import { jobs } from "../data/jobs";

export const fetchJobs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 800);
  });
};