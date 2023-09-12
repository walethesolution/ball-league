interface SubNavBarrProps {
  title: string;
  items: { label: string; tab: string }[];
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const SubNavBarr: React.FC<SubNavBarrProps> = ({
  title,
  items,
  setActiveTab,
  activeTab,
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
            <div className="flex relative">
              {item.label}
              {activeTab === item.tab && (
                <div className="ml-auto mt-1 w-10 h-1 bg-white rounded-full absolute transform translate-y-5 flex "></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavBarr;
