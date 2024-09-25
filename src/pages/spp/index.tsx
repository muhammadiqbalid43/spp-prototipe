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
  { name: "SPP", href: "#", current: true },
];

const tahun = [
  {
    id: 1,
    tahun: "2020/2021",
    nama: "2020",
    jumlah: "RP. 200.000",
  },
  {
    id: 2,
    tahun: "2021/2022",
    nama: "2021",
    jumlah: "RP. 250.000",
  },
  {
    id: 3,
    tahun: "2022/2023",
    nama: "2022",
    jumlah: "RP. 275.000",
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
      <Heading className="mt-4">Daftar SPP</Heading>
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
              <Button className="mt-2 " onClick={() => setIsOpen(true)}>
                Tambah
              </Button>
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
                <TableHeader>Nama</TableHeader>
                <TableHeader>Angkatan</TableHeader>
                <TableHeader>Jumlah</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {tahun.map((kelas) => (
                <TableRow key={kelas.id}>
                  <TableCell className="font-medium">{kelas.tahun}</TableCell>
                  <TableCell>{kelas.nama}</TableCell>
                  <TableCell>{kelas.jumlah}</TableCell>

                  <TableCell className="text-zinc-500">
                    <Button outline>Edit</Button>
                    <Button
                      color="red"
                      className="ml-2"
                      onClick={() => setIsOpen(true)}
                    >
                      Hapus
                    </Button>
                    <Dialog open={isOpen} onClose={setIsOpen}>
                      <DialogTitle>Buat SPP</DialogTitle>

                      <DialogBody>
                        <Field className="mt-4">
                          <Label>Angkatan</Label>
                          <Input type="number" placeholder="Angkatan" />
                        </Field>

                        <Field className="mt-4">
                          <Label>Jumlah</Label>
                          <Input type="number" placeholder="Jumlah" />
                        </Field>
                      </DialogBody>
                      <DialogActions>
                        <Button plain onClick={() => setIsOpen(false)}>
                          Kembali
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>Simpan</Button>
                      </DialogActions>
                    </Dialog>
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
