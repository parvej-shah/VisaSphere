import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import LoadingClip from "../components/LoadingClip";
import { TbCancel } from "react-icons/tb";
const MyVisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const [nonSearchedApplicaitons, setNonSearchedApplications] = useState([]);
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://visasphere-server.vercel.app/applications/${user?.email}`)
      .then((res) => res.json())
      .then((data) =>{
        setApplications(data);
        setNonSearchedApplications(data);
        setLoading(false);
      });
  }, [user]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this visa application?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#002147",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visasphere-server.vercel.app/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Cancelled!",
                "Your application has been cancelled.",
                "success"
              );
              setApplications(applications.filter((app) => app._id !== id));
            }
          })
      }
    });
  };
  const handleSearch=(e)=>{
    e.preventDefault();
    const search = e.target.search.value;
    const searchedvisa = nonSearchedApplicaitons.filter(visa=>visa.countryName==search.toUpperCase());
    setApplications(searchedvisa);
  }
  return (
    <section className="min-h-screen py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-center text-textPrimary">
          My Applications
        </h2>
          <form onSubmit={handleSearch}>
          <div className="join">
            <div className="w-full">
              <div>
                <input
                  className="input input-bordered join-item w-full"
                  placeholder="Search by country"
                  name="search"
                />
              </div>
            </div>
            <div >
              <button type="submit" className="btn join-item bg-primary hover:bg-primary/90 text-white">Search</button>
            </div>
          </div>
          </form>
        </div>
        {isLoading?<LoadingClip/>:applications.length === 0 ? (
          <p className="text-center text-textPrimary">
            You haven&apos;t applied for any visa yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
                    <table className="table table-zebra bg-accent">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Country</th>
                        <th>Type</th>
                        <th>Fee</th>
                        <th>Validity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {applications?.map((visa,idx) => (
                         <tr key={visa._id}>
                         <th>{1+idx}</th>
                         <td className="flex items-center gap-4"><img src={visa.countryImage} alt="" className="w-20 h-20 rounded-lg rounded-br-full"/>{visa.countryName}</td>
                         <td>{visa.visaType}</td>
                         <td>${visa.fee}</td>
                         <td>{visa.validity}</td>
                         <td className="">
                         <button onClick={()=>handleCancel(visa._id)} className="btn btn-sm btn-error"><TbCancel className="text-2xl " /> </button>
                         </td>
                       </tr>
                      ))}
                     
                    </tbody>
                  </table>
                  </div>
        )}
      </div>
    </section>
  );
};

export default MyVisaApplications;
