import CustomerDemographic from "../components/CustomerDemographic";
import DashboardStats from "../components/DashboardStates";
import MonthlyTarget from "../components/MonthlyTarget";
import RecentOrders from "../components/RecentOrders";
import StatisticsChart from "../components/StatisticsChart";

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-md:flex-col gap-[20px]"> 
         <DashboardStats/>
      <MonthlyTarget/>
      </div>
    <div>
        <StatisticsChart/> 
    </div>
    <div className="flex max-md:flex-col gap-[20px]">
<CustomerDemographic/>
<RecentOrders/>
     
    </div>
     
    </div>
  );
}

export default Dashboard;
