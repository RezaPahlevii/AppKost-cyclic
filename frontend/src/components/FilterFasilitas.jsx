import React from "react";
import { Button } from "react-bootstrap";

const FilterFasilitas = () => {
  return (
    <div>
      <Button variant="outline-secondary" className="mr-2 rounded-pill">
        Harga
      </Button>
      <Button variant="outline-secondary" className="mr-2 rounded-pill">
        Fasilitas
      </Button>
      <Button variant="outline-secondary" className="mr-2 rounded-pill">
        Gender
      </Button>
      <hr />
    </div>
  );
};

export default FilterFasilitas;
