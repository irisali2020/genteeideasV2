import React from 'react';
import { Search } from 'lucide-react';

export default function Buscador({ valor, onChange }) {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <Search size={20} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="Buscar servicios (ej. reclutamiento, nómina...)"
            value={valor}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}