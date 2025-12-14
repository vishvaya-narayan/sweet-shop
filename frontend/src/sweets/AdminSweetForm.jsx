import { useState } from "react";
import api from "../api/api";

export default function AdminSweetForm() {
  const [form, setForm] = useState({
    name: "", category: "", price: "", quantity: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/sweets", form);
    alert("Sweet added");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Sweet</h2>
      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button>Add</button>
    </form>
  );
}
