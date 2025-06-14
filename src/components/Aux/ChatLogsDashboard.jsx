import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const ChatLogsDashboard = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data, error } = await supabase.from("chat_logs").select("*").order("created_at", { ascending: false });
      if (error) {
        console.error("Error al obtener chat_logs:", error);
      } else {
        setLogs(data);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Chat Logs</h1>
      <div className="overflow-auto bg-white shadow rounded">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Pregunta</th>
              <th className="px-4 py-2 text-left">Respuesta</th>
              <th className="px-4 py-2 text-left">IP</th>
              <th className="px-4 py-2 text-left">User Agent</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-t">
                <td className="px-4 py-2">{new Date(log.created_at).toLocaleString()}</td>
                <td className="px-4 py-2 whitespace-pre-wrap">{log.question}</td>
                <td className="px-4 py-2 whitespace-pre-wrap">{log.answer}</td>
                <td className="px-4 py-2">{log.ip_address || "-"}</td>
                <td className="px-4 py-2 break-all">{log.user_agent?.slice(0, 50)}...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatLogsDashboard;
