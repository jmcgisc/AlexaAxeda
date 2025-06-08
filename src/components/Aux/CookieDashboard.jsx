import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import 'leaflet/dist/leaflet.css';


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [consents, setConsents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: "", from: "", to: "" });

  useEffect(() => {
    fetch("/.netlify/functions/get-cookie-consents")
      .then((res) => res.json())
      .then((data) => {
        setConsents(data);
        setLoading(false);
      });
  }, []);

  const filtered = consents.filter((c) => {
    const matchSearch =
      c.ip_address?.includes(filters.search) ||
      c.user_agent?.toLowerCase().includes(filters.search.toLowerCase());

    const createdAt = new Date(c.created_at);
    const from = filters.from ? new Date(filters.from) : null;
    const to = filters.to ? new Date(filters.to) : null;

    const inDateRange = (!from || createdAt >= from) && (!to || createdAt <= to);

    return matchSearch && inDateRange;
  });

  const countByType = filtered.reduce(
    (acc, item) => {
      acc[item.accepted ? "Aceptados" : "Rechazados"]++;
      return acc;
    },
    { Aceptados: 0, Rechazados: 0 }
  );

  const allServices = filtered.flatMap((c) => c.services || []);
  const serviceCount = allServices.reduce((acc, s) => {
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-50 dark:bg-black min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">Dashboard de Cookies</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar IP o User Agent"
          className="p-2 border rounded"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <input
          type="date"
          className="p-2 border rounded"
          value={filters.from}
          onChange={(e) => setFilters({ ...filters, from: e.target.value })}
        />
        <input
          type="date"
          className="p-2 border rounded"
          value={filters.to}
          onChange={(e) => setFilters({ ...filters, to: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent>
            <h2 className="font-bold text-lg mb-2">Consentimientos Aceptados vs Rechazados</h2>
            <Pie
              data={{
                labels: Object.keys(countByType),
                datasets: [
                  {
                    data: Object.values(countByType),
                    backgroundColor: ["#16a34a", "#dc2626"],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="font-bold text-lg mb-2">Servicios Consentidos</h2>
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
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardContent>
          <h2 className="font-bold text-lg mb-4">Mapa IPs (simulado si hay lat/lng)</h2>
          <MapContainer center={[21.16, -86.85]} zoom={2} className="h-96 w-full rounded-lg">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filtered.map((c, i) =>
              c.lat && c.lng ? (
                <Marker key={i} position={[c.lat, c.lng]}>
                  <Popup>
                    {c.ip_address}
                    <br />
                    {c.user_agent?.slice(0, 50)}...
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="font-bold text-lg mb-4">Datos Recientes</h2>
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-2">Fecha</th>
                  <th className="p-2">IP</th>
                  <th className="p-2">Aceptado</th>
                  <th className="p-2">Servicios</th>
                  <th className="p-2">Agente</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2 text-xs">{new Date(c.created_at).toLocaleString()}</td>
                    <td className="p-2 text-xs">{c.ip_address}</td>
                    <td className="p-2">{c.accepted ? "✅" : "❌"}</td>
                    <td className="p-2 text-xs">{(c.services || []).join(", ")}</td>
                    <td className="p-2 text-xs">{c.user_agent?.slice(0, 60)}...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
