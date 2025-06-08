import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { createClient } from "@supabase/supabase-js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const CookieDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: rows, error } = await supabase.from("cookie_consents").select("*");
      if (!error) setData(rows);
      else console.error("Supabase fetch error:", error);
    };
    fetchData();
  }, []);

  const accepted = data.filter((d) => d.accepted).length;
  const rejected = data.filter((d) => !d.accepted).length;

  const allServices = data.flatMap((c) => Array.isArray(c.services) ? c.services : (c.services || "").split(", "));
  const serviceCount = allServices.reduce((acc, s) => {
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard de Consentimientos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Aceptados vs Rechazados</h2>
          <Pie
            data={{
              labels: ["Aceptados", "Rechazados"],
              datasets: [
                {
                  data: [accepted, rejected],
                  backgroundColor: ["#16a34a", "#dc2626"],
                },
              ],
            }}
          />
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Servicios Consentidos</h2>
          <Bar
            data={{
              labels: Object.keys(serviceCount),
              datasets: [
                {
                  label: "Frecuencia",
                  data: Object.values(serviceCount),
                  backgroundColor: "#3b82f6",
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded shadow overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Últimos Consentimientos</h2>
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Fecha</th>
              <th className="p-2 text-left">IP</th>
              <th className="p-2 text-left">Aceptado</th>
              <th className="p-2 text-left">Servicios</th>
              <th className="p-2 text-left">User Agent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{new Date(item.created_at).toLocaleString()}</td>
                <td className="p-2">{item.ip_address}</td>
                <td className="p-2">{item.accepted ? "✅" : "❌"}</td>
                <td className="p-2">{Array.isArray(item.services) ? item.services.join(", ") : item.services}</td>
                <td className="p-2">{item.user_agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CookieDashboard;
