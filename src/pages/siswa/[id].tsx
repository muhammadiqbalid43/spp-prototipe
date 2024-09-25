import { Button } from "@/components/button";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import {
  Dialog,
  DialogActions,
  DialogBody,
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

import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useState } from "react";

const pages = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Pembayaran", href: "#", current: true },
];

// Mock data for students
const siswas = [
  {
    id: "1",
    nisn: 1234567890,
    name: "Andi Susanto",
    agama: "Islam",
    gender: "Laki-laki",
    kelas: "XII IPA 1",
    angkatan: 2022,
  },
  {
    id: "2",
    nisn: 1235477822,
    name: "Budi Pratama",
    agama: "Islam",
    gender: "Laki-laki",
    kelas: "XII IPA 2",
    angkatan: 2020,
  },
  {
    id: "3",
    nisn: 1235477822,
    name: "Citra Dewi",
    agama: "Islam",
    gender: "Perempuan",
    kelas: "XII IPS 1",
    angkatan: 2021,
  },
  {
    id: "4",
    nisn: 1235237822,
    name: "Dian Safitri",
    agama: "Kristen",
    gender: "Perempuan",
    kelas: "XII D",
    angkatan: 2023,
  },
  {
    id: "5",
    nisn: 1232277822,
    name: "Eko Nugroho",
    agama: "Katolik",
    gender: "Laki-laki",
    kelas: "XII A",
    angkatan: 2019,
  },
];

const wali = [
  {
    id: "1",
    namaayah: "Ahmad Setiawan",
    pekerjaanayah: "Project Manager",
    namaibu: "Tika ismawati",
    pekerjaanibu: "Guru",
    alamat: "Jalan Mawari No. 5",
    telepon: 18534431000,
  },
  {
    id: "2",
    namaayah: "Doki Sitama",
    pekerjaanayah: "PNS",
    namaibu: "Bernadya ismawati",
    pekerjaanibu: "Penyanyi",
    alamat: "Jalan Sitoru No. 5",
    telepon: 18536631000,
  },
  {
    id: "3",
    namaayah: "Fadli Hidayatullah",
    pekerjaanayah: "PNS",
    namaibu: "Nova ismawati",
    pekerjaanibu: "Ibu rumah tangga",
    alamat: "Jalan Prapto",
    telepon: 18206631000,
  },
  {
    id: "4",
    namaayah: "Irvan Alfajri",
    pekerjaanayah: "Pengusaha",
    namaibu: "Rina ismawati",
    pekerjaanibu: "PNS",
    alamat: "Terminal",
    telepon: 18536622000,
  },
  {
    id: "5",
    namaayah: "Imam Al faruq",
    pekerjaanayah: "Softaware Engineer",
    namaibu: "Bernadya ismawati",
    pekerjaanibu: "Ibu rumah tangga",
    alamat: "Jalan Sitoru No. 5",
    telepon: 18536631022,
  },
];

const belumLunas = [
  {
    id: "1",
    tagihan: "SPP Bulan Juli",
    jumlah: "RP.500000",
    tempo: "2024-07-15",
  },
  {
    id: "2",
    tagihan: "Uang Buku",
    jumlah: "RP.750000",
    tempo: "2024-08-01",
  },
  {
    id: "3",
    tagihan: "Iuran Ekstrakurikuler",
    jumlah: "RP.250000",
    tempo: "2024-08-15",
  },
  {
    id: "4",
    tagihan: "SPP Bulan Agustus",
    jumlah: "RP.600000",
    tempo: "2024-09-01",
  },
  {
    id: "5",
    tagihan: "Uang Seragam",
    jumlah: "RP.600000",
    tempo: "2024-09-01",
  },
];

