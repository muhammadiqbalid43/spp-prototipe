import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";

import { Field } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";

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
  ChevronRightIcon,
  XMarkIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

const pages = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Pembayaran", href: "#", current: true },
];

// Mock data for students
const students = [
  { id: "1234567890", name: "Andi Susanto" },
  { id: "2345678901", name: "Budi Pratama" },
  { id: "3456789012", name: "Citra Dewi" },
  { id: "4567890123", name: "Dian Safitri" },
  { id: "5678901234", name: "Eko Nugroho" },
];

// Mock data for unpaid bills
const unpaidBills = [
  {
    nama_tagihan: "SPP Bulan Juli",
    jumlah_bayar: "Rp 500.000",
    jatuh_tempo: "2023-07-15",
  },
  {
    nama_tagihan: "Uang Buku",
    jumlah_bayar: "Rp 250.000",
    jatuh_tempo: "2023-07-20",
  },
  {
    nama_tagihan: "Iuran Ekstrakurikuler",
    jumlah_bayar: "Rp 100.000",
    jatuh_tempo: "2023-07-25",
  },
];

// Mock data for paid bills
const paidBills = [
  {
    nama_tagihan: "SPP Bulan Juni",
    jumlah_bayar: "Rp 500.000",
    tanggal_bayar: "2023-06-10",
    waktu_bayar: "14:30",
  },
  {
    nama_tagihan: "Uang Seragam",
    jumlah_bayar: "Rp 300.000",
    tanggal_bayar: "2023-06-05",
    waktu_bayar: "10:15",
  },
];

// TOGGLE

export default function Example() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The page content */}
      {/* heading */}
      <Heading>Detail</Heading>

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

      {/* table */}
      <div className="flex gap-x-6">
        <div className="flex-1 divide-y divide-gray-200 mt-5 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5  sm:px-6">
            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
            <Heading>Daftar Kelas</Heading>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {/* Content goes here */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>NISN</TableHeader>
                  <TableHeader>Nama</TableHeader>
                  <TableHeader>Action</TableHeader>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell className="text-zinc-500">
                      <Button
                        className="cursor-pointer"
                        onClick={() => setSelectedStudent(student)}
                        outline
                      >
                        Lihat Tagihan
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {selectedStudent && (
          <div className="w-1/3 border p-4">
            <div className="flex justify-between">
              <p className="font-bold">
                Tagihan: <span>{selectedStudent.name}</span>
              </p>
              <Button
                className="cursor-pointer"
                outline
                onClick={() => setSelectedStudent(null)}
              >
                <XMarkIcon />
              </Button>
            </div>
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-2">
                Tagihan Belum Dibayar
              </h3>
              {unpaidBills.map((bill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div>
                    <p className="font-semibold">{bill.nama_tagihan}</p>
                    <p>{bill.jumlah_bayar}</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      Jatuh Tempo: {bill.jatuh_tempo}
                    </p>
                  </div>
                  <Button type="button" onClick={() => setIsOpen(true)}>
                    Bayar
                  </Button>
                  <Dialog open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>Konfirmasi Pembayaran?</DialogTitle>
                    <DialogDescription>
                      Apakah anda akan melanjutkan aksi ini?
                    </DialogDescription>
                    <DialogBody>
                      <Field>
                        <label>Bukti Bayar</label>
                        <Input id="bukti-bayar" type="file" className="mt-2" />
                      </Field>
                    </DialogBody>
                    <DialogActions>
                      <Button onClick={() => setIsOpen(false)}>
                        Ya, Lanjutkan
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              ))}

              <h3 className="text-lg font-semibold mt-6 mb-2">
                Tagihan Sudah Dibayar
              </h3>
              {paidBills.slice(0, 2).map((bill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div>
                    <p className="font-semibold">{bill.nama_tagihan}</p>
                    <p>{bill.jumlah_bayar}</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      Tanggal Bayar: {bill.tanggal_bayar}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      Waktu Bayar: {bill.waktu_bayar}
                    </p>
                  </div>
                  <Button outline disabled>
                    Lunas
                  </Button>
                </div>
              ))}
            </div>
            <Heading></Heading>
          </div>
        )}
      </div>
    </>
  );
}
