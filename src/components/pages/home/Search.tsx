"use client"

import { Input } from "@nextui-org/react"
import { BsSearch } from "react-icons/bs"

const Search = () => {
   return (
      <Input
         type="search"
         placeholder="جستجو..."
         startContent={<BsSearch className="rotate-y-180" size={18} />}
         labelPlacement="inside"
         isClearable
         radius="full"
      />
   )
}

export default Search
