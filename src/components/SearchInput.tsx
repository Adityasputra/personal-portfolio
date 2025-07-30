"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue.toLowerCase());
  };

  return (
    <Input
      type="text"
      placeholder="Cari catatan..."
      value={value}
      onChange={handleChange}
      className="w-full max-w-md"
    />
  );
}
