import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useState } from "react";

const ApplyJob = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === Number(id));
  const [applied, setApplied] = useState(false);

  if (!job) {
    return <p className="p-6">Job not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600">{job.company_name}</p>
      <p className="text-sm mt-1">{job.category}</p>

      <div className="mt-6 p-4 border rounded bg-gray-50">
        <p className="mb-4">
          This is a demo application page.  
          In a real system, this would submit your resume to the employer.
        </p>

        {!applied ? (
          <button
            onClick={() => setApplied(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Apply Now
          </button>
        ) : (
          <p className="text-green-600 font-semibold">
            ✅ Application submitted successfully!
          </p>
        )}
      </div>

      <Link to="/" className="inline-block mt-6 text-blue-600">
        ← Back to Jobs
      </Link>
    </div>
  );
};

export default ApplyJob;