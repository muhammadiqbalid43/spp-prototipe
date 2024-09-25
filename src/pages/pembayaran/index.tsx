import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";

import { Field, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";

import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/pagination";
import { Select } from "@/components/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

import {
  ChevronRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

const pages = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Pembayaran", href: "#", current: true },
];

const pembayaran = [
  {
    id: 1,
    nisn: 123456,
    nama: "Adi Setiawan",
    tagihan: "SPP Oktober",
    tanggalbayar: "2023/09/01",
    jumlah: "RP.500000",
  },
  {
    id: 2,
    nisn: 123456,
    nama: "Niken Kenanga",
    tagihan: "SPP Oktober",
    tanggalbayar: "2023/09/01",
    jumlah: "RP.500000",
  },
  {
    id: 3,
    nisn: 123456,
    nama: "Irvan Alfiansyah",
    tagihan: "SPP November",
    tanggalbayar: "2023/11/01",
    jumlah: "RP.500000",
  },
];

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* The page content */}
      {/* breadcumb */}
      <nav aria-label="Breadcrumb" className="flex mt-4">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <a
                  href={page.href}
                  aria-current={page.current ? "page" : undefined}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {/* heading */}
      <Heading className="mt-4">Pembayaran</Heading>

      {/* table */}
      <div className="divide-y divide-gray-200 mt-5 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5  sm:px-6 flex gap-4  items-center">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <div>
            <div className="relative mt-2 rounded-md shadow-sm ">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Pencarian"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2">
            <Input type="date" />
          </div>

          <div className="mt-2 ml-auto">
            <Button type="button" onClick={() => setIsOpen(true)}>
              Tambah
            </Button>
            <Dialog open={isOpen} onClose={setIsOpen}>
              <DialogTitle>Buat Pembayaran</DialogTitle>

              <DialogBody>
                <Field>
                  <Label>Nama atau Nisn</Label>
                  <Input name="name" placeholder="nama atau nisn" />
                </Field>
                <Field className="mt-2">
                  <Label>Pilih Tagihan</Label>
                  <Select name="status">
                    <option value="active">SPP Juli</option>
                    <option value="paused">SPP September</option>
                    <option value="delayed">SPP Oktober</option>
                    <option value="canceled">SPP Desember</option>
                  </Select>
                </Field>
                <Field className="mt-4">
                  <Input type="file" />
                </Field>
              </DialogBody>
              <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                  Kembali
                </Button>
                <Button onClick={() => setIsOpen(false)}>Simpan</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          {/* Content goes here */}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>NISN</TableHeader>
                <TableHeader>Nama</TableHeader>
                <TableHeader>Tagihan</TableHeader>
                <TableHeader>Tanggal Bayar</TableHeader>
                <TableHeader>Jumlah</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {pembayaran.map((kelas) => (
                <TableRow key={kelas.id}>
                  <TableCell>{kelas.nisn}</TableCell>
                  <TableCell>{kelas.nama}</TableCell>
                  <TableCell>{kelas.tagihan}</TableCell>
                  <TableCell>{kelas.tanggalbayar}</TableCell>
                  <TableCell>
                    {kelas.jumlah}
                    {/* <Button outline href={`/pembayaran/${kelas.id}`}>
                      Detail
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* pagination */}
        <div>
          <Pagination>
            <PaginationPrevious href="?page=2" />
            <PaginationList>
              <PaginationPage href="?page=1">1</PaginationPage>
              <PaginationPage href="?page=2">2</PaginationPage>
              <PaginationPage href="?page=3" current>
                3
              </PaginationPage>
              <PaginationPage href="?page=4">4</PaginationPage>
              <PaginationGap />
              <PaginationPage href="?page=65">65</PaginationPage>
              <PaginationPage href="?page=66">66</PaginationPage>
            </PaginationList>
            <PaginationNext href="?page=4" />
          </Pagination>
        </div>
      </div>
    </>
  );
}
