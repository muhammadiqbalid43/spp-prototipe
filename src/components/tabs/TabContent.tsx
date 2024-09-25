export default function TabContent({ siswas, activeTab }) {
  return (
    <div>
      <div key={siswas}>
        <p>{siswas[activeTab].angkatan}</p>
      </div>
    </div>
  );
}
