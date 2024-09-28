import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ userRole, userId }) => {
  //   const [data, setData] = useState(null);
  const data = {
    success: true,
    data: {
      distributorStats: [
        {
          distributor_id: 1,
          name: "Distributor A",
          total_oil: 1500,
        },
        {
          distributor_id: 2,
          name: "Distributor B",
          total_oil: 2000,
        },
      ],
      clientStats: [
        {
          client_id: 1,
          name: "Client X",
          total_oil: 500,
        },
        {
          client_id: 2,
          name: "Client Y",
          total_oil: 300,
        },
      ],
      criticalReports: 10,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/dashboard", {
          role: userRole,
          userId,
        });
        // setData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [userRole, userId]);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data.data.distributorStats, "data.data.distributorStats");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {userRole !== "MANUFACTURER" && (
        <div>
          <h2 className="text-xl font-semibold">Distributor Stats</h2>
          <ul>
            {data.data.distributorStats.map((distributor) => (
              <li key={distributor.distributor_id}>
                Distributor ID: {distributor.distributor_id} - Total Oil
                Consumption: {distributor.total_oil}
              </li>
            ))}
          </ul>
          <p>Total Critical Reports: {data.data.criticalReports}</p>
        </div>
      )}

      {userRole !== "DISTRIBUTOR" && (
        <div>
          <h2 className="text-xl font-semibold">Client Stats</h2>
          <ul>
            {data.data.clientStats.map((client) => (
              <li key={client.client_id}>
                Client ID: {client.client_id} - Total Oil Consumption:{" "}
                {client.total_oil}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
