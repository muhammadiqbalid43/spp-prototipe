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
import Stat from "@/components/stat";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  BanknotesIcon,
  CreditCardIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const pages = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Pembayaran", href: "#", current: true },
];

const tahun = [
  {
    id: "1",
    pembayaran: "SPP kelas 3 Bulan Juli 2024",
    terbit: "2024-06-01",
    tempo: "2024-07-15",
    totalBayar: "RP.1.500.000",
    telahDibayar: "RP.1.000.000",
    tunggakan: "RP.500.000",
    sisa: "RP.500.000",
  },
  {
    id: "2",
    pembayaran: "SPP kelas 3 Bulan Agustus 2024",
    terbit: "2024-07-01",
    tempo: "2024-08-15",
    totalBayar: "RP.1.500.000",
    telahDibayar: "RP.750.000",
    tunggakan: "RP.750.000",
    sisa: "RP.750.000",
  },
];

const classes = [
  {
    id: 1,
    nisn: 123458,
    nama: "Andi Setiawan",
    kelas: "1A",
    jumlah: "Rp 200.000",
  },
  {
    id: 2,
    nisn: 123458,
    nama: "Budi Setiawan",
    kelas: "2b",
    jumlah: "Rp 200.000",
  },
  {
    id: 3,
    nisn: 123458,
    nama: "Siti Setiawan",
    kelas: "2A",
    jumlah: "Rp 250.000",
  },
  {
    id: 4,
    nisn: 123458,
    nama: "Lita Setiawan",
    kelas: "1A",
    jumlah: "Rp 200.000",
  },
  {
    id: 5,
    nisn: 123458,
    nama: "Muhammad Iqbal",
    kelas: "3A",
    jumlah: "Rp 200.000",
  },
];

export default function Example() {
  const router = useRouter();

  //   console.log(siswas.find((siswa) => siswa.id === router.query.id));
  //   console.log(students[0].id);

  const pembayaran = tahun.find((tah) => tah.id === router.query.id);

  return (
    <>
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
      <Heading className="mt-4">{pembayaran?.pembayaran}</Heading>

      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mt-6">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
              <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                <BanknotesIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
                <span>Jatuh Tempo</span>
              </span>
              <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                <CreditCardIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
                <span className="inline-flex gap-3">Total Tunggakan</span>
              </span>
              <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
                <span>Telat Dibayar</span>
              </span>
            </div>
            <Button>Export</Button>
          </div>

          <div className="flex gap-x-8">
            <div className="mt-4 w-full grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <Stat title="Total bayar" value="RP. 1.000.000" />
              <Stat title="Telah dibayar" value="RP. 750.000" />
              <Stat title="Sisa bayar" value="RP. 250.000" />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
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

            <div className="mt-2">
              <Select name="status">
                <option value="active">Belum Lunas</option>
                <option value="paused">Lunas</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="px-4 py-5 mt-8 sm:p-6">
          {/* Content goes here */}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>NISN</TableHeader>
                <TableHeader>Nama</TableHeader>
                <TableHeader>Kelas</TableHeader>
                <TableHeader>Jumlah Bayar</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {classes.map((user) => (
                <TableRow key={user.nisn}>
                  <TableCell className="font-medium">{user.nisn}</TableCell>
                  <TableCell>{user.nama}</TableCell>
                  <TableCell>{user.kelas}</TableCell>
                  <TableCell>{user.jumlah}</TableCell>
                  <TableCell>
                    <Button outline>Bayar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

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
