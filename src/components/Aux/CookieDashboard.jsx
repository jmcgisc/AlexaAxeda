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

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const CookieDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: consents, error } = await supabase.from("cookie_consents").select("*");
      if (!error) setData(consents);
      else console.error("Supabase error:", error);
    };
    fetchData();
  }, []);

  const accepted = data.filter((d) => d.accepted).length;
  const rejected = data.filter((d) => !d.accepted).length;

  const serviceCount = data
    .flatMap((c) => c.services || [])
    .reduce((acc, s) => {
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {});

  const pathCount = data
    .map((c) => c.path)
    .filter(Boolean)
    .reduce((acc, p) => {
      acc[p] = (acc[p] || 0) + 1;
      return acc;
    }, {});

  const campaignCount = data
    .map((c) => c.utm_campaign)
    .filter(Boolean)
    .reduce((acc, c) => {
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});

  const sourceCount = data
    .map((c) => c.utm_source)
    .filter(Boolean)
    .reduce((acc, s) => {
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {});

  const mediumCount = data
    .map((c) => c.utm_medium)
    .filter(Boolean)
    .reduce((acc, m) => {
      acc[m] = (acc[m] || 0) + 1;
      return acc;
    }, {});

  const referrerCount = data
    .map((c) => c.referrer)
    .filter(Boolean)
    .reduce((acc, r) => {
      acc[r] = (acc[r] || 0) + 1;
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Rutas más visitadas</h2>
          <Bar
            data={{
              labels: Object.keys(pathCount),
              datasets: [
                {
                  label: "Visitas",
                  data: Object.values(pathCount),
                  backgroundColor: "#f59e0b",
                },
              ],
            }}
          />
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Campañas (utm_campaign)</h2>
          <Bar
            data={{
              labels: Object.keys(campaignCount),
              datasets: [
                {
                  label: "Frecuencia",
                  data: Object.values(campaignCount),
                  backgroundColor: "#10b981",
                },
              ],
            }}
          />
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Origen (utm_source)</h2>
          <Bar
            data={{
              labels: Object.keys(sourceCount),
              datasets: [
                {
                  label: "Frecuencia",
                  data: Object.values(sourceCount),
                  backgroundColor: "#6366f1",
                },
              ],
            }}
          />
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Medios (utm_medium)</h2>
          <Bar
            data={{
              labels: Object.keys(mediumCount),
              datasets: [
                {
                  label: "Frecuencia",
                  data: Object.values(mediumCount),
                  backgroundColor: "#ec4899",
                },
              ],
            }}
          />
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Referencias (referrer)</h2>
          <Bar
            data={{
              labels: Object.keys(referrerCount),
              datasets: [
                {
                  label: "Referencias",
                  data: Object.values(referrerCount),
                  backgroundColor: "#8b5cf6",
                },
              ],
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
              <th className="p-2 text-left">Path</th>
              <th className="p-2 text-left">Campaña</th>
              <th className="p-2 text-left">Fuente</th>
              <th className="p-2 text-left">Medio</th>
              <th className="p-2 text-left">Referrer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{new Date(item.created_at).toLocaleString()}</td>
                <td className="p-2">{item.ip_address}</td>
                <td className="p-2">{item.accepted ? "✅" : "❌"}</td>
                <td className="p-2">{(item.services || []).join(", ")}</td>
                <td className="p-2">{item.user_agent}</td>
                <td className="p-2">{item.path || "-"}</td>
                <td className="p-2">{item.utm_campaign || "-"}</td>
                <td className="p-2">{item.utm_source || "-"}</td>
                <td className="p-2">{item.utm_medium || "-"}</td>
                <td className="p-2">{item.referrer || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CookieDashboard;
