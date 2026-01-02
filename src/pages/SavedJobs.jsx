import { getSavedJobs } from "../utils/storage";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

const SavedJobs = () => {
  const jobs = getSavedJobs();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Saved Jobs</h2>
        <Link to="/" className="text-blue-600">
          ← Back
        </Link>
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No saved jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;