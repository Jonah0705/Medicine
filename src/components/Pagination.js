import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination(props) {
  const { activePage, onPageChange, perPage } = props;
  const totalItems = Math.ceil(props.total / perPage);

  const next = () => {
    if (activePage === totalItems) return;
    onPageChange(activePage + 1);
  };

  const prev = () => {
    if (activePage === 1) return;
    onPageChange(activePage - 1);
  };

  return (
    <div className="flex items-center justify-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{activePage}</strong> of{" "}
        <strong className="text-gray-900">{totalItems}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={activePage === totalItems}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export default Pagination;
