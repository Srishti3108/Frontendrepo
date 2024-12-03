import React, { useEffect, useState } from "react";
import axios from "axios";

const AssetManagement = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get("https://localhost:7107/api/Assets");
        setAssets(res.data);
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    };
    fetchAssets();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Asset Management</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Model</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.assetId}>
              <td>{asset.assetId}</td>
              <td>{asset.assetName}</td>
              <td>{asset.assetCategory}</td>
              <td>{asset.assetModel}</td>
              <td>{asset.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetManagement;
