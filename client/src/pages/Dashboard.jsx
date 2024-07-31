import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";


export default function Dashboard() {
    return (
        <div className="flex h-screen ">
            <DashSidebar className="w-64 bg-gray-800 text-white p-5 " />
            <div className="flex-1 flex flex-col p-5">
                <DashProfile className="mb-5" />
            </div>
        </div>
    );
}