const lunas = [
  {
    id: "1",
    tagihan: "SPP Bulan Mei",
    jumlah: "RP.500000",
    tempo: "2024-05-15",
    bayar: "2024-06-10",
  },
  {
    id: "2",
    tagihan: "SPP Bulan Juni",
    jumlah: "RP.500000",
    tempo: "2024-09-01",
    bayar: "2024-5-10",
  },
  {
    id: "3",
    tagihan: "Uang Ujian",
    jumlah: "RP.300000",
    tempo: "2024-09-01",
    bayar: "2024-5-10",
  },
  {
    id: "4",
    tagihan: "Iuran OSIS",
    jumlah: "RP.100000",
    tempo: "2024-09-01",
    bayar: "2024-5-10",
  },
  {
    id: "5",
    tagihan: "Uang Study Tour",
    jumlah: "RP.1.500.000",
    tempo: "2024-09-01",
    bayar: "2024-5-10",
  },
];
// TOGGLE

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  //   console.log(siswas.find((siswa) => siswa.id === router.query.id));
  //   console.log(students[0].id);

  const siswa = siswas.find((siswa) => siswa.id === router.query.id);
  const walis = wali.find((wal) => wal.id === router.query.id);
  const belum = belumLunas.find((bel) => bel.id === router.query.id);

  const [selectedTab, setSelectedTab] = useState("siswa");
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

      <Heading className="mt-4">{siswa?.name}</Heading>

      <div className="flex gap-x-4 mt-5">
        <Button
          className="cursor-pointer"
          onClick={() => setSelectedTab("siswa")}
          outline={selectedTab !== "siswa"}
        >
          Siswa
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => setSelectedTab("wali")}
          outline={selectedTab !== "wali"}
        >
          Wali
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => setSelectedTab("pembayaran")}
          outline={selectedTab !== "pembayaran"}
        >
          Pembayaran
        </Button>
      </div>

      <div className="mt-5">
        {selectedTab === "siswa" && (
          <DescriptionList>
            <DescriptionTerm>NISN</DescriptionTerm>
            <DescriptionDetails>{siswa?.nisn}</DescriptionDetails>

            <DescriptionTerm>Nama</DescriptionTerm>
            <DescriptionDetails>{siswa?.name}</DescriptionDetails>

            <DescriptionTerm>Agama</DescriptionTerm>
            <DescriptionDetails>{siswa?.agama}</DescriptionDetails>

            <DescriptionTerm>Jenis Kelamin</DescriptionTerm>
            <DescriptionDetails>{siswa?.gender}</DescriptionDetails>

            <DescriptionTerm>Kelas</DescriptionTerm>
            <DescriptionDetails>{siswa?.kelas}</DescriptionDetails>

            <DescriptionTerm>Angkatan</DescriptionTerm>
            <DescriptionDetails>{siswa?.angkatan}</DescriptionDetails>
          </DescriptionList>
        )}
      </div>
      {selectedTab === "wali" && (
        <DescriptionList>
          <DescriptionTerm>Nama Ayah</DescriptionTerm>
          <DescriptionDetails>{walis?.namaayah}</DescriptionDetails>

          <DescriptionTerm>Pekerjaan Ayah</DescriptionTerm>
          <DescriptionDetails>{walis?.pekerjaanayah}</DescriptionDetails>

          <DescriptionTerm>Nama Ibu</DescriptionTerm>
          <DescriptionDetails>{walis?.namaibu}</DescriptionDetails>

          <DescriptionTerm>Pekerjaan Ibu</DescriptionTerm>
          <DescriptionDetails>{walis?.pekerjaanibu}</DescriptionDetails>

          <DescriptionTerm>Alamat Orang tua</DescriptionTerm>
          <DescriptionDetails>{walis?.alamat}</DescriptionDetails>

          <DescriptionTerm>Nomor Telepon Orang Tua</DescriptionTerm>
          <DescriptionDetails>{walis?.telepon}</DescriptionDetails>
        </DescriptionList>
      )}
      {selectedTab === "pembayaran" && (
        <div className="mt-20">
          <h1 className="font-bold">Pembayaran Belum Lunas</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Nama Tagihan</TableHeader>
                <TableHeader>Jumlah </TableHeader>
                <TableHeader>Jatuh Tempo</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {belumLunas.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.tagihan}</TableCell>
                  <TableCell>{user.jumlah}</TableCell>
                  <TableCell className="text-zinc-500">{user.tempo}</TableCell>
                  <TableCell>
                    <Button outline onClick={() => setIsOpen(true)}>
                      Bayar
                    </Button>

                    <Dialog open={isOpen} onClose={setIsOpen}>
                      <DialogTitle>{belum?.tagihan}</DialogTitle>

                      <DialogBody>
                        <Field>
                          <Input
                            type="file"
                            name="amount"
                            placeholder="$0.00"
                          />
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

          <h1 className="font-bold mt-10">Pembayaran Lunas</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Nama Tagihan</TableHeader>
                <TableHeader>Jumlah </TableHeader>
                <TableHeader>Jatuh Tempo</TableHeader>
                <TableHeader>Tanggal Bayar</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {lunas.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.tagihan}</TableCell>
                  <TableCell>{user.jumlah}</TableCell>
                  <TableCell className="text-zinc-500">{user.tempo}</TableCell>
                  <TableCell>
                    <TableCell className="text-zinc-500">
                      {user.bayar}
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
