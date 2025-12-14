import { useEffect, useState } from "react";
import api from "../api/api";
import SweetCard from "./SweetCard";

export default function SweetList() {
  const [sweets, setSweets] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.get("/sweets").then(res => setSweets(res.data));
  }, []);

  const purchase = async (id) => {
    await api.post(`/sweets/${id}/purchase`);
    const res = await api.get("/sweets");
    setSweets(res.data);
  };

  const filtered = sweets.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search sweets"
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid">
        {filtered.map(s => (
          <SweetCard key={s._id} sweet={s} onPurchase={purchase} />
        ))}
      </div>
    </>
  );
}
