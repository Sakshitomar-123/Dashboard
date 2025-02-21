import styled from "styled-components";

export const ExpenseCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 480px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    height: 550px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) =>
    props.variant === "primary" ? "#f0f7ff" : "#fff5eb"};
`;

const StatTitle = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${(props) => (props.variant === "primary" ? "#1e88e5" : "#f57c00")};
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.25rem 0 0 0;
  color: ${(props) => (props.variant === "primary" ? "#0d47a1" : "#e65100")};
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #1e88e5;
    box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9e9e9e;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const CheckboxLabel = styled.span`
  font-size: 0.875rem;
  color: #616161;
`;

const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  border-radius: 4px;
  min-height: 0;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 3px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #616161;
  white-space: nowrap;
  background: white;
`;

const Td = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  border-bottom: 1px solid #e0e0e0;
  color: #424242;

  ${(props) =>
    props.truncate &&
    `
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;

  ${(props) => {
    switch (props.status) {
      case "Punched In":
        return "background: #e8f5e9; color: #2e7d32;";
      case "Punched Out":
        return "background: #ffebee; color: #c62828;";
      case "Weekly Off":
        return "background: #fff3e0; color: #ef6c00;";
      default:
        return "background: #f5f5f5; color: #616161;";
    }
  }}
`;

const TimeText = styled.span`
  color: #757575;
`;

export {
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
};
