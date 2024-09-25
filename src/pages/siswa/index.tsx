import { Button } from "@/components/button";
import { Heading } from "@/components/heading";

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

const pages = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Siswa", href: "#", current: true },
];

const classes = [
  {
    id: 1,
    nisn: 123458,
    name: "Andi Setiawan",
    gender: "Laki-laki",
    kelas: "XII IPA 1",
    angkatan: 2020,
  },
  {
    id: 2,
    nisn: 123458,
    name: "Budi Setiawan",
    gender: "Perempuan",
    kelas: "XII IPS 2",
    angkatan: 2020,
  },
  {
    id: 3,
    nisn: 123458,
    name: "Siti Setiawan",
    gender: "Perempuan",
    kelas: "XII IPA 3",
    angkatan: 2022,
  },
];

export default function Index() {
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
      <Heading className="mt-4">Daftar Siswa</Heading>

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
                  placeholder="Pencarian berdasarkan NISN atau Nama"
                  className="block w-[320px] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-2">
              <Select name="status">
                <option value="active">Kelas</option>
                <option value="paused">1</option>
                <option value="delayed">2</option>
                <option value="canceled">3</option>
                <option value="canceled">4</option>
                <option value="canceled">5</option>
                <option value="canceled">6</option>
              </Select>
            </div>
            <div className="ml-auto">
              <Button href="/siswa/create" className="mt-2 ">
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
                <TableHeader>NISN</TableHeader>
                <TableHeader>NAMA</TableHeader>
                <TableHeader>KELAS</TableHeader>
                <TableHeader>ANGKATAN</TableHeader>
                <TableHeader>ACTION</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {classes.map((kelas) => (
                <TableRow key={kelas.id}>
                  <TableCell className="font-medium">{kelas.nisn}</TableCell>
                  <TableCell>{kelas.name}</TableCell>
                  <TableCell>{kelas.gender}</TableCell>
                  <TableCell>{kelas.kelas}</TableCell>
                  <TableCell>{kelas.angkatan}</TableCell>
                  <TableCell className="text-zinc-500">
                    <Button outline href={`/siswa/${kelas.id}`}>
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
    </>
  );
}
