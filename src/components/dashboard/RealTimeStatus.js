import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  TimeText,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  StatsContainer,
  StatCard,
  StatTitle,
  StatValue,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  FiltersContainer,
  TableContainer,
  Table,
  TableHeader,
  Th,
  Td,
  StatusBadge,
  DashboardContainer,Card
} from "../styled/ExpenseOverview.styles";

const EmployeeLocation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOffDuty, setShowOffDuty] = useState(false);

  const employees = [
    {
      id: "KV",
      name: "Kumar Viswas",
      attendance: "Never Marked Attendance",
      location: "NA",
      status: "Active",
      time: "-",
    },
    {
      id: "KP",
      name: "Kirat Pal",
      attendance: "Weekly Off",
      location: "NA",
      status: "Off Duty",
      time: "-",
    },
    {
      id: "MT",
      name: "Mayur Tyagi",
      attendance: "Punched In",
      location:
        "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gu...",
      status: "Active",
      time: "7 hours ago",
    },
    {
      id: "MB",
      name: "Mohan Bishnoi",
      attendance: "Punched Out",
      location: "Vikas Marg South City II Sector 49,Gurugram",
      status: "Active",
      time: "2 months ago",
    },
    {
      id: "OB",
      name: "OM BHAGWAN",
      attendance: "Punched In",
      location:
        "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gu...",
      status: "Active",
      time: "7 hours ago",
    },
    {
      id: "ST",
      name: "Shakshi Tomar",
      attendance: "Punched Out",
      location:
        "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 34, Gu...",
      status: "Active",
      time: "1 hours ago",
    },
    {
      id: "RS",
      name: "rahul Singh",
      attendance: "Weekly Off",
      location: "NA",
      status: "Off Duty",
      time: "-",
    },
  ];

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = showOffDuty ? emp.status === "Off Duty" : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardContainer>
      <Card>
        <StatsContainer>
          <StatCard variant="primary">
            <StatTitle variant="primary">Total Employees</StatTitle>
            <StatValue variant="primary">{employees.length}</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Off Duty</StatTitle>
            <StatValue>
              {employees.filter((emp) => emp.status === "Off Duty").length}
            </StatValue>
          </StatCard>
        </StatsContainer>

        <FiltersContainer>
          <SearchWrapper>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchWrapper>
          <CheckboxWrapper>
            <Checkbox
              type="checkbox"
              checked={showOffDuty}
              onChange={(e) => setShowOffDuty(e.target.checked)}
            />
            <CheckboxLabel>Show Off Duty Only</CheckboxLabel>
          </CheckboxWrapper>
        </FiltersContainer>

        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <Th>ID</Th>
                <Th>Employee</Th>
                <Th>Attendance</Th>
                <Th>Location</Th>
                <Th>Time</Th>
              </tr>
            </TableHeader>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id}>
                  <Td>{emp.id}</Td>
                  <Td>{emp.name}</Td>
                  <Td>
                    <StatusBadge status={emp.attendance}>
                      {emp.attendance}
                    </StatusBadge>
                  </Td>
                  <Td truncate>{emp.location}</Td>
                  <Td>
                    <TimeText>{emp.time}</TimeText>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardContainer>
  );
};

export default EmployeeLocation;
