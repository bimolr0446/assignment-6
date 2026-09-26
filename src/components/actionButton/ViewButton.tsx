import Link from 'next/link';


const ViewButton = ({ workout }: { workout: { id: string | number } }) => {
    return (
      <Link href={`/workout/${workout.id}`}>
        <button className="rounded-full bg-transparent cursor-pointer border-[#232732] border-2 px-4 py-1.5 text-[9px] font-bold text-white whitespace-nowrap">
          View Details
        </button>
      </Link>
    );
};

export default ViewButton;