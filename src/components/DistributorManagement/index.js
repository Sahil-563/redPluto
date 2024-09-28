import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DistributorManagement = () => {
  const [distributors, setDistributors] = useState([]);
  const [isOwner, setIsOwner] = useState(false); // Check if user is MANUFACTURER
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    primaryContactPerson: "",
    primaryMobile: "",
    secondaryContactPerson: "",
    secondaryMobile: "",
    email: "",
    gstNumber: "",
    category: "",
    whatsapp: "",
    logo: null,
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Use the provided distributor data
  const distributorData = [
    {
      id: 1,
      name: "Distributor A",
      city: "City A",
      address: "123 Street A",
      primaryContactPerson: "John Doe",
      primaryMobile: "1234567890",
      secondaryContactPerson: "Jane Doe",
      secondaryMobile: "0987654321",
      email: "distributorA@example.com",
      gstNumber: "GST123456789",
      category: "Category A",
      whatsapp: "1234567890",
      logo: "http://example.com/logoA.png",
      createdAt: "2024-09-28T12:34:56.789Z",
      updatedAt: "2024-09-28T12:34:56.789Z",
    },
    {
      id: 2,
      name: "Distributor B",
      city: "City B",
      address: "456 Street B",
      primaryContactPerson: "Alice Smith",
      primaryMobile: "2345678901",
      secondaryContactPerson: null,
      secondaryMobile: null,
      email: "distributorB@example.com",
      gstNumber: "GST987654321",
      category: "Category B",
      whatsapp: "2345678901",
      logo: "http://example.com/logoB.png",
      createdAt: "2024-09-28T12:34:56.789Z",
      updatedAt: "2024-09-28T12:34:56.789Z",
    },
  ];

  useEffect(() => {
    fetchDistributors();
    checkUserRole();
  }, []);

  const fetchDistributors = () => {
    try {
      setDistributors(distributorData);
      toast.success("Distributors fetched successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch distributors.");
    }
  };

  // Placeholder for getUserRole function
  const getUserRole = async () => {
    return "MANUFACTURER"; // Example return value for testing
  };

  const checkUserRole = async () => {
    try {
      const userRole = await getUserRole();
      setIsOwner(userRole === "MANUFACTURER");
      toast.success("User role checked successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to check user role.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating a post request (you can replace this with an actual API call)
      console.log("Submitting Distributor:", formData);
      fetchDistributors();
      setShowForm(false); // Hide form after submission
      setFormData({
        name: "",
        city: "",
        address: "",
        primaryContactPerson: "",
        primaryMobile: "",
        secondaryContactPerson: "",
        secondaryMobile: "",
        email: "",
        gstNumber: "",
        category: "",
        whatsapp: "",
        logo: null,
      });
      toast.success("Distributor added successfully!");

      // Show the modal after adding a distributor
      setShowModal(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add distributor.");
    }
  };

  const handleShowDistributors = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Distributor"
          className="border p-2"
        />
        {isOwner && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Distributor
          </button>
        )}
        <button
          onClick={handleShowDistributors}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Show Distributors
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 space-y-2">
          {/* Distributor Creation Form */}
          <input
            type="text"
            name="name"
            placeholder="Distributor Name"
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="primaryContactPerson"
            placeholder="Primary Contact Person"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="primaryMobile"
            placeholder="Primary Mobile"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="secondaryContactPerson"
            placeholder="Secondary Contact Person"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="secondaryMobile"
            placeholder="Secondary Mobile"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="gstNumber"
            placeholder="GST Number"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="file"
            name="logo"
            onChange={(e) =>
              setFormData({ ...formData, logo: e.target.files[0] })
            }
            className="border p-2 w-full"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Review and Submit
          </button>
        </form>
      )}

      {/* Modal to show distributors */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-2">Distributor List</h2>
            <ul>
              {distributors.map((distributor) => (
                <li key={distributor.id} className="flex justify-between mb-2">
                  <span>{distributor.name}</span>
                  <div>
                    <button className="text-blue-500">View</button>
                    <button className="text-yellow-500">Edit</button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white p-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistributorManagement;
