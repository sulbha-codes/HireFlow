import { useEffect, useState, useMemo } from "react";
import { fetchJobs } from "../services/jobApi";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (category ? job.category === category : true)
      );
    });
  }, [jobs, search, category]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">HireFlow</h1>
        <Link to="/saved" className="text-blue-600">
          Saved Jobs →
        </Link>
      </div>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {loading && <Loader />}
      {error && <ErrorBox message={error} />}

      {!loading && !error && filteredJobs.length === 0 && (
        <p className="text-gray-500">No jobs found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;