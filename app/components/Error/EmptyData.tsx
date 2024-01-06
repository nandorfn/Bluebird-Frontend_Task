const EmptyData = ({ message }: { message: string}) => {
    return (
        <div className="flex flex-col text-center my-32">
          <p className="text-xl text-[#6C6E72] font-semibold">{message}</p>
        </div>
    );
};

export default EmptyData;