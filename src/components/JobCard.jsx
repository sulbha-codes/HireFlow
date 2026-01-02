import { Link } from "react-router-dom";
import { saveJob, removeJob, getSavedJobs } from "../utils/storage";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(
    getSavedJobs().some((j) => j.id === job.id)
  );

  const handleSave = () => {
    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
    setSaved(!saved); // ✅ React way
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold text-lg">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company_name}</p>
      <p className="text-sm">{job.category}</p>

      <div className="mt-3 flex justify-between items-center">
        {/* APPLY BUTTON */}
        <Link
          to={`/apply/${job.id}`}
          className="text-blue-600 text-sm"
        >
          Apply
        </Link>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          className={`text-sm ${
            saved ? "text-green-600" : "text-indigo-600"
          }`}
        >
          {saved ? "Saved ✓" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;