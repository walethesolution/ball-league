interface SubNavBarrProps {
  title: string;
  items: { label: string; tab: string }[];
  setActiveTab: (tab: string) => void;
}

const SubNavBarr: React.FC<SubNavBarrProps> = ({
  title,
  items,
  setActiveTab,
}) => {
  return (
    <div>
      <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
        <div className="text-[#FFFFFA] border-r-2 pr-3">
          <p className="text-lg">{title}</p>
        </div>
        {items.map((item) => (
          <div
            className="text-[#FFFFFA]"
            onClick={() => setActiveTab(item.tab)}
            key={item.tab}
          >
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavBarr;
