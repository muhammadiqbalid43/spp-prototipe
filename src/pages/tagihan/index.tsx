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
  { name: "Tagihan", href: "#", current: true },
];

const tahun = [
  {
    id: 1,
    pembayaran: "SPP kelas 3 Bulan Juli 2024",
    terbit: "2024-06-01",
    tempo: "2024-07-15",
    totalBayar: "RP.1.500.000",
    telahDibayar: "RP.1.000.000",
    tunggakan: "RP.500.000",
    sisa: "RP.500.000",
  },
  {
    id: 2,
    pembayaran: "SPP kelas 3 Bulan Agustus 2024",
    terbit: "2024-07-01",
    tempo: "2024-08-15",
    totalBayar: "RP.1.500.000",
    telahDibayar: "RP.750.000",
    tunggakan: "RP.750.000",
    sisa: "RP.750.000",
  },
];

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {" "}
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
      <Heading className="mt-4">Daftar Tagihan SPP</Heading>
      {/* table */}
      <div className=" divide-y divide-gray-200 mt-5 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6 ">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <div className="flex items-center gap-4 ">
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
                  placeholder="Pencarian "
                  className="block  rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="ml-auto">
              <Button className="mt-2" onClick={() => setIsOpen(true)}>
                Tambah
              </Button>
              <Dialog open={isOpen} onClose={setIsOpen}>
                <DialogTitle>Buat Tagihan SPP</DialogTitle>

                <DialogBody>
                  <Field>
                    <Label>Keterangan Tambahan</Label>
                    <Input type="text" placeholder="Keterangan Tambahan" />
                  </Field>

                  <Field className="mt-4">
                    <Label>Tanggal Terbit</Label>
                    <Input type="date" placeholder="Tanggal Terbit" />
                  </Field>

                  <Field className="mt-4">
                    <Label>Tanggal Jatuh Tempo</Label>
                    <Input type="date" placeholder="Tanggal Jatuh Tempo" />
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
        </div>
        <div className="px-4 py-5 sm:p-6">
          {/* Content goes here */}
          <div className="flex justify-between">
            <div></div>
            <div></div>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Pembayaran</TableHeader>
                <TableHeader>Tanggal Terbit</TableHeader>
                <TableHeader>Tanggal Jatuh Tempo</TableHeader>
                <TableHeader>Total Bayar</TableHeader>
                <TableHeader>Total Telah dibayar</TableHeader>
                <TableHeader>Total Tunggakan</TableHeader>
                <TableHeader>Sisa Pembayaran</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {tahun.map((kelas) => (
                <TableRow key={kelas.id}>
                  <TableCell className="font-medium">
                    {kelas.pembayaran}
                  </TableCell>
                  <TableCell>{kelas.terbit}</TableCell>
                  <TableCell>{kelas.tempo}</TableCell>
                  <TableCell>{kelas.totalBayar}</TableCell>
                  <TableCell>{kelas.telahDibayar}</TableCell>
                  <TableCell>{kelas.tunggakan}</TableCell>
                  <TableCell>{kelas.sisa}</TableCell>
                  <TableCell>
                    <Button outline href={`/tagihan/${kelas.id}`}>
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* pagination */}
          <div className="mt-4">
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
      </div>
    </div>
  );
}
