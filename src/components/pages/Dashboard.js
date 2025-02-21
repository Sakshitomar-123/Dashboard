import React, { useState, useEffect } from "react";
import TopStats from "../dashboard/StatCard";
import EmployeeLocation from "../dashboard/RealTimeStatus";
import WorkingHours from "../dashboard/WorkingHoursChart";
import ExpenseOverview from "../dashboard/ExpenseOverview";
import TaskStatus from "../dashboard/TaskOverview";
import TeamAttendance from "../dashboard/TeamwiseAttendance";
import StatsCard from "../dashboard/AttendanceChart";
import { DashboardContainer, Grid, Title } from "../styled/Dashboard.styles";
import { LoadingSkeleton } from "../common/LoadingSpinner";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API calls
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error loading dashboard:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <DashboardContainer>
      <Title>RealTime Dashboard</Title>

      {loading ? <LoadingSkeleton height="120px" lines={4} /> : <TopStats />}

      {loading ? <LoadingSkeleton height="200px" lines={5} /> : <StatsCard />}

      <Grid>
        {loading ? (
          <>
            <LoadingSkeleton height="300px" />
            <LoadingSkeleton height="300px" />
          </>
        ) : (
          <>
            <EmployeeLocation />
            <WorkingHours />
          </>
        )}
      </Grid>

      <Grid>
        {loading ? (
          <>
            <LoadingSkeleton height="250px" />
            <LoadingSkeleton height="250px" />
            <LoadingSkeleton height="250px" />
          </>
        ) : (
          <>
            <ExpenseOverview />
            <TaskStatus />
            <TeamAttendance />
          </>
        )}
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
