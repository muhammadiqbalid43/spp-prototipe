export default function TabButtons({ siswas, activeTab, setActiveTab }) {
  return (
    <div className="sm:hidden">
      {siswas.map((item, index) => (
        <li key={item.name} onClick={() => setActiveTab(index)}>
          {item.name}
        </li>
      ))}
    </div>
  );
}
